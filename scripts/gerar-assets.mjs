/**
 * Gera os derivados de imagem servidos em public/assets a partir dos originais
 * de brand-assets/.  Rodar com:  npm run assets:gen
 *
 * Por que existe: os originais são PNGs de 1080px (~2,2 MB cada) exibidos em
 * caixas de no máximo 420px. Servir o original custava 6,6 MB no deploy.
 *
 * Atenção: monogram-transparent.png, monogram-white-transparent.png e
 * logo-transparent.png têm o canal alfa zerado (renderizam invisíveis).
 * Por isso o monograma é reconstruído a partir de monogram-light.png, que tem a
 * marca em creme sobre charcoal sólido: a luminância normalizada vira o alfa.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const RAIZ = path.resolve(import.meta.dirname, '..');
const ORIGEM = path.join(RAIZ, 'brand-assets');
const DESTINO = path.join(RAIZ, 'public', 'assets');

const FOTOS = [
  { arquivo: 'tais-portrait.png', base: 'tais-portrait', larguras: [840, 420, 160] },
  { arquivo: 'tais-previdenciario.png', base: 'tais-previdenciario', larguras: [800, 400] },
];

const CORES = {
  cream: { r: 250, g: 248, b: 245 },
  ink: { r: 59, g: 55, b: 50 },
};

function kb(arquivo) {
  return (fs.statSync(arquivo).size / 1024).toFixed(1) + ' KB';
}

async function gerarFotos() {
  for (const { arquivo, base, larguras } of FOTOS) {
    const origem = path.join(ORIGEM, arquivo);
    if (!fs.existsSync(origem)) {
      console.log(`  ! ${arquivo} nao encontrado em brand-assets/, pulando`);
      continue;
    }
    for (const largura of larguras) {
      const saida = path.join(DESTINO, `${base}-${largura}.webp`);
      await sharp(origem)
        .resize({ width: largura, withoutEnlargement: true })
        .webp({ quality: largura > 600 ? 82 : 80 })
        .toFile(saida);
      console.log(`  ${base}-${largura}.webp`.padEnd(36), kb(saida));
    }
  }
}

/** Mascara em cinza da marca, ja recortada, vinda de monogram-light.png. */
async function mascaraDoMonograma() {
  const origem = path.join(ORIGEM, 'monogram-light.png');
  const { min, max } = (await sharp(origem).removeAlpha().greyscale().stats()).channels[0];
  const escala = 255 / (max - min);

  const normalizada = await sharp(origem)
    .removeAlpha()
    .greyscale()
    .linear(escala, -min * escala)
    .png()
    .toBuffer();

  return sharp(normalizada).trim({ threshold: 12 }).png().toBuffer();
}

/** Monta RGBA: cor chapada + alfa vindo da mascara. */
async function marcaColorida(mascara, largura, cor) {
  const { data, info } = await sharp(mascara)
    .resize({ width: largura })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    rgba[i * 4] = cor.r;
    rgba[i * 4 + 1] = cor.g;
    rgba[i * 4 + 2] = cor.b;
    rgba[i * 4 + 3] = data[i * channels];
  }
  return { rgba, width, height };
}

async function gerarMonograma() {
  const mascara = await mascaraDoMonograma();

  for (const largura of [320, 96]) {
    const { rgba, width, height } = await marcaColorida(mascara, largura, CORES.cream);
    const saida = path.join(DESTINO, `monogram-cream-${largura}.webp`);
    await sharp(rgba, { raw: { width, height, channels: 4 } })
      .webp({ quality: 92, alphaQuality: 100 })
      .toFile(saida);
    console.log(`  monogram-cream-${largura}.webp`.padEnd(36), kb(saida));
  }

  // favicon: marca creme centrada em quadrado charcoal
  const marca = await marcaColorida(mascara, 46, CORES.cream);
  const marcaPng = await sharp(marca.rgba, {
    raw: { width: marca.width, height: marca.height, channels: 4 },
  }).png().toBuffer();

  const saidaFavicon = path.join(DESTINO, 'favicon-64.png');
  await sharp({
    create: { width: 64, height: 64, channels: 4, background: { ...CORES.ink, alpha: 1 } },
  })
    .composite([{ input: marcaPng, gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toFile(saidaFavicon);
  console.log('  favicon-64.png'.padEnd(36), kb(saidaFavicon));
}

fs.mkdirSync(DESTINO, { recursive: true });
console.log('Gerando derivados em public/assets/\n');
await gerarFotos();
await gerarMonograma();

const total = fs
  .readdirSync(DESTINO)
  .reduce((soma, f) => soma + fs.statSync(path.join(DESTINO, f)).size, 0);
console.log(`\npublic/assets total: ${(total / 1024).toFixed(0)} KB`);

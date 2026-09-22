/**
 * Pré-renderiza a página para dentro de dist/index.html.
 *
 * Por que: sendo uma SPA, o HTML publicado tinha <div id="root"></div> vazio.
 * O rastreador recebia uma casca, e o LCP era quase todo espera de JavaScript
 * (3.436 ms de 3.441 ms medidos em Slow 4G). Com o HTML já renderizado, o
 * conteúdo aparece antes do JS carregar e o cliente apenas hidrata.
 *
 * Não usa puppeteer nem framework de SSR: só renderToString do react-dom, que
 * já é dependência do projeto.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadEnv } from 'vite';

const RAIZ = path.resolve(import.meta.dirname, '..');
const DIST = path.join(RAIZ, 'dist');
const SSR = path.join(RAIZ, 'dist-ssr', 'entry-server.js');
const PLACEHOLDER = 'DOMINIO-A-DEFINIR';

const env = loadEnv('production', RAIZ, 'VITE_');
const siteUrl = (env.VITE_SITE_URL || '').replace(/\/+$/, '');

if (!siteUrl || siteUrl.includes(PLACEHOLDER)) {
  console.warn('\n' + '!'.repeat(72));
  console.warn('!! VITE_SITE_URL ainda é um placeholder.');
  console.warn('!! canonical, og:url, og:image e sitemap.xml vão sair errados.');
  console.warn('!! Defina o domínio real no arquivo .env antes de publicar.');
  console.warn('!'.repeat(72) + '\n');
}

// 1) injeta o HTML renderizado
const { render } = await import(pathToFileURL(SSR).href);
const marcacao = render();

const arquivoHtml = path.join(DIST, 'index.html');
const html = fs.readFileSync(arquivoHtml, 'utf8');
const alvo = '<div id="root"></div>';

if (!html.includes(alvo)) {
  throw new Error(`prerender: "${alvo}" não encontrado em dist/index.html`);
}

fs.writeFileSync(arquivoHtml, html.replace(alvo, `<div id="root">${marcacao}</div>`));

// 2) robots.txt e sitemap.xml, gerados aqui para sempre baterem com VITE_SITE_URL
const dataIso = new Date().toISOString().slice(0, 10);

fs.writeFileSync(
  path.join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);

fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${dataIso}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
);

// 3) relatório
const tamanho = (p) => (fs.statSync(p).size / 1024).toFixed(1) + ' KB';
const finalHtml = fs.readFileSync(arquivoHtml, 'utf8');
const textoVisivel = finalHtml
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

console.log('\nPré-renderização concluída');
console.log(`  dist/index.html      ${tamanho(arquivoHtml)}`);
console.log(`  texto no HTML        ${textoVisivel.length} caracteres (antes: 0)`);
console.log(`  robots.txt           ok`);
console.log(`  sitemap.xml          ok  (${siteUrl}/)`);

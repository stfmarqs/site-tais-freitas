# brand-assets

Arquivos originais da marca. **Esta pasta não vai para o deploy** — só o que está em
`public/` é copiado para `dist/`. Guardamos os originais aqui para poder regerar os
derivados quando necessário.

## Por que saíram de `public/assets`

Somavam 7,4 MB que eram publicados sem que nenhuma tela referenciasse. As três fotos em
PNG (1080px, ~2,2 MB cada) eram servidas para caixas de no máximo 420 px.

## Arquivos com o canal alfa zerado (não usar)

Três originais estão quebrados — têm os pixels da marca no RGB, mas o canal alfa é
inteiramente 0, ou seja, renderizam 100% invisíveis:

- `monogram-white-transparent.png`
- `monogram-transparent.png`
- `logo-transparent.png`

Eram esses que o site usava no logo do cabeçalho, na sobreposição do "Sobre", no modal do
cartão, na marca d'água do rodapé e no favicon — todos apareciam vazios.

O substituto (`public/assets/monogram-cream-*.webp`) foi reconstruído a partir de
`monogram-light.png`, que tem a marca em creme sobre fundo charcoal sólido: a luminância
foi normalizada e usada como alfa. Se for preciso refazer ou gerar outras variantes, o
caminho é esse.

Versões com alfa íntegro e utilizáveis: `logo-horizontal-charcoal.png`,
`logo-horizontal-white.png`, `logo-vertical-charcoal.png`, `logo-vertical-white.png`.

## Derivados em uso (`public/assets/`)

| Arquivo | Origem | Onde aparece |
|---|---|---|
| `tais-portrait-840.webp` / `-420.webp` | `tais-portrait.png` | retrato do Hero (`srcset`) |
| `tais-portrait-160.webp` | `tais-portrait.png` | avatar do modal do cartão |
| `tais-previdenciario-800.webp` / `-400.webp` | `tais-previdenciario.png` | foto da seção "Sobre" |
| `monogram-cream-320.webp` | `monogram-light.png` | marca d'água do rodapé, fundo do modal |
| `monogram-cream-96.webp` | `monogram-light.png` | logo do cabeçalho, rodapé, selo do "Sobre" |
| `favicon-64.png` | `monogram-light.png` | favicon |

`tais-laptop.png` (2,4 MB) não é usado em nenhuma tela.

import React from 'react';

const termos = [
  'Aposentadoria Urbana & Rural',
  'BPC / LOAS',
  'Benefício Negado no INSS',
  'Auxílio-Doença & Incapacidade',
  'Pensão por Morte',
  'Revisão de Benefício',
  'Planejamento Previdenciário',
  'Acertos de CNIS',
  'Direito Aéreo & Voos',
  'Golpes do Pix & Fraudes',
  'Negativação Indevida',
];

export default function FaixaAreas() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/10 bg-charcoal-dark py-4 text-white"
      aria-label="Áreas de atuação em destaque"
    >
      {/* Máscaras de gradiente nas laterais para entrada/saída suave */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-charcoal-dark to-transparent sm:w-28"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-charcoal-dark to-transparent sm:w-28"
        aria-hidden="true"
      />

      <div className="animate-marquee flex items-center">
        {/* Renderizado duas vezes para emendar sem pulo */}
        {[...termos, ...termos].map((termo, i) => (
          <div key={`${termo}-${i}`} className="flex shrink-0 items-center">
            <span className="mx-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 sm:mx-6 sm:text-xs">
              {termo}
            </span>
            <span className="text-[10px] text-peach/60" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


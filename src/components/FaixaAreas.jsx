import React from 'react';

const termos = [
  'Aposentadoria',
  'BPC/LOAS',
  'Auxílio-Doença',
  'Pensão por Morte',
  'Revisão de Benefício',
  'CNIS',
  'Auxílio-Acidente',
  'Direito Aéreo',
  'Fraude Bancária',
  'Negativação Indevida',
];

/**
 * Faixa de áreas entre seções. Dá o corte de ritmo entre um bloco claro e o
 * próximo, e lista os termos que a pessoa costuma digitar na busca.
 *
 * Estática de propósito. Texto em movimento contínuo é difícil de ler para o
 * público previdenciário, que é majoritariamente 60+, e entra na lista de
 * gatilhos vestibulares.
 */
export default function FaixaAreas() {
  return (
    <div className="border-y border-charcoal-deep bg-charcoal-dark py-4">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 sm:px-6 lg:px-8">
        {termos.map((termo, i) => (
          <React.Fragment key={termo}>
            {i > 0 && (
              <li aria-hidden="true" className="text-[10px] text-peach/50">
                ✦
              </li>
            )}
            <li className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
              {termo}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

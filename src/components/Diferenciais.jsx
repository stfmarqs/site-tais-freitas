import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DIFERENCIAIS } from '../content';

export default function Diferenciais() {
  return (
    <section id="atendimento" className="border-b border-rule bg-white py-20" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
              02 — Atendimento
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-title font-semibold text-charcoal">Como eu atendo</h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item) => (
            <li
              key={item.titulo}
              className="group rounded-surface border border-rule bg-cream p-6 text-left shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-rule-strong hover:shadow-sm"
            >
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-field border border-rule bg-white text-terracotta transition-colors group-hover:border-terracotta/40 group-hover:bg-peach/20">
                <CheckCircle2 size={16} aria-hidden="true" />
              </span>
              <p className="text-sm font-bold text-charcoal">{item.titulo}</p>
              <p className="mt-1 text-sm leading-relaxed text-charcoal-muted">{item.texto}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

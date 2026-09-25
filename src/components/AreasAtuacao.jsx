import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';
import { AREAS, mensagemSaibaMais } from '../content';

export default function AreasAtuacao() {
  return (
    <section id="atuacao" className="border-y border-rule bg-white py-20" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
              01 — Áreas de Atuação
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-title font-semibold text-charcoal">
            Como posso te ajudar
          </h2>
        </div>

        {/* As duas áreas ficam sempre no HTML: com abas, a inativa não entraria
            na pré-renderização. */}
        <div className="mt-14 space-y-16">
          {AREAS.map((area) => (
            <div key={area.id}>
              <h3 className="flex items-center gap-3 font-serif text-2xl font-semibold text-charcoal">
                <span className="h-px w-6 bg-terracotta" aria-hidden="true" />
                {area.titulo}
              </h3>
              {area.subtitulo && (
                <p className="mt-2 text-sm text-charcoal-muted">{area.subtitulo}</p>
              )}

              <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {area.cards.map(({ titulo, frase, assunto, icone: Icone }) => (
                  <li key={titulo}>
                    {/* O card inteiro é o link: área de toque maior no celular. */}
                    <a
                      href={getWhatsAppUrl(mensagemSaibaMais(assunto))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-shell border border-rule bg-cream/80 p-6 shadow-xs transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:border-peach/60 hover:bg-white hover:shadow-lg hover:shadow-charcoal/5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-field border border-rule bg-cream text-terracotta transition-colors duration-200 group-hover:border-terracotta/40 group-hover:bg-peach/20">
                        <Icone size={18} aria-hidden="true" />
                      </span>

                      <h4 className="mt-4 font-serif text-lg font-semibold tracking-tight text-charcoal">
                        {titulo}
                      </h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-muted">
                        {frase}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal transition-colors duration-200 group-hover:text-terracotta">
                        Saiba mais
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-200 ease-out-quint group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

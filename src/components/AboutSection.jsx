import React from 'react';
import { MessageCircle, CreditCard, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';
import { MENSAGEM_CONTATO } from '../content';

const ficha = [
  { rotulo: 'Inscrição', valor: CONTACT_INFO.oab },
  { rotulo: 'Formação', valor: 'Pós-graduação em Direito Previdenciário' },
  { rotulo: 'Áreas', valor: 'Previdenciário e Consumidor' },
  { rotulo: 'Base', valor: 'Cuiabá — MT' },
  { rotulo: 'Atendimento', valor: 'Presencial e digital, em todo o Brasil' },
];

export default function AboutSection({ onOpenCardModal }) {
  return (
    <section id="sobre" className="bg-cream py-20" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">

          {/* Ficha profissional. Substitui a arte de post que ocupava este espaço:
              era um material de Instagram, com texto e selo de verificado
              chapados na imagem, exibido como se fosse fotografia. */}
          <div className="lg:col-span-5">
            <div className="on-dark rounded-shell bg-charcoal-dark p-8 text-white">
              <img
                src="./assets/monogram-cream-96.webp"
                alt=""
                width={96}
                height={78}
                loading="lazy"
                className="mb-6 h-12 w-auto opacity-90"
              />

              <p className="font-serif text-2xl font-semibold leading-tight text-white">
                Dra. Taís Freitas
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-peach">
                Advogada
              </p>

              <dl className="mt-7 space-y-0 border-t border-white/10">
                {ficha.map(({ rotulo, valor }) => (
                  <div
                    key={rotulo}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-white/10 py-3"
                  >
                    <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/40">
                      {rotulo}
                    </dt>
                    <dd className="text-right text-xs text-white/80">{valor}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppUrl(MENSAGEM_CONTATO)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-field bg-peach px-5 py-3 text-xs font-semibold text-charcoal-dark shadow-sm transition-all duration-200 ease-out-quint hover:scale-[1.03] hover:bg-peach-light hover:shadow-md active:scale-[0.98]"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>Conversar com a Dra. Taís</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenCardModal}
                  className="inline-flex items-center gap-2 rounded-field border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold text-white transition-all duration-200 ease-out-quint hover:scale-[1.03] hover:bg-white/20 active:scale-[0.98]"
                >
                  <CreditCard size={15} className="text-peach" aria-hidden="true" />
                  <span>Salvar contato</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
                03 — Sobre
              </span>
            </div>

            <h2 className="font-serif text-title font-semibold text-charcoal">
              Prazer, sou a Dra. Taís Freitas
            </h2>

            <p className="max-w-[62ch] text-lede text-charcoal-muted">
              Sou advogada inscrita na OAB/MT sob o nº 23.396, com pós-graduação em Direito
              Previdenciário. Atuo em Cuiabá e atendo clientes de todo o Brasil em causas do INSS e do
              consumidor. Olho cada caso com atenção e explico com clareza o que dá para fazer.
            </p>

            <a
              href={getWhatsAppUrl(MENSAGEM_CONTATO)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-field bg-charcoal px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-out-quint hover:scale-[1.03] hover:bg-charcoal-deep hover:shadow-md active:scale-[0.98]"
            >
              <MessageCircle size={16} className="text-peach" aria-hidden="true" />
              <span>Fale comigo</span>
              <ArrowRight
                size={15}
                className="text-white/60 transition-transform duration-200 ease-out-quint group-hover:translate-x-1 group-hover:text-white"
                aria-hidden="true"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

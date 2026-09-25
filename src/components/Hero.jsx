import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';
import { MENSAGEM_CONTATO } from '../content';

export default function Hero() {
  return (
    // -mt-20 anula a altura do cabeçalho sticky, para a imagem passar por trás dele
    <section className="on-dark relative isolate -mt-20 overflow-hidden bg-charcoal-dark">

      {/* Retrato. No celular ocupa uma faixa no topo; a partir de lg passa a
          ocupar a metade direita e o texto fica sobre a sobreposição. */}
      <div className="relative h-[28svh] min-h-[170px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[56%]">
        <img
          src="./assets/tais-portrait-1080.webp"
          srcSet="./assets/tais-portrait-420.webp 420w, ./assets/tais-portrait-840.webp 840w, ./assets/tais-portrait-1080.webp 1080w"
          sizes="(min-width: 1024px) 56vw, 100vw"
          width={1080}
          height={1080}
          alt="Dra. Taís Freitas, advogada inscrita na OAB/MT sob o nº 23.396"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[60%_18%]"
        />

        {/* No celular o degradê desce para o texto; no desktop vem da esquerda. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/20 via-transparent to-charcoal-dark lg:bg-gradient-to-r lg:from-charcoal-dark lg:via-charcoal-dark/70 lg:to-charcoal-dark/10"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="max-w-xl lg:max-w-[46%]">

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="h-px w-8 shrink-0 bg-peach" aria-hidden="true" />
            <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-peach">
              Advogada
            </span>
            <span className="h-3 w-px shrink-0 bg-white/25" aria-hidden="true" />
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
              {CONTACT_INFO.oab}
            </span>
            <span className="h-3 w-px shrink-0 bg-white/25" aria-hidden="true" />
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
              Cuiabá-MT
            </span>
          </div>

          <h1 className="mt-4 font-serif text-display font-semibold text-white sm:mt-5">
            Garanta seus <span className="text-peach">direitos</span> no INSS e contra abusos de
            empresas.
          </h1>

          <p className="mt-4 max-w-[56ch] text-lede text-white/70 sm:mt-5">
            Sou a <strong className="font-semibold text-white">Dra. Taís Freitas</strong>. Cuido de
            aposentadorias, BPC/LOAS, auxílios do INSS, problemas com voos, golpes bancários e nome
            negativado. Atendo em todo o Brasil.
          </p>

          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppUrl(MENSAGEM_CONTATO)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-field bg-peach px-6 py-4 text-sm font-semibold text-charcoal-dark shadow-md shadow-peach/10 transition-all duration-200 ease-out-quint hover:scale-[1.03] hover:bg-peach-light hover:shadow-lg hover:shadow-peach/20 active:scale-[0.98]"
            >
              <MessageCircle size={18} className="transition-transform duration-200 ease-out-quint group-hover:scale-110" aria-hidden="true" />
              <span>Fale comigo no WhatsApp</span>
              <ArrowRight
                size={16}
                className="text-charcoal-dark/60 transition-transform duration-200 ease-out-quint group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="#atuacao"
              className="group inline-flex items-center justify-center gap-2 rounded-field border border-white/20 bg-white/10 px-5 py-4 text-sm font-medium text-white backdrop-blur-xs transition-all duration-200 ease-out-quint hover:scale-[1.02] hover:border-white/35 hover:bg-white/15 active:scale-[0.98]"
            >
              <Sparkles size={16} className="text-peach transition-transform duration-200 ease-out-quint group-hover:rotate-12" aria-hidden="true" />
              <span>Ver áreas de atuação</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

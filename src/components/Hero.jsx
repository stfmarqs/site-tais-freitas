import React from 'react';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

export default function Hero({ onOpenCardModal }) {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

          {/* Coluna esquerda: proposta de valor */}
          <div className="space-y-6 text-left lg:col-span-7">

            {/* Rótulo editorial: filete + versalete, no lugar da pill com bolinha */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
                {CONTACT_INFO.oab}
              </span>
              <span className="h-3 w-px bg-rule-strong" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal-muted">
                Assessoria Jurídica Consultiva
              </span>
            </div>

            <h1 className="font-serif text-display font-semibold text-charcoal">
              Defesa sólida do seu{' '}
              <span className="relative inline-block font-bold text-charcoal-deep">
                benefício
                <span className="absolute bottom-1 left-0 -z-10 h-2.5 w-full rounded-sm bg-peach/35" />
              </span>{' '}
              e dos seus direitos contra abusos.
            </h1>

            <p className="max-w-[62ch] text-lede text-charcoal-muted">
              Atendimento técnico e humanizado com a{' '}
              <strong className="font-semibold text-charcoal">Dra. Taís Freitas</strong>.
              Atuação em concessão, revisão e planejamento de benefícios do INSS e em casos de
              cancelamento de voos, fraudes bancárias e relações de consumo.
            </p>

            {/* Pontos de confiança */}
            <ul className="grid grid-cols-1 gap-2.5 pt-2 sm:grid-cols-2">
              {[
                'Pós-graduação e foco contínuo em Previdenciário',
                'Atuação ágil digital em todo o Brasil e presencial',
                'Análise documental técnica e individualizada',
                'Conformidade ética estrita com o Provimento 205/2021',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-charcoal-muted">
                  <CheckCircle2 size={16} className="mt-px shrink-0 text-terracotta" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Ações */}
            <div className="flex flex-col items-stretch gap-3 pt-4 sm:flex-row sm:items-center">
              <a
                href={getWhatsAppUrl('Olá, Dra. Taís. Gostaria de entender o enquadramento do meu caso no WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-field bg-charcoal px-6 py-4 text-sm font-medium text-white transition-colors duration-200 ease-out-quint hover:bg-charcoal-deep active:scale-[0.99]"
              >
                <MessageCircle size={18} className="text-peach" aria-hidden="true" />
                <span>Analisar Meu Caso no WhatsApp</span>
                <ArrowRight
                  size={16}
                  className="text-white/50 transition-transform duration-200 ease-out-quint group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-2 rounded-field border border-rule bg-white px-5 py-4 text-sm font-medium text-charcoal transition-colors duration-200 ease-out-quint hover:border-rule-strong hover:bg-warm-gray"
              >
                <Sparkles size={16} className="text-terracotta" aria-hidden="true" />
                <span>Simulador &amp; Triagem Prévia</span>
              </a>

              <button
                type="button"
                onClick={onOpenCardModal}
                className="inline-flex items-center justify-center gap-2 rounded-field bg-warm-gray px-4 py-4 text-sm font-medium text-charcoal-muted transition-colors duration-200 ease-out-quint hover:bg-rule"
              >
                <CreditCard size={16} aria-hidden="true" />
                <span>Cartão Digital</span>
              </button>
            </div>

            <p className="pt-1 text-[11px] text-charcoal-muted/80">
              * A triagem é de caráter técnico-orientativo, sem promessa de resultado, respeitando as
              normas da OAB.
            </p>
          </div>

          {/* Coluna direita: retrato.
              O contêiner externo NÃO recorta — é ele que permite os selos escaparem da moldura. */}
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[420px]">

              <div className="relative aspect-[4/5] overflow-hidden rounded-shell border border-rule bg-charcoal">
                <img
                  src="/assets/tais-portrait-840.webp"
                  srcSet="/assets/tais-portrait-420.webp 420w, /assets/tais-portrait-840.webp 840w"
                  sizes="(min-width: 1024px) 420px, 92vw"
                  width={840}
                  height={840}
                  alt="Dra. Taís Freitas, advogada inscrita na OAB/MT sob o nº 23.396"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-deep/85 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-5 bottom-5 text-left text-white">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-peach">
                    Direito Previdenciário
                  </div>
                  <div className="font-serif text-xl font-bold tracking-tight">Dra. Taís Freitas</div>
                  <div className="mt-0.5 text-xs font-light text-white/75">
                    OAB/MT 23.396 • Pós-Graduada em Previdenciário
                  </div>
                </div>
              </div>

              {/* Selos: irmãos da moldura, não filhos — por isso não são mais cortados */}
              <div className="absolute -left-3 -top-3 hidden max-w-[210px] rounded-surface border border-rule bg-white p-3.5 text-left sm:-left-6 sm:block">
                <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-field border border-rule bg-cream text-terracotta">
                  <ShieldCheck size={16} aria-hidden="true" />
                </div>
                <div className="text-[11px] font-bold leading-tight text-charcoal">
                  Direito Previdenciário
                </div>
                <div className="mt-0.5 text-[10px] leading-snug text-charcoal-muted">
                  Planejamento, concessão e revisões de aposentadoria
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 hidden items-center gap-3 rounded-surface border border-rule bg-white p-3 text-left sm:-right-4 sm:flex">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-rule bg-cream text-terracotta">
                  <MessageCircle size={16} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[11px] font-bold leading-tight text-charcoal">Canal Direto</div>
                  <div className="text-[10px] text-charcoal-muted">Atendimento ágil no WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

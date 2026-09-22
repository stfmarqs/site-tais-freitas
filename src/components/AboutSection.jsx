import React from 'react';
import { ShieldCheck, GraduationCap, HeartHandshake, MapPin, MessageCircle, CreditCard } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

const pilares = [
  {
    icone: ShieldCheck,
    titulo: 'Segurança & Ética',
    texto: 'Respeito irrestrito ao Código de Ética da OAB',
  },
  {
    icone: HeartHandshake,
    titulo: 'Humanização',
    texto: 'Atendimento próximo e escuta atenta',
  },
  {
    icone: MapPin,
    titulo: 'Alcance Nacional',
    texto: 'Atendimento 100% digital e presencial',
  },
];

export default function AboutSection({ onOpenCardModal }) {
  return (
    <section id="sobre" className="bg-cream py-20" data-reveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[400px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-shell border border-rule bg-charcoal">
                <img
                  src="/assets/tais-previdenciario-800.webp"
                  srcSet="/assets/tais-previdenciario-400.webp 400w, /assets/tais-previdenciario-800.webp 800w"
                  sizes="(min-width: 1024px) 400px, 92vw"
                  width={800}
                  height={1000}
                  alt="Dra. Taís Freitas segurando um livro de Direito Previdenciário"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />

                <span className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-field border border-white/20 bg-charcoal/70 p-2 backdrop-blur-md">
                  <img
                    src="/assets/monogram-cream-96.webp"
                    alt=""
                    width={96}
                    height={78}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </span>

                <div className="absolute inset-x-4 bottom-4 rounded-surface border border-rule bg-white/95 p-4 backdrop-blur-md">
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-charcoal">
                    <GraduationCap size={16} className="text-terracotta" aria-hidden="true" />
                    Pós-Graduação Especializada
                  </p>
                  <p className="mt-1 text-xs text-charcoal-muted">
                    Dedicação contínua ao Direito Previdenciário e defesa do consumidor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
                04 — Conheça a Advogada
              </span>
            </div>

            <h2 className="font-serif text-title font-semibold text-charcoal">
              Rigor técnico aliado à empatia que a sua causa merece.
            </h2>

            <div className="max-w-[62ch] space-y-4 text-lede text-charcoal-muted">
              <p>
                A <strong className="font-semibold text-charcoal">Dra. Taís Freitas (OAB/MT 23.396)</strong>{' '}
                construiu sua trajetória jurídica guiada pelo compromisso inegociável de transformar a
                complexidade da legislação brasileira em soluções concretas para seus clientes.
              </p>
              <p>
                Com formação aprofundada e <strong className="font-medium text-charcoal">pós-graduação em
                Direito Previdenciário</strong>, atua de forma cirúrgica na análise de extratos
                previdenciários (CNIS), cálculo de aposentadorias pelas novas regras e reversão de
                indeferimentos arbitrários do INSS. Compreende que, por trás de cada benefício, existe o
                esforço de uma vida inteira de trabalho e o sustento de famílias.
              </p>
              <p>
                Na esfera do <strong className="font-medium text-charcoal">Direito do Consumidor</strong>,
                defende passageiros contra abusos recorrentes de companhias aéreas (cancelamentos, atrasos
                de voos e bagagens extraviadas) e protege o patrimônio de vítimas de fraudes digitais e
                bancárias, exigindo a devida reparação civil e moral.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-3">
              {pilares.map(({ icone: Icone, titulo, texto }) => (
                <li key={titulo} className="rounded-surface border border-rule bg-white p-4">
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-field border border-rule bg-cream text-terracotta">
                    <Icone size={16} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-bold text-charcoal">{titulo}</p>
                  <p className="mt-0.5 text-[11px] text-charcoal-muted">{texto}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={getWhatsAppUrl('Olá, Dra. Taís. Gostaria de agendar uma conversa sobre o meu caso.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-field bg-charcoal px-6 py-3.5 text-xs font-semibold text-white transition-colors duration-200 ease-out-quint hover:bg-charcoal-deep"
              >
                <MessageCircle size={16} className="text-peach" aria-hidden="true" />
                <span>Conversar com a Dra. Taís</span>
              </a>

              <button
                type="button"
                onClick={onOpenCardModal}
                className="inline-flex items-center gap-2 rounded-field border border-rule bg-white px-5 py-3.5 text-xs font-semibold text-charcoal transition-colors duration-200 ease-out-quint hover:border-rule-strong hover:bg-warm-gray"
              >
                <CreditCard size={15} className="text-terracotta" aria-hidden="true" />
                <span>Salvar Contato (Cartão Virtual)</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

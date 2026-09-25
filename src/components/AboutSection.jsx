import React from 'react';
import { ShieldCheck, GraduationCap, HeartHandshake, MapPin, MessageCircle, CreditCard } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

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
                  href={getWhatsAppUrl('Olá, Dra. Taís. Gostaria de agendar uma conversa sobre o meu caso.')}
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
                03 — Conheça a Advogada
              </span>
            </div>

            <h2 className="font-serif text-title font-semibold text-charcoal">
              Rigor técnico aliado à <span className="text-terracotta">empatia</span> que a sua causa
              merece.
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
                <li key={titulo} className="group rounded-surface border border-rule bg-white p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-md">
                  <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-field border border-rule bg-cream text-terracotta transition-colors group-hover:bg-peach/20 group-hover:border-terracotta/40">
                    <Icone size={16} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-bold text-charcoal">{titulo}</p>
                  <p className="mt-0.5 text-[11px] text-charcoal-muted">{texto}</p>
                </li>
              ))}
            </ul>

            <p className="flex items-start gap-2 pt-2 text-[11px] text-charcoal-muted/80">
              <GraduationCap size={14} className="mt-0.5 shrink-0 text-terracotta" aria-hidden="true" />
              <span>
                Dedicação contínua ao Direito Previdenciário e à defesa do consumidor.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

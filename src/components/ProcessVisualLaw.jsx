import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function ProcessVisualLaw() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico & Análise Documental",
      subtitle: "Avaliação inicial sem juridiquês",
      description: "Você nos envia a documentação pelo WhatsApp ou e-mail (extrato do CNIS, carteiras de trabalho, laudos médicos, bilhetes de voo ou comprovantes bancários). Realizamos uma auditoria minuciosa para verificar os requisitos legais.",
      deliverables: ["Conferência de vínculos e contribuições", "Identificação de pendências", "Avaliação da urgência do caso"]
    },
    {
      number: "02",
      title: "Estratégia & Enquadramento Claro",
      subtitle: "Transparência total antes de agir",
      description: "Apresentamos um parecer técnico objetivo explicando exatamente o seu direito, as regras aplicáveis e a via cabível (administrativa no INSS/órgão competente ou judicial).",
      deliverables: ["Simulação de prazos e cenários", "Explicação didática das regras aplicáveis ao caso"]
    },
    {
      number: "03",
      title: "Execução & Acompanhamento",
      subtitle: "Acompanhamento em todas as fases",
      description: "Executamos todos os protocolos, recursos e defesas com celeridade técnica. Você recebe informativos periódicos sobre o andamento do seu processo, sem ficar no escuro em nenhum momento.",
      deliverables: ["Protocolo administrativo ou judicial ágil", "Comunicação direta com a advogada", "Cobrança de cumprimento de decisões"]
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white border-b border-rule" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
              02 — Metodologia &amp; Atendimento
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-title font-semibold text-charcoal">
            Como funciona o atendimento, passo a passo.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted">
            Eliminamos a barreira do juridiquês arcaico. Uma jornada clara, previsível e sem atrito desde o primeiro contato.
          </p>
        </div>

        {/* 3 Step Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative flex flex-col justify-between p-8 rounded-shell bg-cream/70 border border-rule shadow-xs transition-all duration-300 ease-out-quint hover:-translate-y-2 hover:bg-white hover:border-peach/60 hover:shadow-xl hover:shadow-charcoal/5"
            >
              {/* Borda de brilho sutil no topo do card no hover */}
              <div
                className="pointer-events-none absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-transparent via-peach to-transparent opacity-0 transition-opacity duration-300 ease-out-quint group-hover:opacity-100"
                aria-hidden="true"
              />

              <div>
                {/* Step Pill & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-surface bg-charcoal text-white flex items-center justify-center font-serif text-xl font-bold shadow-xs transition-all duration-300 ease-out-quint group-hover:bg-charcoal-dark group-hover:scale-105 group-hover:shadow-md">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-terracotta">
                    Etapa {index + 1}
                  </span>
                </div>

                {/* Step Titles */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-1 transition-colors group-hover:text-charcoal-deep">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-terracotta mb-4">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-rule/80">
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-xs text-charcoal-muted">
                      <CheckCircle2 size={15} className="text-terracotta shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-rule/80">
                <a
                  href={getWhatsAppUrl(`Olá, Dra. Taís. Gostaria de iniciar a etapa ${step.number} (${step.title}) para analisar meu caso.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal transition-colors duration-200 group-hover:text-terracotta"
                >
                  <span>Iniciar esta etapa</span>
                  <ArrowRight size={14} className="transition-transform duration-200 ease-out-quint group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Como o atendimento funciona.
            Substitui o antigo quadro "Advocacia Tradicional ✕ vs Dra. Taís ✓":
            comparação que deprecia outros profissionais é vedada pelo Código de
            Ética da OAB. Os fatos sobre o atendimento seguem aqui, sem o contraste. */}
        <div className="mt-16 p-8 rounded-shell bg-cream border border-rule shadow-xs">
          <h4 className="font-serif text-xl font-semibold text-charcoal text-center mb-2">
            Como o atendimento funciona na prática
          </h4>
          <p className="mx-auto mb-8 max-w-[56ch] text-center text-xs text-charcoal-muted">
            Três características do trabalho, para você saber o que esperar antes do primeiro contato.
          </p>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                titulo: 'Linguagem sem juridiquês',
                texto: 'Cada etapa é explicada em português comum, incluindo o que ainda não se sabe sobre o caso.',
              },
              {
                titulo: 'Contato direto pelo WhatsApp',
                texto: 'As atualizações de andamento chegam pelo mesmo canal em que você fala com a advogada.',
              },
              {
                titulo: 'Documentos pelo celular',
                texto: 'Procuração e contrato por assinatura eletrônica com validade jurídica (ICP-Brasil/Gov.br).',
              },
            ].map((item) => (
              <li key={item.titulo} className="group p-6 rounded-surface bg-white border border-rule text-left shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-rule-strong hover:shadow-sm">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-field border border-rule bg-cream text-terracotta transition-colors group-hover:border-terracotta/40 group-hover:bg-peach/20">
                  <CheckCircle2 size={16} aria-hidden="true" />
                </span>
                <p className="text-xs font-bold text-charcoal">{item.titulo}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-charcoal-muted">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

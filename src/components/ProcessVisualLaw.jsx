import React from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function ProcessVisualLaw() {
  const steps = [
    {
      number: "01",
      title: "Triagem & Análise Documental",
      subtitle: "Diagnóstico inicial sem juridiquês",
      description: "Você nos envia a documentação pelo WhatsApp ou e-mail (extrato do CNIS, carteiras de trabalho, laudos médicos, bilhetes de voo ou comprovantes bancários). Realizamos uma auditoria minuciosa para verificar os requisitos legais.",
      deliverables: ["Conferência de vínculos e contribuições", "Identificação imediata de pendências", "Avaliação da urgência do caso"]
    },
    {
      number: "02",
      title: "Estratégia & Enquadramento Claro",
      subtitle: "Transparência total antes de agir",
      description: "Apresentamos um parecer técnico objetivo explicando exatamente o seu direito, as regras aplicáveis e a rota mais eficiente (via administrativa no INSS/órgão competente ou ação judicial especializada).",
      deliverables: ["Simulação de prazos e cenários", "Explicação didática dos direitos garantidos", "Contrato de honorários ético e transparente"]
    },
    {
      number: "03",
      title: "Atuação Eficaz & Acompanhamento",
      subtitle: "Compromisso até a resolução",
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
              03 — Metodologia Visual Law
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
              className="relative flex flex-col justify-between p-8 rounded-shell bg-cream border border-rule hover:border-rule-strong transition-colors group"
            >
              <div>
                {/* Step Pill & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-surface bg-charcoal text-white flex items-center justify-center font-serif text-xl font-bold group-hover:bg-charcoal-deep transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-terracotta">
                    Etapa {index + 1}
                  </span>
                </div>

                {/* Step Titles */}
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-1">
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
                <div className="space-y-2 pt-4 border-t border-rule">
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-charcoal-muted">
                      <CheckCircle2 size={15} className="text-terracotta shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-rule">
                <a
                  href={getWhatsAppUrl(`Olá, Dra. Taís. Gostaria de iniciar a etapa ${step.number} (${step.title}) para analisar meu caso.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-terracotta transition-colors"
                >
                  <span>Iniciar esta etapa</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Visual Law Contrast Card: Tradicional vs. Moderno */}
        <div className="mt-16 p-8 rounded-shell bg-cream border border-rule">
          <h4 className="font-serif text-xl font-semibold text-charcoal text-center mb-6">
            A diferença de uma advocacia centrada no constituinte
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* O modelo antigo */}
            <div className="p-6 rounded-surface bg-white border border-rule text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                <ShieldAlert size={16} />
                Advocacia Tradicional Burocrática
              </div>
              <ul className="space-y-2 text-xs text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <span className="text-charcoal-muted/70 font-bold">✕</span>
                  Termos e jargões jurídicos incompreensíveis que causam angústia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-charcoal-muted/70 font-bold">✕</span>
                  Dificuldade de contato e semanas sem retorno sobre o processo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-charcoal-muted/70 font-bold">✕</span>
                  Exigência de deslocamentos físicos desnecessários para assinar papéis
                </li>
              </ul>
            </div>

            {/* O modelo Dra. Taís Freitas */}
            <div className="p-6 rounded-surface bg-white border border-charcoal text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                <CheckCircle2 size={16} />
                Com a Dra. Taís Freitas
              </div>
              <ul className="space-y-2 text-xs text-charcoal-muted font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Linguagem direta, transparente e orientada à solução do seu problema
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Comunicação ágil pelo WhatsApp e atualizações didáticas de cada fase
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">✓</span>
                  Assinatura digital segura e envio de documentos pelo celular sem sair de casa
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

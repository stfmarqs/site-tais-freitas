import React from 'react';
import { 
  FileText, 
  Compass, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';
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
    <section id="como-funciona" className="py-20 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#FAF8F5] text-stone-700 border border-stone-200">
            <Sparkles size={13} className="text-[#D97736]" />
            Metodologia Visual Law
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3B3732] tracking-tight">
            Como funciona o atendimento, passo a passo.
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Eliminamos a barreira do juridiquês arcaico. Uma jornada clara, previsível e sem atrito desde o primeiro contato.
          </p>
        </div>

        {/* 3 Step Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative flex flex-col justify-between p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200/80 shadow-xs hover:border-stone-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Step Pill & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-[#3B3732] text-white flex items-center justify-center font-serif text-xl font-bold group-hover:bg-[#25221F] transition-colors shadow-2xs">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D97736]">
                    Etapa {index + 1}
                  </span>
                </div>

                {/* Step Titles */}
                <h3 className="font-serif text-xl font-semibold text-[#3B3732] mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-[#D97736] mb-4">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 pt-4 border-t border-stone-200/60">
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-stone-700">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200/60">
                <a
                  href={getWhatsAppUrl(`Olá, Dra. Taís. Gostaria de iniciar a etapa ${step.number} (${step.title}) para analisar meu caso.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3B3732] hover:text-[#D97736] transition-colors"
                >
                  <span>Iniciar esta etapa</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Visual Law Contrast Card: Tradicional vs. Moderno */}
        <div className="mt-16 p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200/90 shadow-xs">
          <h4 className="font-serif text-xl font-semibold text-[#3B3732] text-center mb-6">
            A diferença de uma advocacia centrada no constituinte
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* O modelo antigo */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/70 text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                <ShieldAlert size={16} />
                Advocacia Tradicional Burocrática
              </div>
              <ul className="space-y-2 text-xs text-stone-500">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  Termos e jargões jurídicos incompreensíveis que causam angústia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  Dificuldade de contato e semanas sem retorno sobre o processo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  Exigência de deslocamentos físicos desnecessários para assinar papéis
                </li>
              </ul>
            </div>

            {/* O modelo Dra. Taís Freitas */}
            <div className="p-6 rounded-2xl bg-white border border-emerald-200 text-left space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <CheckCircle2 size={16} />
                Com a Dra. Taís Freitas
              </div>
              <ul className="space-y-2 text-xs text-stone-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Linguagem direta, transparente e orientada à solução do seu problema
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  Comunicação ágil pelo WhatsApp e atualizações didáticas de cada fase
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
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

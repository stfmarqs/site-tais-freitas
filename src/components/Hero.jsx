import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  ChevronDown,
  CreditCard
} from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

export default function Hero({ onOpenCardModal }) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle organic background mesh gradient */}
      <div className="absolute top-0 right-0 -z-10 w-[550px] h-[550px] bg-gradient-to-bl from-[#FDBA74]/15 via-[#FDBA74]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* OriginKit/Cult UI Style Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/80 shadow-xs backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-stone-700">
                {CONTACT_INFO.oab}
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-[11px] font-medium text-stone-600">
                Assessoria Jurídica Consultiva
              </span>
            </div>

            {/* Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold text-[#3B3732] tracking-tight leading-[1.12]">
              Defesa sólida do seu{' '}
              <span className="relative inline-block text-[#25221F] font-bold">
                benefício
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#FDBA74]/35 -z-10 rounded-sm"></span>
              </span>{' '}
              e dos seus direitos contra abusos.
            </h1>

            {/* Subtitle / Narrative */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Atendimento especializado e humanizado com a <strong className="text-stone-900 font-semibold">Dra. Taís Freitas</strong>. 
              Garantimos a proteção da sua aposentadoria no INSS e a justa reparação perante cancelamentos de voos, fraudes bancárias e relações de consumo.
            </p>

            {/* Trust Points / Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 size={16} className="text-[#D97736] shrink-0" />
                <span>Pós-graduação e foco contínuo em Previdenciário</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 size={16} className="text-[#D97736] shrink-0" />
                <span>Atuação ágil digital em todo o Brasil e presencial</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 size={16} className="text-[#D97736] shrink-0" />
                <span>Análise documental técnica e individualizada</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 size={16} className="text-[#D97736] shrink-0" />
                <span>Conformidade ética estrita com o Provimento 205/2021</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá, Dra. Taís. Gostaria de entender o enquadramento do meu caso no WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#3B3732] text-white font-medium text-sm shadow-md hover:bg-[#25221F] hover:shadow-lg transition-all group cursor-pointer"
              >
                <MessageCircle size={18} className="text-[#FDBA74] group-hover:scale-110 transition-transform" />
                <span>Analisar Meu Caso no WhatsApp</span>
                <ArrowRight size={16} className="text-stone-300 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white text-stone-800 font-medium text-sm border border-stone-200/90 shadow-xs hover:bg-stone-50 hover:border-stone-300 transition-all cursor-pointer"
              >
                <Sparkles size={16} className="text-[#D97736]" />
                <span>Simulador & Triagem Prévia</span>
              </a>

              <button
                onClick={onOpenCardModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-stone-100 text-stone-700 font-medium text-sm hover:bg-stone-200 transition-all cursor-pointer"
                title="Salvar dados na agenda"
              >
                <CreditCard size={16} className="text-stone-600" />
                <span className="sm:inline">Cartão Digital</span>
              </button>
            </div>

            {/* Ethical Disclaimer under CTA */}
            <div className="pt-1 text-[11px] text-stone-500">
              * A triagem é de caráter técnico-orientativo, sem promessa de resultado, respeitando as normas da OAB.
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Floating Badges (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Geometric Backdrop Frames */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden p-2 bg-gradient-to-b from-stone-200/60 to-stone-100/30 ring-1 ring-black/5 shadow-2xl">
              
              <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-[#3B3732]">
                <img
                  src="/assets/tais-portrait.png"
                  alt="Dra. Taís Freitas - Advogada OAB MT 23.396"
                  className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay at bottom for badge readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#25221F]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-left text-white pointer-events-auto">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#FDBA74] mb-0.5">
                    Advocacia Especializada
                  </div>
                  <div className="font-serif text-xl font-bold tracking-tight">
                    Dra. Taís Freitas
                  </div>
                  <div className="text-xs text-stone-300 font-light mt-0.5">
                    OAB/MT 23.396 • Pós-Graduada em Previdenciário
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: OriginKit Style Floating Pill (Top Left) */}
              <div className="absolute -top-3 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-stone-200/80 max-w-[200px] text-left animate-subtle-float">
                <div className="w-7 h-7 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#D97736] mb-1.5">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-[11px] font-bold text-stone-900 leading-tight">
                  Especialista em INSS
                </div>
                <div className="text-[10px] text-stone-500 mt-0.5 leading-snug">
                  Planejamento, concessão e revisões de aposentadoria
                </div>
              </div>

              {/* Floating Badge 2: OriginKit Style Floating Pill (Bottom Right) */}
              <div className="absolute -bottom-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 text-left flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-stone-900 leading-tight">
                    Canal Direto
                  </div>
                  <div className="text-[10px] text-stone-500">
                    Atendimento ágil no WhatsApp
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

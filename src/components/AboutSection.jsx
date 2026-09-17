import React from 'react';
import { 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  BookOpen, 
  MapPin, 
  ArrowRight,
  MessageCircle,
  CreditCard
} from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

export default function AboutSection({ onOpenCardModal }) {
  return (
    <section id="sobre" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Book (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden p-2 bg-gradient-to-b from-stone-200 to-stone-100 ring-1 ring-black/5 shadow-2xl">
              <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-[#3B3732]">
                <img 
                  src="/assets/tais-previdenciario.png" 
                  alt="Dra. Taís Freitas com Livro de Direito Previdenciário" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Brand Monogram overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-[#3B3732]/70 backdrop-blur-md p-2 border border-white/20">
                  <img src="/assets/monogram-white-transparent.png" alt="TF Monograma" className="w-full h-full object-contain" />
                </div>

                {/* Floating caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200/90 shadow-md">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-stone-900 uppercase tracking-wider">
                    <GraduationCap size={16} className="text-[#D97736]" />
                    Pós-Graduação Especializada
                  </div>
                  <div className="text-xs text-stone-600 mt-1">
                    Dedicação contínua ao Direito Previdenciário e defesa do consumidor.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white text-stone-700 border border-stone-200">
              <ShieldCheck size={13} className="text-[#D97736]" />
              Conheça a Advogada
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#3B3732] tracking-tight leading-tight">
              Rigor técnico aliado à empatia que a sua causa merece.
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-stone-900 font-semibold">Dra. Taís Freitas (OAB/MT 23.396)</strong> construiu 
                sua trajetória jurídica guiada pelo compromisso inegociável de transformar a complexidade da legislação 
                brasileira em soluções concretas para seus clientes.
              </p>

              <p>
                Com formação aprofundada e <strong>pós-graduação em Direito Previdenciário</strong>, atua de forma cirúrgica na 
                análise de extratos previdenciários (CNIS), cálculo de aposentadorias pelas novas regras e reversão de 
                indeferimentos arbitrários do INSS. Compreende que, por trás de cada benefício, existe o esforço de uma vida 
                inteira de trabalho e o sustento de famílias.
              </p>

              <p>
                Na esfera do <strong>Direito do Consumidor</strong>, defende passageiros contra abusos recorrentes de 
                companhias aéreas (cancelamentos, atrasos de voos e bagagens extraviadas) e protege o patrimônio de vítimas 
                de fraudes digitais e bancárias, exigindo a devida reparação civil e moral.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#D97736] mb-2">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-xs font-bold text-stone-900">Segurança & Ética</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Respeito irrestrito ao Código de Ética da OAB</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#D97736] mb-2">
                  <HeartHandshake size={16} />
                </div>
                <div className="text-xs font-bold text-stone-900">Humanização</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Atendimento próximo e escuta atenta</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="w-8 h-8 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#D97736] mb-2">
                  <MapPin size={16} />
                </div>
                <div className="text-xs font-bold text-stone-900">Alcance Nacional</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Atendimento 100% digital e presencial</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá, Dra. Taís. Gostaria de agendar uma conversa sobre o meu caso.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#3B3732] text-white text-xs font-semibold hover:bg-[#25221F] shadow-sm transition-all"
              >
                <MessageCircle size={16} className="text-[#FDBA74]" />
                <span>Conversar com a Dra. Taís</span>
              </a>

              <button
                onClick={onOpenCardModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-stone-800 text-xs font-semibold border border-stone-200/90 shadow-2xs hover:bg-stone-50 transition-all cursor-pointer"
              >
                <CreditCard size={15} className="text-[#D97736]" />
                <span>Salvar Contato (Cartão Virtual)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

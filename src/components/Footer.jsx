import React from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

export default function Footer({ onOpenCardModal }) {
  return (
    <footer className="bg-[#23201D] text-stone-300 relative overflow-hidden">
      
      {/* PRE-FOOTER CTA BANNER */}
      <div className="relative border-b border-white/10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Monogram watermark background */}
        <img 
          src="/assets/monogram-white-transparent.png" 
          alt="TF Watermark" 
          className="absolute -bottom-16 -right-16 w-80 h-80 opacity-5 pointer-events-none"
        />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/10 text-[#FDBA74] border border-white/15">
            <ShieldCheck size={13} />
            Defesa Técnica & Confiável
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Não deixe que o seu direito seja adiado ou ignorado.
          </h2>

          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
            Prazos no INSS e no Código de Defesa do Consumidor são curtos e decisivos. 
            Uma análise preventiva resguarda o seu patrimônio e a sua dignidade.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppUrl("Olá, Dra. Taís Freitas. Gostaria de agendar uma consulta preliminar sobre o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#FDBA74] text-[#23201D] font-bold text-xs uppercase tracking-wider hover:bg-[#fed7aa] shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp Agora</span>
            </a>

            <button
              onClick={onOpenCardModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 text-white font-medium text-xs border border-white/15 hover:bg-white/15 transition-all cursor-pointer"
            >
              <CreditCard size={16} className="text-[#FDBA74]" />
              <span>Abrir Cartão Digital</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5 border border-white/10">
                <img 
                  src="/assets/monogram-white-transparent.png" 
                  alt="TF Monograma" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-white tracking-tight leading-none">
                  Taís Freitas
                </div>
                <div className="text-[10px] uppercase font-semibold text-[#FDBA74] tracking-widest mt-1">
                  Advocacia Especializada • {CONTACT_INFO.oab}
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Escritório dedicado ao Direito Previdenciário (INSS) e Direito do Consumidor. 
              Atendimento técnico, humanizado e com respaldo do Código de Ética da OAB.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenCardModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <CreditCard size={13} className="text-[#FDBA74]" />
                <span>Salvar Contato na Agenda</span>
              </button>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona o Atendimento
                </a>
              </li>
              <li>
                <a href="#triagem" className="hover:text-white transition-colors">
                  Simulador de Enquadramento
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Dra. Taís Freitas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Canais Oficiais
            </div>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a
                  href={getWhatsAppUrl("Olá, Dra. Taís. Gostaria de uma informação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle size={15} className="text-emerald-500 shrink-0" />
                  <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-[#FDBA74] shrink-0" />
                  <span>Telefone: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <InstagramIcon size={15} className="text-pink-400 shrink-0" />
                  <span>Instagram: {CONTACT_INFO.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-[#FDBA74] shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-stone-400">
                <MapPin size={15} className="text-stone-500 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COMPLIANCE OAB NOTICE */}
        <div className="mt-12 pt-8 border-t border-white/10 text-left space-y-3">
          <p className="text-[11px] text-stone-500 leading-relaxed">
            <strong>Aviso de Conformidade Deontológica (Provimento CFOAB nº 205/2021):</strong> Este site possui caráter meramente 
            informativo e ilustrativo, destinado a prestar esclarecimentos técnicos à sociedade e aos jurisdicionados. Não configura 
            e não deve ser interpretado como publicidade de captação ilícita, mercantilização de serviços ou promessa infundada de ganho de causa. 
            Todas as análises de casos e contratações dependem de avaliação concreta de fatos e documentos por profissional habilitada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 pt-2">
            <div>
              © {new Date().getFullYear()} Dra. Taís Freitas Advocacia • OAB/MT 23.396. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-3">
              <span>Termos de Uso</span>
              <span>•</span>
              <span>Privacidade & LGPD</span>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}

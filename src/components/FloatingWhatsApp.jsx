import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      
      {/* Consultative Micro-Pill Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 text-stone-800 text-xs shadow-lg border border-stone-200/90 backdrop-blur-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">Dúvidas sobre seu direito?</span>
          <a
            href={getWhatsAppUrl("Olá, Dra. Taís. Gostaria de tirar uma dúvida pelo WhatsApp.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Fale conosco
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 ml-1"
            aria-label="Fechar aviso"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={getWhatsAppUrl("Olá, Dra. Taís Freitas. Acessei seu site e gostaria de uma orientação jurídica preliminar.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#3B3732] text-white shadow-xl hover:bg-[#25221F] hover:shadow-2xl active:scale-95 transition-all cursor-pointer border border-white/10"
        aria-label="Iniciar atendimento no WhatsApp"
      >
        <div className="relative">
          <MessageCircle size={22} className="text-[#FDBA74] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
          Atendimento WhatsApp
        </span>
      </a>

    </div>
  );
}

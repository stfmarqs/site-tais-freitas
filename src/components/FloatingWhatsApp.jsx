import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function FloatingWhatsApp() {
  // Só aparece depois que o hero sai de cena. Antes disso o botão ficava
  // por cima do CTA principal no celular.
  const [visivel, setVisivel] = useState(false);
  const [avisoAberto, setAvisoAberto] = useState(true);

  useEffect(() => {
    let agendado = false;
    const avaliar = () => {
      agendado = false;
      setVisivel(window.scrollY > window.innerHeight * 0.6);
    };
    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      window.requestAnimationFrame(avaliar);
    };
    window.addEventListener('scroll', aoRolar, { passive: true });
    avaliar();
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <div
      inert={!visivel}
      className={`fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 transition-[opacity,translate] duration-300 ease-out-quint sm:bottom-6 sm:right-6 ${
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      {avisoAberto && (
        <div className="hidden items-center gap-2 rounded-surface border border-rule bg-white px-3.5 py-2 text-xs text-charcoal shadow-sm sm:flex">
          <span className="font-medium">Dúvidas sobre seu direito?</span>
          <a
            href={getWhatsAppUrl('Olá, Dra. Taís. Gostaria de tirar uma dúvida pelo WhatsApp.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-terracotta underline-offset-2 hover:underline"
          >
            Fale conosco
          </a>
          <button
            type="button"
            onClick={() => setAvisoAberto(false)}
            className="ml-1 rounded-full p-1 text-charcoal-muted transition-colors duration-200 hover:bg-warm-gray hover:text-charcoal"
            aria-label="Fechar aviso"
          >
            <X size={13} aria-hidden="true" />
          </button>
        </div>
      )}

      <a
        href={getWhatsAppUrl('Olá, Dra. Taís Freitas. Acessei seu site e gostaria de uma orientação jurídica preliminar.')}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 rounded-full bg-charcoal px-4 py-3.5 text-white shadow-xl transition-all duration-200 ease-out-quint hover:scale-105 hover:bg-charcoal-deep active:scale-95 hover:shadow-2xl hover:shadow-charcoal/25"
        aria-label="Iniciar atendimento no WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>

        <MessageCircle
          size={22}
          className="text-peach transition-transform duration-200 ease-out-quint group-hover:scale-110"
          aria-hidden="true"
        />
        <span className="hidden pr-1 text-xs font-semibold tracking-wide sm:inline">
          Atendimento WhatsApp
        </span>
      </a>
    </div>
  );
}

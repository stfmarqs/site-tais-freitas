import React, { useState } from 'react';
import { MessageCircle, Menu, X, CreditCard, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

export default function Header({ onOpenCardModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Simulação de Caso', href: '#triagem' },
    { label: 'Sobre a Advogada', href: '#sobre' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & OAB */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#3B3732] flex items-center justify-center p-1.5 shadow-xs transition-transform group-hover:scale-105">
              <img 
                src="/assets/monogram-white-transparent.png" 
                alt="TF Monograma" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-serif text-lg font-bold tracking-tight text-[#3B3732] leading-none">
                Taís Freitas
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D97736]">
                  Advocacia
                </span>
                <span className="text-[10px] text-stone-400">•</span>
                <span className="text-[10px] text-stone-500 font-medium">
                  {CONTACT_INFO.oab}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-stone-600 hover:text-[#3B3732] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97736] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Digital Card Trigger */}
            <button
              onClick={onOpenCardModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-stone-700 bg-white border border-stone-200/80 hover:bg-stone-50 hover:border-stone-300 shadow-xs transition-all cursor-pointer"
            >
              <CreditCard size={14} className="text-[#D97736]" />
              <span>Cartão Digital</span>
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href={getWhatsAppUrl("Olá, Dra. Taís Freitas. Acessei seu site e gostaria de orientação jurídica sobre o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#3B3732] hover:bg-[#25221F] shadow-xs hover:shadow-md transition-all group cursor-pointer"
            >
              <MessageCircle size={14} className="text-[#FDBA74] group-hover:scale-110 transition-transform" />
              <span>Consultar no WhatsApp</span>
              <ArrowUpRight size={13} className="text-stone-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCardModal}
              className="p-2 rounded-lg text-stone-600 hover:bg-stone-100"
              aria-label="Cartão Digital"
            >
              <CreditCard size={20} className="text-[#D97736]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCardModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100"
            >
              <CreditCard size={16} className="text-[#D97736]" />
              <span>Abrir Cartão de Visita Digital</span>
            </button>

            <a
              href={getWhatsAppUrl("Olá, Dra. Taís. Gostaria de uma análise prévia do meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-[#3B3732]"
            >
              <MessageCircle size={16} className="text-[#FDBA74]" />
              <span>Conversar com a Especialista</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

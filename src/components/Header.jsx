import React, { useEffect, useId, useState } from 'react';
import { MessageCircle, Menu, X, CreditCard, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

const navLinks = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Simulação de Caso', href: '#triagem' },
  { label: 'Sobre a Advogada', href: '#sobre' },
  { label: 'Dúvidas Frequentes', href: '#faq' },
];

export default function Header({ onOpenCardModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // O hero é escuro e de tela cheia. O cabeçalho flutua transparente sobre ele
  // e só ganha fundo depois que a pessoa rola, para não cortar a imagem com
  // uma faixa clara logo no topo.
  const [rolou, setRolou] = useState(false);
  const menuId = useId();

  useEffect(() => {
    let agendado = false;
    const avaliar = () => {
      agendado = false;
      setRolou(window.scrollY > 24);
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

  // Esc fecha o menu — antes só dava para fechar clicando no X
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const aoTeclar = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [mobileMenuOpen]);

  const solido = rolou || mobileMenuOpen;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-[background-color,border-color] duration-300 ease-out-quint ${
        solido
          ? 'border-b border-rule bg-cream/90 backdrop-blur-md'
          : 'on-dark border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">

          <a href="#" className="group flex shrink-0 items-center gap-3">
            <span className={`flex h-10 w-10 items-center justify-center rounded-field p-1.5 transition-colors duration-300 ${solido ? 'bg-charcoal' : 'bg-white/10 ring-1 ring-white/15'}`}>
              <img
                src="/assets/monogram-cream-96.webp"
                alt=""
                width={96}
                height={78}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="block">
              <span className={`block font-serif text-lg font-bold leading-none tracking-tight transition-colors duration-300 ${solido ? 'text-charcoal' : 'text-white'}`}>
                Taís Freitas
              </span>
              <span className="mt-1 flex items-center gap-1.5">
                <span className={`text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${solido ? 'text-terracotta' : 'text-peach'}`}>
                  Advocacia
                </span>
                <span className={`text-[10px] transition-colors duration-300 ${solido ? 'text-rule-strong' : 'text-white/30'}`} aria-hidden="true">•</span>
                <span className={`text-[10px] font-medium transition-colors duration-300 ${solido ? 'text-charcoal-muted' : 'text-white/55'}`}>{CONTACT_INFO.oab}</span>
              </span>
            </span>
          </a>

          {/* Navegação desktop — só a partir de lg, onde os 5 itens cabem em uma linha */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap py-1 text-xs font-medium uppercase tracking-[0.04em] transition-colors duration-300 ease-out-quint after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out-quint hover:after:scale-x-100 ${solido ? 'text-charcoal-muted after:bg-terracotta hover:text-charcoal' : 'text-white/70 after:bg-peach hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex shrink-0 items-center gap-3">
            {/* O cartão digital também está no Hero, Sobre e Rodapé — no header
                ele só entra quando há folga de verdade, para a barra não estourar. */}
            <button
              type="button"
              onClick={onOpenCardModal}
              className={`hidden items-center gap-1.5 rounded-field border px-3.5 py-2 text-xs font-medium transition-colors duration-300 ease-out-quint 2xl:inline-flex ${solido ? 'border-rule bg-white text-charcoal-muted hover:border-rule-strong hover:bg-warm-gray' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'}`}
            >
              <CreditCard size={14} className={solido ? 'text-terracotta' : 'text-peach'} aria-hidden="true" />
              <span>Cartão Digital</span>
            </button>

            <a
              href={getWhatsAppUrl('Olá, Dra. Taís Freitas. Acessei seu site e gostaria de orientação jurídica sobre o meu caso.')}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center gap-2 rounded-field px-4 py-2 text-xs font-semibold transition-colors duration-300 ease-out-quint ${solido ? 'bg-charcoal text-white hover:bg-charcoal-deep' : 'bg-peach text-charcoal-dark hover:bg-peach-light'}`}
            >
              <MessageCircle size={14} className={solido ? 'text-peach' : 'text-charcoal-dark/60'} aria-hidden="true" />
              <span>Consultar no WhatsApp</span>
              <ArrowUpRight size={13} className={`transition-colors duration-200 ${solido ? 'text-white/50 group-hover:text-white' : 'text-charcoal-dark/40'}`} aria-hidden="true" />
            </a>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={onOpenCardModal}
              className={`rounded-field p-2.5 transition-colors duration-300 ${solido ? 'text-charcoal-muted hover:bg-warm-gray' : 'text-white hover:bg-white/10'}`}
              aria-label="Abrir cartão de visita digital"
            >
              <CreditCard size={20} className={solido ? 'text-terracotta' : 'text-peach'} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`rounded-field p-2.5 transition-colors duration-300 ${solido ? 'text-charcoal hover:bg-warm-gray' : 'text-white hover:bg-white/10'}`}
              aria-expanded={mobileMenuOpen}
              aria-controls={menuId}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu mobile: sempre no DOM e animado por grid-template-rows,
          o que dá animação de ENTRADA e de SAÍDA. `inert` tira do tab quando fechado. */}
      <div
        id={menuId}
        inert={!mobileMenuOpen}
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-200 ease-drawer lg:hidden ${
          mobileMenuOpen ? 'grid-rows-[1fr] border-b border-rule' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-3 px-4 pb-6 pt-3">
            <nav aria-label="Navegação" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-field px-3 py-3 text-sm font-medium text-charcoal-muted transition-colors duration-200 hover:bg-cream hover:text-charcoal"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2 border-t border-rule pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCardModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-field bg-warm-gray px-4 py-3 text-xs font-semibold text-charcoal transition-colors duration-200 hover:bg-rule"
              >
                <CreditCard size={16} className="text-terracotta" aria-hidden="true" />
                <span>Abrir Cartão de Visita Digital</span>
              </button>

              <a
                href={getWhatsAppUrl('Olá, Dra. Taís. Gostaria de uma análise prévia do meu caso.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-field bg-charcoal px-4 py-3 text-xs font-semibold text-white transition-colors duration-200 hover:bg-charcoal-deep"
              >
                <MessageCircle size={16} className="text-peach" aria-hidden="true" />
                <span>Falar com a advogada</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

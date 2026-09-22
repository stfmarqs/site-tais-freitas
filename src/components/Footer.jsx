import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, CreditCard, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/vcard';

const navegacao = [
  { label: 'Áreas de Atuação', href: '#especialidades' },
  { label: 'Como Funciona o Atendimento', href: '#como-funciona' },
  { label: 'Simulador de Enquadramento', href: '#triagem' },
  { label: 'Sobre a Dra. Taís Freitas', href: '#sobre' },
  { label: 'Perguntas Frequentes', href: '#faq' },
];

export default function Footer({ onOpenCardModal }) {
  return (
    <footer className="relative overflow-hidden bg-charcoal-dark text-white/70">

      {/* Faixa de chamada */}
      <div className="relative border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <img
          src="/assets/monogram-cream-320.webp"
          alt=""
          width={320}
          height={260}
          loading="lazy"
          className="pointer-events-none absolute -bottom-12 -right-12 w-72 opacity-[0.06]"
        />

        <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-peach/60" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-peach">
              Defesa Técnica &amp; Confiável
            </span>
            <span className="h-px w-8 bg-peach/60" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-title font-semibold text-white">
            Não deixe que o seu direito seja adiado ou ignorado.
          </h2>

          <p className="mx-auto max-w-2xl text-lede font-light text-white/70">
            Prazos no INSS e no Código de Defesa do Consumidor são curtos e decisivos. Uma análise
            preventiva resguarda o seu patrimônio e a sua dignidade.
          </p>

          <div className="flex flex-col items-center justify-center gap-3.5 pt-4 sm:flex-row">
            <a
              href={getWhatsAppUrl('Olá, Dra. Taís Freitas. Gostaria de agendar uma consulta preliminar sobre o meu caso.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-field bg-peach px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-charcoal-dark transition-colors duration-200 ease-out-quint hover:bg-peach-light sm:w-auto"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Falar no WhatsApp Agora</span>
            </a>

            <button
              type="button"
              onClick={onOpenCardModal}
              className="inline-flex w-full items-center justify-center gap-2 rounded-field border border-white/15 bg-white/10 px-6 py-4 text-xs font-medium text-white transition-colors duration-200 ease-out-quint hover:bg-white/15 sm:w-auto"
            >
              <CreditCard size={16} className="text-peach" aria-hidden="true" />
              <span>Abrir Cartão Digital</span>
            </button>
          </div>
        </div>
      </div>

      {/* Rodapé principal */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">

          <div className="space-y-4 text-left lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-field border border-white/10 bg-white/10 p-1.5">
                <img
                  src="/assets/monogram-cream-96.webp"
                  alt=""
                  width={96}
                  height={78}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>
              <span>
                <span className="block font-serif text-lg font-bold leading-none tracking-tight text-white">
                  Taís Freitas
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-peach">
                  Advocacia Especializada • {CONTACT_INFO.oab}
                </span>
              </span>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-white/55">
              Escritório dedicado ao Direito Previdenciário (INSS) e Direito do Consumidor. Atendimento
              técnico, humanizado e com respaldo do Código de Ética da OAB.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCardModal}
                className="inline-flex items-center gap-1.5 rounded-field border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                <CreditCard size={13} className="text-peach" aria-hidden="true" />
                <span>Salvar Contato na Agenda</span>
              </button>
            </div>
          </div>

          <nav aria-label="Rodapé" className="space-y-3 text-left lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white">Navegação</h3>
            <ul className="space-y-2 text-xs">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 text-left lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white">Canais Oficiais</h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={getWhatsAppUrl('Olá, Dra. Taís. Gostaria de uma informação.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <MessageCircle size={15} className="shrink-0 text-peach" aria-hidden="true" />
                  <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <Phone size={15} className="shrink-0 text-peach" aria-hidden="true" />
                  <span>Telefone: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <InstagramIcon size={15} className="shrink-0 text-peach" aria-hidden="true" />
                  <span>Instagram: {CONTACT_INFO.instagram}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <Mail size={15} className="shrink-0 text-peach" aria-hidden="true" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-white/60">
                <MapPin size={15} className="mt-0.5 shrink-0 text-white/35" aria-hidden="true" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Aviso de conformidade */}
        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-left">
          <p className="flex gap-2 text-[11px] leading-relaxed text-white/45">
            <ShieldCheck size={14} className="mt-0.5 shrink-0 text-white/35" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-white/60">
                Aviso de Conformidade Deontológica (Provimento CFOAB nº 205/2021):
              </strong>{' '}
              Este site possui caráter meramente informativo e ilustrativo, destinado a prestar
              esclarecimentos técnicos à sociedade e aos jurisdicionados. Não configura e não deve ser
              interpretado como publicidade de captação ilícita, mercantilização de serviços ou promessa
              infundada de ganho de causa. Todas as análises de casos e contratações dependem de avaliação
              concreta de fatos e documentos por profissional habilitada.
            </span>
          </p>

          <div className="flex flex-col items-center justify-between gap-4 pt-2 text-[11px] text-white/45 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Dra. Taís Freitas Advocacia • OAB/MT 23.396. Todos os direitos
              reservados.
            </p>
            {/*
              PENDENTE ANTES DO DEPLOY: "Termos de Uso" e "Política de Privacidade" precisam existir
              como páginas reais (LGPD art. 9 exige aviso de tratamento e canal do titular).
              Enquanto não existirem, não exibimos rótulo clicável que leva a lugar nenhum.
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}

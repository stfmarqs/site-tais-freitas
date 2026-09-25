import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import QRCode from 'qrcode';
import {
  X,
  Download,
  MessageCircle,
  Phone,
  Mail,
  Check,
  Share2,
  ShieldCheck,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CONTACT_INFO, generateVCard, getWhatsAppUrl } from '../utils/vcard';

export default function DigitalCardModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const tituloId = useId();
  const [qr, setQr] = useState({ estado: 'carregando', url: '' });
  const [campoCopiado, setCampoCopiado] = useState(null);
  const [aviso, setAviso] = useState('');

  const gerarQr = useCallback(() => {
    setQr({ estado: 'carregando', url: '' });
    QRCode.toDataURL(window.location.href, {
      width: 220,
      margin: 2,
      color: { dark: '#3B3732', light: '#FFFFFF' },
    })
      .then((url) => setQr({ estado: 'pronto', url }))
      .catch(() => setQr({ estado: 'erro', url: '' }));
  }, []);

  // Abre/fecha o dialog nativo. showModal() entrega top layer, ::backdrop,
  // focus trap, inert no fundo e restauração de foco — tudo sem código nosso.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      const overflowAnterior = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      gerarQr();
      return () => {
        // restaura o valor ANTERIOR, não um 'unset' que apagaria regra de CSS
        document.body.style.overflow = overflowAnterior;
      };
    }
    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, gerarQr]);

  const copiar = async (texto, campo) => {
    try {
      if (!navigator.clipboard) throw new Error('sem clipboard');
      await navigator.clipboard.writeText(texto);
      setCampoCopiado(campo);
      setAviso('Copiado para a área de transferência.');
      setTimeout(() => setCampoCopiado(null), 2500);
    } catch {
      // clipboard falha em contexto não-seguro e em WebView de app
      setAviso(`Não foi possível copiar automaticamente. O endereço é ${texto}`);
    }
  };

  const compartilhar = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Dra. Taís Freitas - Advocacia',
          text: 'Cartão de Visita Digital da Dra. Taís Freitas (OAB/MT 23.396)',
          url: window.location.href,
        });
      } catch {
        // usuário cancelou — sem ação
      }
      return;
    }
    copiar(window.location.href, 'link');
  };

  const atalhos = [
    {
      chave: 'whatsapp',
      tipo: 'link',
      href: getWhatsAppUrl('Olá, Dra. Taís Freitas. Salvei seu cartão digital e gostaria de uma orientação jurídica.'),
      externo: true,
      icone: MessageCircle,
      rotulo: 'Conversar',
      valor: 'WhatsApp',
    },
    {
      chave: 'telefone',
      tipo: 'link',
      href: `tel:+${CONTACT_INFO.phoneRaw}`,
      icone: Phone,
      rotulo: 'Ligação',
      valor: CONTACT_INFO.phoneDisplay,
    },
    {
      chave: 'instagram',
      tipo: 'link',
      href: CONTACT_INFO.instagramUrl,
      externo: true,
      icone: InstagramIcon,
      rotulo: 'Instagram',
      valor: CONTACT_INFO.instagram,
    },
  ];

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={tituloId}
      onClose={onClose}
      onClick={(e) => {
        // clique no ::backdrop chega no próprio <dialog>, não nos filhos
        if (e.target === dialogRef.current) onClose();
      }}
      className="dialogo-cartao m-auto w-[min(92vw,32rem)] max-h-[min(88svh,44rem)] overflow-y-auto overscroll-contain rounded-shell bg-white p-0 text-charcoal"
    >
      {/* Faixa do cabeçalho */}
      <div className="relative overflow-hidden bg-charcoal px-6 pb-14 pt-8 text-white">
        <img
          src="./assets/monogram-cream-320.webp"
          alt=""
          width={320}
          height={260}
          className="pointer-events-none absolute -right-8 -top-8 w-40 opacity-10"
        />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          aria-label="Fechar cartão digital"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="mb-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-peach/30 bg-peach/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-peach">
            <ShieldCheck size={12} aria-hidden="true" />
            {CONTACT_INFO.oab}
          </span>
          <span className="text-xs text-white/60">• Advogada</span>
        </div>

        <h2 id={tituloId} className="font-serif text-2xl font-semibold tracking-tight text-white">
          {CONTACT_INFO.name}
        </h2>
        <p className="mt-1 text-xs font-medium text-peach">
          Direito Previdenciário &amp; Direito do Consumidor
        </p>
      </div>

      {/* Retrato sobreposto */}
      <div className="relative -mt-10 flex items-end justify-between px-6">
        <span className="block h-20 w-20 overflow-hidden rounded-surface bg-warm-gray ring-4 ring-white">
          <img
            src="./assets/tais-portrait-160.webp"
            alt="Dra. Taís Freitas"
            width={160}
            height={160}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        </span>

        <button
          type="button"
          onClick={compartilhar}
          className="inline-flex items-center gap-1.5 rounded-full bg-warm-gray px-3 py-1.5 text-xs font-medium text-charcoal-muted transition-colors duration-200 hover:bg-rule"
        >
          {campoCopiado === 'link' ? (
            <Check size={14} className="text-terracotta" aria-hidden="true" />
          ) : (
            <Share2 size={14} aria-hidden="true" />
          )}
          {campoCopiado === 'link' ? 'Link copiado' : 'Compartilhar'}
        </button>
      </div>

      <div className="space-y-5 px-6 pb-6 pt-5">
        <button
          type="button"
          onClick={generateVCard}
          className="group flex w-full items-center justify-center gap-2.5 rounded-field bg-charcoal px-5 py-3.5 text-sm font-medium text-white transition-colors duration-200 ease-out-quint hover:bg-charcoal-deep active:scale-[0.99]"
        >
          <Download
            size={18}
            className="text-peach transition-transform duration-200 ease-out-quint group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
          <span>Salvar Contato na Agenda (.vcf)</span>
        </button>

        {/* Atalhos de contato — ícones em tinta da paleta, sem tile colorido avulso */}
        <div className="grid grid-cols-2 gap-2.5">
          {atalhos.map(({ chave, href, externo, icone: Icone, rotulo, valor }) => (
            <a
              key={chave}
              href={href}
              {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-2.5 rounded-field border border-rule p-3 transition-colors duration-200 hover:border-rule-strong hover:bg-cream"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-field border border-rule bg-cream text-terracotta">
                <Icone size={16} aria-hidden="true" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-[11px] font-medium text-charcoal-muted">{rotulo}</span>
                <span className="block truncate text-xs font-semibold text-charcoal">{valor}</span>
              </span>
            </a>
          ))}

          <button
            type="button"
            onClick={() => copiar(CONTACT_INFO.email, 'email')}
            className="flex items-center gap-2.5 rounded-field border border-rule p-3 text-left transition-colors duration-200 hover:border-rule-strong hover:bg-cream"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-field border border-rule bg-cream text-terracotta">
              {campoCopiado === 'email' ? <Check size={16} aria-hidden="true" /> : <Mail size={16} aria-hidden="true" />}
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-medium text-charcoal-muted">
                {campoCopiado === 'email' ? 'Copiado' : 'E-mail'}
              </span>
              <span className="block truncate text-xs font-semibold text-charcoal">Copiar e-mail</span>
            </span>
          </button>
        </div>

        {/* QR Code com os três estados. Altura reservada para não haver salto de layout. */}
        <div className="border-t border-rule pt-4 text-center">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal-muted">
            Escaneie com a câmera para abrir no celular
          </p>

          <div className="flex min-h-[9.5rem] items-center justify-center">
            {qr.estado === 'carregando' && (
              <div
                className="h-36 w-36 rounded-surface border border-rule bg-warm-gray motion-ok:animate-pulse"
                aria-hidden="true"
              />
            )}

            {qr.estado === 'pronto' && (
              <span className="inline-block rounded-surface border border-rule bg-white p-2">
                <img
                  src={qr.url}
                  alt="QR Code com o endereço do site da Dra. Taís Freitas"
                  width={128}
                  height={128}
                  className="h-32 w-32"
                />
              </span>
            )}

            {qr.estado === 'erro' && (
              <div className="flex h-36 w-full max-w-[16rem] flex-col items-center justify-center gap-2 rounded-surface border border-rule bg-cream px-4 text-center">
                <AlertCircle size={20} className="text-terracotta" aria-hidden="true" />
                <p className="text-[11px] leading-snug text-charcoal-muted">
                  Não foi possível gerar o QR Code.
                </p>
                <button
                  type="button"
                  onClick={gerarQr}
                  className="inline-flex items-center gap-1.5 rounded-field border border-rule bg-white px-3 py-1.5 text-[11px] font-semibold text-charcoal transition-colors duration-200 hover:bg-warm-gray"
                >
                  <RotateCcw size={12} aria-hidden="true" />
                  Tentar novamente
                </button>
              </div>
            )}
          </div>

          <p className="mt-2 text-[11px] text-charcoal-muted">{CONTACT_INFO.location}</p>
        </div>

        {/* Região viva: leitor de tela anuncia o resultado de copiar/compartilhar */}
        <p role="status" aria-live="polite" className="min-h-4 text-center text-[11px] text-charcoal-muted">
          {aviso}
        </p>
      </div>
    </dialog>
  );
}

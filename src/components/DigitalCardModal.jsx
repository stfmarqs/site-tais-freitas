import React, { useEffect, useState, useRef } from 'react';
import QRCode from 'qrcode';
import { 
  X, 
  Download, 
  MessageCircle, 
  Phone, 
  Mail, 
  Copy, 
  Check, 
  Share2, 
  ShieldCheck 
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CONTACT_INFO, generateVCard, getWhatsAppUrl } from '../utils/vcard';

export default function DigitalCardModal({ isOpen, onClose }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Generate QR Code for page or direct WhatsApp
      QRCode.toDataURL(window.location.href, {
        width: 220,
        margin: 2,
        color: {
          dark: '#3B3732',
          light: '#FFFFFF'
        }
      })
      .then(url => setQrDataUrl(url))
      .catch(err => console.error(err));
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Dra. Taís Freitas - Advocacia Especializada',
          text: 'Cartão de Visita Digital da Dra. Taís Freitas (OAB/MT 23.396) - Direito Previdenciário & Consumidor',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
      }
    } else {
      copyToClipboard(window.location.href, 'link');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#25221F]/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Ribbon / Banner */}
        <div className="relative bg-[#3B3732] px-6 pt-8 pb-14 text-white overflow-hidden">
          {/* Subtle background monogram */}
          <img 
            src="/assets/monogram-white-transparent.png" 
            alt="Monograma TF" 
            className="absolute -right-8 -top-8 w-40 h-40 opacity-10 pointer-events-none"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#FDBA74]/20 text-[#FDBA74] border border-[#FDBA74]/30">
              <ShieldCheck size={12} />
              {CONTACT_INFO.oab}
            </span>
            <span className="text-xs text-stone-300">• Advogada</span>
          </div>

          <h3 className="font-serif text-2xl font-semibold tracking-tight text-white">
            {CONTACT_INFO.name}
          </h3>
          <p className="text-xs text-[#FDBA74] mt-1 font-medium">
            Direito Previdenciário & Direito do Consumidor
          </p>
        </div>

        {/* Profile Picture Floating Overlap */}
        <div className="relative px-6 -mt-10 flex justify-between items-end">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white shadow-md bg-stone-100">
              <img 
                src="/assets/tais-portrait.png" 
                alt="Dra. Taís Freitas" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Status dot */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white ring-2 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
          >
            {copiedField === 'link' ? <Check size={14} className="text-emerald-600" /> : <Share2 size={14} />}
            {copiedField === 'link' ? 'Link Copiado!' : 'Compartilhar'}
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 pt-5 pb-6 space-y-5">
          {/* Primary Action: Save to Phonebook */}
          <button
            onClick={generateVCard}
            className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-[#3B3732] text-white font-medium text-sm shadow-md hover:bg-[#25221F] active:scale-[0.99] transition-all group"
          >
            <Download size={18} className="text-[#FDBA74] group-hover:-translate-y-0.5 transition-transform" />
            <span>Salvar Contato na Agenda (.vcf)</span>
          </button>

          {/* Quick Contact Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={getWhatsAppUrl("Olá, Dra. Taís Freitas. Salvei seu cartão digital e gostaria de uma orientação jurídica.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MessageCircle size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-stone-500 font-medium">Conversar</div>
                <div className="text-xs font-semibold text-stone-800">WhatsApp</div>
              </div>
            </a>

            <a
              href={`tel:+${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-stone-700 flex items-center justify-center border border-stone-200">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-stone-500 font-medium">Ligação</div>
                <div className="text-xs font-semibold text-stone-800">{CONTACT_INFO.phoneDisplay}</div>
              </div>
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-700 flex items-center justify-center border border-pink-100">
                <InstagramIcon size={16} />
              </div>
              <div className="text-left truncate">
                <div className="text-[11px] text-stone-500 font-medium">Instagram</div>
                <div className="text-xs font-semibold text-stone-800 truncate">{CONTACT_INFO.instagram}</div>
              </div>
            </a>

            <button
              onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-colors text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                {copiedField === 'email' ? <Check size={16} className="text-emerald-600" /> : <Mail size={16} />}
              </div>
              <div className="text-left truncate">
                <div className="text-[11px] text-stone-500 font-medium">
                  {copiedField === 'email' ? 'Copiado!' : 'E-mail'}
                </div>
                <div className="text-xs font-semibold text-stone-800 truncate">Copiar E-mail</div>
              </div>
            </button>
          </div>

          {/* QR Code Section for Real-life Scanning */}
          <div className="pt-2 pb-1 border-t border-stone-100 text-center">
            <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium mb-3">
              Escaneie com a câmera para abrir no celular
            </div>
            {qrDataUrl && (
              <div className="inline-block p-2 rounded-2xl border border-stone-200/80 bg-white shadow-xs">
                <img src={qrDataUrl} alt="QR Code Dra. Taís Freitas" className="w-32 h-32 mx-auto" />
              </div>
            )}
            <p className="text-[11px] text-stone-400 mt-2">
              {CONTACT_INFO.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

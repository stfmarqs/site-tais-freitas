import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle,
  HelpCircle,
  Clock,
  Send
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function IntakeDiagnostic() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(null); // 'prev' | 'cons'
  const [issue, setIssue] = useState(null);
  const [urgency, setUrgency] = useState(null);

  const prevIssues = [
    { id: 'aposentadoria', label: 'Aposentadoria (verificar tempo, idade ou cálculo)' },
    { id: 'negado', label: 'Benefício Negado ou suspenso pelo INSS' },
    { id: 'incapacidade', label: 'Auxílio-Doença / Aposentadoria por Invalidez / Perícia' },
    { id: 'bpc_loas', label: 'BPC/LOAS (Idoso 65+ ou Pessoa com Deficiência)' },
    { id: 'pensao_revisao', label: 'Pensão por Morte ou Revisão de Benefício' },
  ];

  const consIssues = [
    { id: 'voo', label: 'Voo cancelado, atraso (+4h) ou bagagem extraviada' },
    { id: 'golpe_pix', label: 'Golpe do Pix, conta invadida ou cartão clonado' },
    { id: 'negativacao', label: 'Nome negativado indevidamente no SPC/Serasa' },
    { id: 'cobranca_abusiva', label: 'Cobrança indevida ou descumprimento contratual' },
  ];

  const urgencyOptions = [
    { id: 'urgente', label: 'Preciso de orientação rápida (prazo correndo ou recente)' },
    { id: 'negado_recente', label: 'Já recebi indeferimento do INSS ou recusa da empresa' },
    { id: 'planejamento', label: 'Desejo tirar dúvidas e planejar com segurança' },
  ];

  const handleReset = () => {
    setStep(1);
    setArea(null);
    setIssue(null);
    setUrgency(null);
  };

  const getCustomWhatsAppMessage = () => {
    const areaLabel = area === 'prev' ? 'Direito Previdenciário (INSS)' : 'Direito do Consumidor';
    const issueObj = (area === 'prev' ? prevIssues : consIssues).find(i => i.id === issue);
    const urgencyObj = urgencyOptions.find(u => u.id === urgency);

    return `Olá, Dra. Taís Freitas. Realizei a simulação de enquadramento pelo seu site:
• Área: ${areaLabel}
• Caso: ${issueObj?.label || 'Não especificado'}
• Situação atual: ${urgencyObj?.label || 'Orientação geral'}

Gostaria de agendar uma análise preliminar com a senhora.`;
  };

  return (
    <section id="triagem" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white text-stone-700 border border-stone-200 shadow-2xs">
            <Sparkles size={13} className="text-[#D97736]" />
            Ferramenta Consultiva
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3B3732] tracking-tight">
            Simulador de Enquadramento Prévio
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
            Identifique em poucos cliques o cenário do seu direito e inicie sua conversa com a Dra. Taís Freitas já com o diagnóstico estruturado.
          </p>
        </div>

        {/* Stepper Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md ring-1 ring-black/5 relative">
          
          {/* Progress Indicators */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-6 mb-8">
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 1 ? 'bg-[#3B3732] text-white' : 'bg-stone-100 text-stone-400'
              }`}>
                1
              </span>
              <span className="text-xs font-medium text-stone-700 hidden sm:inline">Área</span>
            </div>
            
            <div className="h-0.5 flex-1 mx-3 bg-stone-100 relative">
              <div className={`h-full bg-[#D97736] transition-all duration-300 ${
                step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'
              }`} />
            </div>

            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 2 ? 'bg-[#3B3732] text-white' : 'bg-stone-100 text-stone-400'
              }`}>
                2
              </span>
              <span className="text-xs font-medium text-stone-700 hidden sm:inline">Tema</span>
            </div>

            <div className="h-0.5 flex-1 mx-3 bg-stone-100 relative">
              <div className={`h-full bg-[#D97736] transition-all duration-300 ${
                step <= 2 ? 'w-0' : 'w-full'
              }`} />
            </div>

            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step === 3 ? 'bg-[#3B3732] text-white' : 'bg-stone-100 text-stone-400'
              }`}>
                3
              </span>
              <span className="text-xs font-medium text-stone-700 hidden sm:inline">Diagnóstico</span>
            </div>
          </div>

          {/* STEP 1: Escolha da Área */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-base sm:text-lg font-semibold text-stone-800">
                1. Qual é a matéria jurídica relacionada ao seu problema?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setArea('prev');
                    setStep(2);
                  }}
                  className="p-5 rounded-2xl border-2 text-left transition-all cursor-pointer border-stone-200 hover:border-[#3B3732] hover:bg-stone-50/70 group"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D97736] mb-1">
                    Foco Principal
                  </div>
                  <div className="font-serif text-lg font-semibold text-[#3B3732] group-hover:text-black mb-2">
                    Direito Previdenciário (INSS)
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Aposentadorias, benefícios negados, auxílio-doença, BPC/LOAS, pensão por morte ou revisões de cálculo.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setArea('cons');
                    setStep(2);
                  }}
                  className="p-5 rounded-2xl border-2 text-left transition-all cursor-pointer border-stone-200 hover:border-[#3B3732] hover:bg-stone-50/70 group"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                    Relações de Consumo
                  </div>
                  <div className="font-serif text-lg font-semibold text-[#3B3732] group-hover:text-black mb-2">
                    Direito do Consumidor & Bancário
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Problemas com voos, extravio de malas, fraudes bancárias, golpes do Pix ou negativação indevida.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Detalhamento do Problema */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-stone-800">
                  2. Selecione a opção que melhor resume sua situação:
                </h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Voltar
                </button>
              </div>

              <div className="space-y-2.5">
                {(area === 'prev' ? prevIssues : consIssues).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setIssue(item.id);
                      setStep(3);
                    }}
                    className="w-full flex items-center justify-between p-4 rounded-xl border border-stone-200/90 text-left hover:border-[#3B3732] hover:bg-stone-50/80 transition-all cursor-pointer group"
                  >
                    <span className="text-xs sm:text-sm font-medium text-stone-800 group-hover:text-black">
                      {item.label}
                    </span>
                    <ArrowRight size={16} className="text-stone-400 group-hover:text-[#D97736] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Urgência e Envio Direto ao WhatsApp */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-stone-800">
                  3. Qual o momento atual da sua demanda?
                </h3>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                >
                  Voltar
                </button>
              </div>

              <div className="space-y-2.5">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setUrgency(opt.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      urgency === opt.id
                        ? 'border-[#3B3732] bg-[#FAF8F5] ring-1 ring-[#3B3732]'
                        : 'border-stone-200/90 hover:border-stone-400'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-medium text-stone-800">
                      {opt.label}
                    </span>
                    {urgency === opt.id && (
                      <CheckCircle size={18} className="text-[#D97736] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>

              {/* Ready to Send */}
              {urgency && (
                <div className="pt-6 border-t border-stone-100 space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 text-left text-xs space-y-2">
                    <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                      <ShieldCheck size={16} className="text-[#D97736]" />
                      Resumo da Triagem Prévia:
                    </div>
                    <div className="text-stone-600 pl-5 space-y-1">
                      <div><strong>Área:</strong> {area === 'prev' ? 'Direito Previdenciário (INSS)' : 'Direito do Consumidor'}</div>
                      <div><strong>Assunto:</strong> {(area === 'prev' ? prevIssues : consIssues).find(i => i.id === issue)?.label}</div>
                      <div><strong>Situação:</strong> {urgencyOptions.find(u => u.id === urgency)?.label}</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getWhatsAppUrl(getCustomWhatsAppMessage())}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#3B3732] hover:bg-[#25221F] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <MessageCircle size={18} className="text-[#FDBA74]" />
                      <span>Enviar Triagem para a Dra. Taís no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-4 rounded-2xl text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                    >
                      <RotateCcw size={14} />
                      <span>Recomeçar</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footnote */}
        <p className="text-center text-[11px] text-stone-400 mt-4">
          Conforme Provimento 205/2021 da OAB: as respostas acima servem exclusivamente para direcionamento técnico prévio, garantindo sigilo e pessoalidade.
        </p>

      </div>
    </section>
  );
}

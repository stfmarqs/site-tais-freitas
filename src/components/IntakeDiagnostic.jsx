import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, RotateCcw, MessageCircle, ShieldCheck, CheckCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

const temasPrevidenciario = [
  { id: 'aposentadoria', label: 'Aposentadoria (verificar tempo, idade ou cálculo)' },
  { id: 'negado', label: 'Benefício Negado ou suspenso pelo INSS' },
  { id: 'incapacidade', label: 'Auxílio-Doença / Aposentadoria por Invalidez / Perícia' },
  { id: 'bpc_loas', label: 'BPC/LOAS (Idoso 65+ ou Pessoa com Deficiência)' },
  { id: 'pensao_revisao', label: 'Pensão por Morte ou Revisão de Benefício' },
];

const temasConsumidor = [
  { id: 'voo', label: 'Voo cancelado, atraso (+4h) ou bagagem extraviada' },
  { id: 'golpe_pix', label: 'Golpe do Pix, conta invadida ou cartão clonado' },
  { id: 'negativacao', label: 'Nome negativado indevidamente no SPC/Serasa' },
  { id: 'cobranca_abusiva', label: 'Cobrança indevida ou descumprimento contratual' },
];

const momentos = [
  { id: 'urgente', label: 'Preciso de orientação rápida (prazo correndo ou recente)' },
  { id: 'negado_recente', label: 'Já recebi indeferimento do INSS ou recusa da empresa' },
  { id: 'planejamento', label: 'Desejo tirar dúvidas e planejar com segurança' },
];

const ETAPAS = [
  { numero: 1, nome: 'Área' },
  { numero: 2, nome: 'Tema' },
  { numero: 3, nome: 'Diagnóstico' },
];

export default function IntakeDiagnostic() {
  const [etapa, setEtapa] = useState(1);
  const [area, setArea] = useState(null);
  const [tema, setTema] = useState(null);
  const [momento, setMomento] = useState(null);
  const tituloEtapaRef = useRef(null);
  const jaMontou = useRef(false);

  // Ao trocar de etapa os botões antigos são desmontados e o foco cairia no <body>.
  // Mover o foco para o título da nova etapa mantém quem navega por teclado orientado.
  useEffect(() => {
    if (!jaMontou.current) {
      jaMontou.current = true;
      return;
    }
    tituloEtapaRef.current?.focus();
  }, [etapa]);

  const escolherArea = (novaArea) => {
    // trocar de área invalida as respostas dependentes
    if (novaArea !== area) {
      setTema(null);
      setMomento(null);
    }
    setArea(novaArea);
    setEtapa(2);
  };

  const escolherTema = (novoTema) => {
    if (novoTema !== tema) setMomento(null);
    setTema(novoTema);
    setEtapa(3);
  };

  const reiniciar = () => {
    setEtapa(1);
    setArea(null);
    setTema(null);
    setMomento(null);
  };

  const temasAtuais = area === 'prev' ? temasPrevidenciario : temasConsumidor;
  const rotuloArea = area === 'prev' ? 'Direito Previdenciário (INSS)' : 'Direito do Consumidor';
  const rotuloTema = temasAtuais.find((t) => t.id === tema)?.label;
  const rotuloMomento = momentos.find((m) => m.id === momento)?.label;

  const mensagemWhatsApp = () => `Olá, Dra. Taís Freitas. Realizei a simulação de enquadramento pelo seu site:
• Área: ${rotuloArea}
• Caso: ${rotuloTema || 'Não especificado'}
• Situação atual: ${rotuloMomento || 'Orientação geral'}

Gostaria de agendar uma análise preliminar com a senhora.`;

  const classeOpcao =
    'flex w-full items-center justify-between gap-3 rounded-field border border-rule p-4 text-left transition-colors duration-200 ease-out-quint hover:border-charcoal hover:bg-cream';

  return (
    <section id="triagem" className="bg-cream py-20" data-reveal>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10 space-y-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
              02 — Ferramenta Consultiva
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-title font-semibold text-charcoal">
            Simulador de Enquadramento Prévio
          </h2>
          <p className="mx-auto max-w-[60ch] text-lede text-charcoal-muted">
            Identifique em poucos cliques o cenário do seu direito e inicie sua conversa com a Dra. Taís
            Freitas já com o diagnóstico estruturado.
          </p>
        </div>

        <div className="rounded-shell border border-rule bg-white p-6 sm:p-10">

          {/* Progresso: além dos círculos, um texto que existe em QUALQUER largura
              (antes os rótulos eram hidden sm:inline e no celular só sobravam números) */}
          <div className="mb-8 border-b border-rule pb-6">
            <div className="mb-3 flex items-center justify-between">
              {ETAPAS.map((e, i) => (
                <React.Fragment key={e.numero}>
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors duration-200 ${
                        etapa >= e.numero ? 'bg-charcoal text-white' : 'bg-warm-gray text-charcoal-muted/60'
                      }`}
                      aria-hidden="true"
                    >
                      {e.numero}
                    </span>
                    <span className="hidden text-xs font-medium text-charcoal-muted sm:inline">
                      {e.nome}
                    </span>
                  </div>
                  {i < ETAPAS.length - 1 && (
                    <div className="relative mx-3 h-0.5 flex-1 bg-warm-gray" aria-hidden="true">
                      <div
                        className={`h-full bg-terracotta transition-[width] duration-300 ease-out-quint ${
                          etapa > e.numero ? 'w-full' : 'w-0'
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Rótulo visível no celular, onde os nomes das etapas não cabem ao lado dos números */}
            <p className="text-xs font-medium text-charcoal-muted sm:hidden">
              Etapa {etapa} de {ETAPAS.length} — {ETAPAS[etapa - 1].nome}
            </p>
            {/* Uma única região viva por tarefa: duas anunciariam a troca em dobro */}
            <p className="sr-only" role="status" aria-live="polite">
              Etapa {etapa} de {ETAPAS.length}: {ETAPAS[etapa - 1].nome}
            </p>
          </div>

          {etapa === 1 && (
            <div className="space-y-6">
              <h3
                ref={tituloEtapaRef}
                tabIndex={-1}
                className="text-base font-semibold text-charcoal outline-none sm:text-lg"
              >
                1. Qual é a matéria jurídica relacionada ao seu problema?
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => escolherArea('prev')}
                  className="group rounded-surface border-2 border-rule p-5 text-left transition-colors duration-200 ease-out-quint hover:border-charcoal hover:bg-cream"
                >
                  <span className="mb-1 block text-xs font-bold uppercase tracking-[0.1em] text-terracotta">
                    Foco Principal
                  </span>
                  <span className="mb-2 block font-serif text-lg font-semibold text-charcoal">
                    Direito Previdenciário (INSS)
                  </span>
                  <span className="block text-xs leading-relaxed text-charcoal-muted">
                    Aposentadorias, benefícios negados, auxílio-doença, BPC/LOAS, pensão por morte ou
                    revisões de cálculo.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => escolherArea('cons')}
                  className="group rounded-surface border-2 border-rule p-5 text-left transition-colors duration-200 ease-out-quint hover:border-charcoal hover:bg-cream"
                >
                  <span className="mb-1 block text-xs font-bold uppercase tracking-[0.1em] text-charcoal-muted">
                    Relações de Consumo
                  </span>
                  <span className="mb-2 block font-serif text-lg font-semibold text-charcoal">
                    Direito do Consumidor &amp; Bancário
                  </span>
                  <span className="block text-xs leading-relaxed text-charcoal-muted">
                    Problemas com voos, extravio de malas, fraudes bancárias, golpes do Pix ou negativação
                    indevida.
                  </span>
                </button>
              </div>
            </div>
          )}

          {etapa === 2 && (
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h3
                  ref={tituloEtapaRef}
                  tabIndex={-1}
                  className="text-base font-semibold text-charcoal outline-none sm:text-lg"
                >
                  2. Selecione a opção que melhor resume sua situação:
                </h3>
                <button
                  type="button"
                  onClick={() => setEtapa(1)}
                  className="shrink-0 rounded-field px-2 py-1 text-xs text-charcoal-muted underline underline-offset-2 transition-colors duration-200 hover:text-charcoal"
                >
                  Voltar
                </button>
              </div>

              <div className="space-y-2.5">
                {temasAtuais.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => escolherTema(item.id)}
                    className={`${classeOpcao} group`}
                  >
                    <span className="text-xs font-medium text-charcoal sm:text-sm">{item.label}</span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-charcoal-muted/60 transition-transform duration-200 ease-out-quint group-hover:translate-x-1 group-hover:text-terracotta"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {etapa === 3 && (
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h3
                  ref={tituloEtapaRef}
                  tabIndex={-1}
                  className="text-base font-semibold text-charcoal outline-none sm:text-lg"
                >
                  3. Qual o momento atual da sua demanda?
                </h3>
                <button
                  type="button"
                  onClick={() => setEtapa(2)}
                  className="shrink-0 rounded-field px-2 py-1 text-xs text-charcoal-muted underline underline-offset-2 transition-colors duration-200 hover:text-charcoal"
                >
                  Voltar
                </button>
              </div>

              {/* Botões de alternância com aria-pressed: um radiogroup de verdade exigiria
                  navegação por setas, e ARIA pela metade atrapalha mais do que ajuda. */}
              <div className="space-y-2.5">
                {momentos.map((opt) => {
                  const marcado = momento === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={marcado}
                      onClick={() => setMomento(opt.id)}
                      className={`flex w-full items-center justify-between gap-3 rounded-field border p-4 text-left transition-colors duration-200 ease-out-quint ${
                        marcado
                          ? 'border-charcoal bg-cream ring-1 ring-charcoal'
                          : 'border-rule hover:border-rule-strong hover:bg-cream/60'
                      }`}
                    >
                      <span className="text-xs font-medium text-charcoal sm:text-sm">{opt.label}</span>
                      {marcado && (
                        <CheckCircle size={18} className="shrink-0 text-terracotta" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Resumo + envio: animado por grid-rows, com entrada e saída reais */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out-quint ${
                  momento ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="space-y-4 border-t border-rule pt-6">
                    <div className="rounded-surface border border-rule bg-cream p-4 text-left text-xs">
                      <p className="flex items-center gap-1.5 font-semibold text-charcoal">
                        <ShieldCheck size={16} className="text-terracotta" aria-hidden="true" />
                        Resumo da Triagem Prévia:
                      </p>
                      <dl className="mt-2 space-y-1 pl-5 text-charcoal-muted">
                        <div className="flex gap-1.5">
                          <dt className="font-semibold text-charcoal">Área:</dt>
                          <dd>{rotuloArea}</dd>
                        </div>
                        <div className="flex gap-1.5">
                          <dt className="font-semibold text-charcoal">Assunto:</dt>
                          <dd>{rotuloTema}</dd>
                        </div>
                        <div className="flex gap-1.5">
                          <dt className="font-semibold text-charcoal">Situação:</dt>
                          <dd>{rotuloMomento}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-col items-center gap-3 sm:flex-row">
                      <a
                        href={getWhatsAppUrl(mensagemWhatsApp())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2.5 rounded-field bg-charcoal px-6 py-4 text-sm font-semibold text-white transition-colors duration-200 ease-out-quint hover:bg-charcoal-deep sm:flex-1"
                      >
                        <MessageCircle size={18} className="text-peach" aria-hidden="true" />
                        <span>Enviar Triagem para a Dra. Taís no WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={reiniciar}
                        className="inline-flex items-center gap-1.5 rounded-field px-4 py-4 text-xs font-medium text-charcoal-muted transition-colors duration-200 hover:bg-warm-gray hover:text-charcoal"
                      >
                        <RotateCcw size={14} aria-hidden="true" />
                        <span>Recomeçar</span>
                      </button>
                    </div>

                    {/* Se o WhatsApp não abrir (pop-up bloqueado, desktop sem app),
                        o número fica visível como saída alternativa. */}
                    <p className="text-center text-[11px] text-charcoal-muted">
                      Se o WhatsApp não abrir automaticamente, fale pelo número{' '}
                      <a
                        href="tel:+5565993568303"
                        className="font-semibold text-charcoal underline underline-offset-2"
                      >
                        (65) 9 9356-8303
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        <p className="mt-4 text-center text-[11px] text-charcoal-muted/80">
          Conforme Provimento 205/2021 da OAB: as respostas acima servem exclusivamente para
          direcionamento técnico prévio, garantindo sigilo e pessoalidade.
        </p>

      </div>
    </section>
  );
}

import React, { useId, useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

const faqs = [
  {
    q: 'Posso me aposentar mesmo sem ter contribuído todos os meses ou anos continuamente?',
    a: 'Sim. A legislação previdenciária não exige contribuições ininterruptas. O segurado precisa preencher a carência (geralmente 180 contribuições) e a idade mínima exigida pela sua regra de transição. Além disso, períodos trabalhados na atividade rural na juventude, serviço militar, períodos em auxílio-doença e vínculos sem recolhimento correto pela empresa podem ser resgatados e averbados no seu CNIS.',
  },
  {
    q: 'Tive meu benefício negado ou cessado na perícia do INSS. Ainda é possível conseguir?',
    a: 'O indeferimento administrativo não encerra a discussão: é possível recorrer na via administrativa ou levar o caso à Justiça Federal, onde a perícia é feita por profissional nomeado pelo juízo, e não pelo INSS. Se o direito for reconhecido, a lei prevê o pagamento dos valores retroativos desde a data do requerimento. O resultado depende da análise das provas de cada caso.',
  },
  {
    q: 'O que é o BPC/LOAS e quem tem direito sem ter contribuído ao INSS?',
    a: 'O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), prevê um salário mínimo mensal a pessoas com 65 anos ou mais, ou a pessoas com deficiência de qualquer idade que enfrentem impedimentos de longo prazo. A principal característica é que não é necessário ter contribuído ao INSS, bastando comprovar a vulnerabilidade socioeconômica e a inscrição no CadÚnico.',
  },
  {
    q: 'Meu voo foi cancelado ou atrasou mais de 4 horas. Quais são os meus direitos?',
    a: 'Pelas normas da ANAC (Resolução 400) e pelo Código de Defesa do Consumidor, a companhia aérea é obrigada a fornecer assistência material progressiva (comunicação, alimentação e hospedagem). Em casos de cancelamentos repentinos, atrasos excessivos ou perda de compromissos importantes e conexões, o passageiro tem direito a buscar indenização por danos morais pelo tempo perdido e estresse sofrido, além do ressarcimento de eventuais despesas materiais.',
  },
  {
    q: 'Caí em um golpe do Pix ou tive meu cartão clonado. O banco pode ser responsabilizado?',
    a: 'Sim, em grande parte dos casos. Conforme pacificado pelo Superior Tribunal de Justiça (Súmula 479 do STJ), as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias. Quando o banco falha em seus mecanismos de segurança antifraude ou permite movimentações atípicas sem alerta, ele pode ser condenado a restituir o montante e a indenizar o cliente.',
  },
  {
    q: 'Como funciona a contratação e o atendimento à distância? É seguro?',
    a: 'O atendimento 100% digital é plenamente regulamentado pela OAB e oferece total segurança jurídica. Você envia seus documentos de forma criptografada pelo WhatsApp ou e-mail, assina a procuração e o contrato diretamente na tela do seu celular através de assinatura eletrônica com validade jurídica (ICP-Brasil/Gov.br), e pode realizar reuniões por videoconferência diretamente com a Dra. Taís Freitas.',
  },
];

export default function FaqSection() {
  const [abertoIdx, setAbertoIdx] = useState(0);
  const idBase = useId();

  return (
    <section id="faq" className="border-b border-rule bg-white py-20" data-reveal>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        <div className="mb-14 space-y-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
              04 — Perguntas Frequentes
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-title font-semibold text-charcoal">
            Esclareça suas principais dúvidas jurídicas.
          </h2>
          <p className="mx-auto max-w-[60ch] text-lede text-charcoal-muted">
            Respostas claras e objetivas sobre aposentadoria, benefícios do INSS e direitos do consumidor.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const aberto = abertoIdx === idx;
            const painelId = `${idBase}-painel-${idx}`;
            const botaoId = `${idBase}-botao-${idx}`;

            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-surface border transition-colors duration-200 ease-out-quint ${
                  aberto ? 'border-charcoal bg-cream shadow-xs' : 'border-rule bg-white hover:border-rule-strong hover:bg-cream/40'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={botaoId}
                    onClick={() => setAbertoIdx(aberto ? null : idx)}
                    aria-expanded={aberto}
                    aria-controls={painelId}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-serif text-base font-medium text-charcoal sm:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[background-color,color,rotate] duration-300 ease-out-quint ${
                        aberto ? 'rotate-180 bg-charcoal text-white' : 'bg-warm-gray text-charcoal-muted'
                      }`}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </span>
                  </button>
                </h3>

                {/* Painel sempre no DOM: anima entrada E saída por grid-template-rows,
                    e a resposta continua indexável mesmo fechada. */}
                <div
                  id={painelId}
                  role="region"
                  aria-labelledby={botaoId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out-quint ${
                    aberto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-rule px-5 pb-5 pt-4 text-sm leading-relaxed text-charcoal-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-surface border border-rule bg-cream p-6 text-center shadow-xs sm:flex-row">
          <div className="text-left text-xs text-charcoal-muted">
            <strong className="block font-semibold text-charcoal">
              Não encontrou a resposta para o seu caso?
            </strong>
            Cada situação é analisada individualmente com total transparência.
          </div>
          <a
            href={getWhatsAppUrl('Olá, Dra. Taís. Li o FAQ do site mas fiquei com uma dúvida sobre minha situação específica.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-field bg-charcoal px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-200 ease-out-quint hover:scale-[1.03] hover:bg-charcoal-deep hover:shadow-md active:scale-[0.98]"
          >
            <MessageCircle size={15} className="text-peach transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
            <span>Fazer Pergunta no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

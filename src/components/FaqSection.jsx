import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0); // first open by default

  const faqs = [
    {
      q: "Posso me aposentar mesmo sem ter contribuído todos os meses ou anos continuamente?",
      a: "Sim. A legislação previdenciária não exige contribuições ininterruptas. O segurado precisa preencher a carência (geralmente 180 contribuições) e a idade mínima exigida pela sua regra de transição. Além disso, períodos trabalhados na atividade rural na juventude, serviço militar, períodos em auxílio-doença e vínculos sem recolhimento correto pela empresa podem ser resgatados e averbados no seu CNIS."
    },
    {
      q: "Tive meu benefício negado ou cessado na perícia do INSS. Ainda é possível conseguir?",
      a: "Com certeza. O indeferimento administrativo pelo INSS é extremamente comum e não é a palavra final da lei. Através de uma ação judicial na Justiça Federal, você será submetido a uma nova perícia realizada por um médico especialista neutro e de confiança do juiz, e não por um funcionário do INSS. Caso o direito seja reconhecido, o segurado recebe todos os valores retroativos devidos desde a data do primeiro pedido."
    },
    {
      q: "O que é o BPC/LOAS e quem tem direito sem ter contribuído ao INSS?",
      a: "O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário mínimo mensal a pessoas com 65 anos ou mais, ou a pessoas com deficiência de qualquer idade que enfrentem impedimentos de longo prazo. A principal característica é que não é necessário ter contribuído ao INSS, bastando comprovar a vulnerabilidade socioeconômica e a inscrição no CadÚnico."
    },
    {
      q: "Meu voo foi cancelado ou atrasou mais de 4 horas. Quais são os meus direitos?",
      a: "Pelas normas da ANAC (Resolução 400) e pelo Código de Defesa do Consumidor, a companhia aérea é obrigada a fornecer assistência material progressiva (comunicação, alimentação e hospedagem). Em casos de cancelamentos repentinos, atrasos excessivos ou perda de compromissos importantes e conexões, o passageiro tem direito a buscar indenização por danos morais pelo tempo perdido e estresse sofrido, além do ressarcimento de eventuais despesas materiais."
    },
    {
      q: "Caí em um golpe do Pix ou tive meu cartão clonado. O banco pode ser responsabilizado?",
      a: "Sim, em grande parte dos casos. Conforme pacificado pelo Superior Tribunal de Justiça (Súmula 479 do STJ), as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias. Quando o banco falha em seus mecanismos de segurança antifraude ou permite movimentações atípicas sem alerta, ele pode ser condenado a restituir o montante e a indenizar o cliente."
    },
    {
      q: "Como funciona a contratação e o atendimento à distância? É seguro?",
      a: "O atendimento 100% digital é plenamente regulamentado pela OAB e oferece total segurança jurídica. Você envia seus documentos de forma criptografada pelo WhatsApp ou e-mail, assina a procuração e o contrato diretamente na tela do seu celular através de assinatura eletrônica com validade jurídica (ICP-Brasil/Gov.br), e pode realizar reuniões por videoconferência diretamente com a Dra. Taís Freitas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#FAF8F5] text-stone-700 border border-stone-200">
            <HelpCircle size={13} className="text-[#D97736]" />
            Perguntas Frequentes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3B3732] tracking-tight">
            Esclareça suas principais dúvidas jurídicas.
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Respostas claras e objetivas sobre aposentadoria, benefícios do INSS e direitos do consumidor.
          </p>
        </div>

        {/* Accordion List (OriginKit / Skiper UI Editorial Style) */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#3B3732] bg-[#FAF8F5] shadow-xs' 
                    : 'border-stone-200/90 bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#3B3732] pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#3B3732] text-white rotate-180' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/50 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Pill */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs text-stone-600">
            <span className="font-semibold text-stone-900 block">Não encontrou a resposta para o seu caso?</span>
            Nossa equipe analisa situações particulares sem compromisso.
          </div>
          <a
            href={getWhatsAppUrl("Olá, Dra. Taís. Li o FAQ do site mas fiquei com uma dúvida sobre minha situação específica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3B3732] text-white text-xs font-semibold hover:bg-[#25221F] transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle size={15} className="text-[#FDBA74]" />
            <span>Fazer Pergunta no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

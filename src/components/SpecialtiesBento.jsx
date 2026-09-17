import React, { useState } from 'react';
import { 
  Shield, 
  Plane, 
  CreditCard, 
  HeartHandshake, 
  FileSearch, 
  AlertCircle, 
  ArrowUpRight, 
  Check, 
  Clock, 
  Sparkles,
  Layers,
  Scale
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function SpecialtiesBento() {
  const [activeTab, setActiveTab] = useState('previdenciario'); // 'previdenciario' | 'consumidor'

  const previdenciarioCards = [
    {
      title: "Planejamento Previdenciário",
      badge: "Prevenção & Economia",
      description: "Estudo analítico e matemático de todo o seu histórico de contribuições. Identificação da data exata e da melhor regra de transição pós-Reforma para alcançar o valor máximo de aposentadoria.",
      situations: ["Simulação de regras de transição", "Projeção do teto e melhor benefício", "Correção prévia de divergências no CNIS"],
      ctaText: "Analisar meu histórico",
      whatsappMsg: "Olá, Dra. Taís. Gostaria de realizar um Planejamento Previdenciário para entender a melhor data e valor para minha aposentadoria."
    },
    {
      title: "Concessão de Aposentadorias",
      badge: "Carro-Chefe",
      description: "Acompanhamento integral do pedido administrativo e judicial para aposentadoria por idade, tempo de contribuição, aposentadoria da pessoa com deficiência e aposentadoria especial.",
      situations: ["Aposentadoria por Idade Urbana e Rural", "Tempo Especial (Insalubridade/Periculosidade)", "Desbloqueio de pendências no Meu INSS"],
      ctaText: "Verificar requisitos de aposentadoria",
      whatsappMsg: "Olá, Dra. Taís. Gostaria de verificar se já preencho os requisitos para solicitar minha aposentadoria pelo INSS."
    },
    {
      title: "Benefícios por Incapacidade",
      badge: "Saúde & Proteção",
      description: "Amparo legal para trabalhadores acometidos por doenças ou acidentes que os impeçam de exercer sua atividade habitual. Atuação assertiva contra laudos desfavoráveis de perícias.",
      situations: ["Auxílio por Incapacidade Temporária (Auxílio-Doença)", "Aposentadoria por Invalidez Permanente", "Auxílio-Acidente e Reabilitação Profissional"],
      ctaText: "Consultar benefício por incapacidade",
      whatsappMsg: "Olá, Dra. Taís. Estou afastado por motivo de saúde e tive meu benefício por incapacidade negado pelo INSS."
    },
    {
      title: "BPC / LOAS (Benefício Assistencial)",
      badge: "Direito Social",
      description: "Garantia de 1 salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência de qualquer idade em situação de vulnerabilidade, mesmo sem nunca ter contribuído ao INSS.",
      situations: ["Idosos a partir de 65 anos sem renda", "Pessoas com deficiência e impedimentos de longo prazo", "Análise do critério de renda familiar e CadÚnico"],
      ctaText: "Consultar elegibilidade BPC/LOAS",
      whatsappMsg: "Olá, Dra. Taís. Gostaria de saber se minha família tem direito a solicitar o BPC/LOAS pelo INSS."
    },
    {
      title: "Pensão por Morte & Dependentes",
      badge: "Amparo Familiar",
      description: "Resguardo financeiro aos dependentes do segurado falecido. Comprovação de união estável, dependência econômica e resolução de exigências burocráticas complexas do INSS.",
      situations: ["Comprovação de união estável e casamento", "Pensão para filhos menores ou inválidos", "Reversão de indeferimento de pensão"],
      ctaText: "Esclarecer sobre pensão por morte",
      whatsappMsg: "Olá, Dra. Taís. Gostaria de orientação jurídica sobre o pedido de Pensão por Morte no INSS."
    },
    {
      title: "Revisões de Benefício & Acertos de CNIS",
      badge: "Recálculo Técnico",
      description: "Auditoria técnica minuciosa em benefícios já concedidos para detectar salários descartados incorretamente, períodos não computados e aplicação de teses revisionais favoráveis.",
      situations: ["Inclusão de vínculos trabalhistas omitidos", "Revisão do Primeiro Pagamento", "Retificação de indicadores de pendência no CNIS"],
      ctaText: "Solicitar revisão de cálculo",
      whatsappMsg: "Olá, Dra. Taís. Já recebo benefício do INSS e desconfio que o valor concedido foi calculado abaixo do correto."
    }
  ];

  const consumidorCards = [
    {
      title: "Direito Aéreo & Danos aos Passageiros",
      badge: "Transporte Aéreo",
      description: "Reparação civil e ressarcimento integral por falhas graves de companhias aéreas. A legislação brasileira e o CDC garantem indenização por tempo perdido e transtornos sofridos.",
      situations: ["Voo cancelado ou atrasado por mais de 4 horas", "Extravio temporário ou definitivo de bagagem", "Overbooking (preterição de embarque) e perda de conexões"],
      ctaText: "Analisar problema com voo",
      whatsappMsg: "Olá, Dra. Taís. Tive um problema com companhia aérea (atraso/cancelamento de voo ou extravio de mala) e quero saber meus direitos."
    },
    {
      title: "Golpes do Pix & Fraudes Bancárias",
      badge: "Segurança Digital",
      description: "Proteção patrimonial contra vazamento de dados, engenharia social, cartões clonados e transferências fraudulentas. As instituições financeiras possuem dever objetivo de segurança.",
      situations: ["Transações Pix indevidas sob coação ou invasão", "Contratos de empréstimo não solicitados em conta", "Cartão de crédito clonado e compras contestadas"],
      ctaText: "Orientação sobre fraude bancária",
      whatsappMsg: "Olá, Dra. Taís. Fui vítima de um golpe do Pix / fraude no banco e preciso de orientação para recuperar os valores."
    },
    {
      title: "Negativação Indevida & Serasa/SPC",
      badge: "Nome Limpo",
      description: "Exclusão imediata de restrições de crédito decorrentes de contas já quitadas, fraudes de terceiros ou serviços nunca contratados, com pleito de indenização moral pedagógica.",
      situations: ["Inscrição no SPC/Serasa por conta já paga", "Dívidas fraudulentas em nome do consumidor", "Manutenção indevida do nome negativado"],
      ctaText: "Consultar exclusão de restrição",
      whatsappMsg: "Olá, Dra. Taís. Meu nome foi negativado indevidamente no SPC/Serasa e preciso retirá-lo e entender meus direitos."
    },
    {
      title: "Práticas Abusivas & Cobranças Indevidas",
      badge: "Defesa do Consumidor",
      description: "Enquadramento contra condutas lesivas de planos de saúde, concessionárias de serviços essenciais (energia/água), telefonia e grandes fornecedores com repetição de indébito.",
      situations: ["Negativa indevida de cobertura de exames/cirurgias", "Cobrança em duplicidade ou taxas ocultas", "Venda casada e cláusulas contratuais abusivas"],
      ctaText: "Consultar abuso de fornecedor",
      whatsappMsg: "Olá, Dra. Taís. Estou enfrentando uma cobrança abusiva / descumprimento contratual por parte de uma empresa."
    }
  ];

  const currentCards = activeTab === 'previdenciario' ? previdenciarioCards : consumidorCards;

  return (
    <section id="especialidades" className="py-20 bg-white border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#FAF8F5] text-stone-700 border border-stone-200">
            <Layers size={13} className="text-[#D97736]" />
            Áreas de Atuação Especializada
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3B3732] tracking-tight">
            Especialização técnica focada nas suas necessidades reais.
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Conhecimento profundo e contínuo nas duas frentes de maior impacto para os direitos do cidadão e do trabalhador brasileiro.
          </p>

          {/* OriginKit / Skiper UI Style Tab Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 shadow-xs">
              <button
                onClick={() => setActiveTab('previdenciario')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'previdenciario'
                    ? 'bg-[#3B3732] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Shield size={16} className={activeTab === 'previdenciario' ? 'text-[#FDBA74]' : 'text-stone-400'} />
                <span>Direito Previdenciário (INSS)</span>
              </button>

              <button
                onClick={() => setActiveTab('consumidor')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'consumidor'
                    ? 'bg-[#3B3732] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Plane size={16} className={activeTab === 'consumidor' ? 'text-[#FDBA74]' : 'text-stone-400'} />
                <span>Direito do Consumidor & Bancário</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bento Grid Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCards.map((card, idx) => (
            <div
              key={card.title}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] border border-stone-200/80 hover:border-stone-300 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#FDBA74]/20 text-[#B45B23] border border-[#FDBA74]/30">
                    {card.badge}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400 font-medium">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-semibold text-[#3B3732] tracking-tight mb-3 group-hover:text-[#25221F]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Key Situations (Bullet list) */}
                <div className="space-y-2 pt-2 pb-6 border-t border-stone-200/60">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Principais Situações:
                  </div>
                  {card.situations.map((sit, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check size={14} className="text-[#D97736] shrink-0 mt-0.5" />
                      <span>{sit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-stone-200/60">
                <a
                  href={getWhatsAppUrl(card.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-800 bg-white border border-stone-200/90 group-hover:bg-[#3B3732] group-hover:text-white group-hover:border-[#3B3732] transition-all shadow-2xs"
                >
                  <span>{card.ctaText}</span>
                  <ArrowUpRight size={14} className="text-stone-400 group-hover:text-[#FDBA74] transition-colors" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#3B3732] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <div className="text-xs uppercase tracking-widest text-[#FDBA74] font-semibold">
              Dúvida sobre outra situação?
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-medium">
              Cada caso possui particularidades que merecem análise individualizada.
            </h4>
            <p className="text-xs text-stone-300">
              Entre em contato direto pelo WhatsApp para um direcionamento preliminar seguro.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá, Dra. Taís. Tenho uma dúvida jurídica e gostaria de saber se meu caso se enquadra na sua área de atuação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF8F5] text-stone-900 text-xs font-semibold hover:bg-[#FDBA74] transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            <span>Tirar Dúvida no WhatsApp</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

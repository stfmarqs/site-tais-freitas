import React, { useState } from 'react';
import { Shield, Plane, ArrowUpRight, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/vcard';

export default function SpecialtiesBento() {
  const [activeTab, setActiveTab] = useState('previdenciario'); // 'previdenciario' | 'consumidor'

  const previdenciarioCards = [
    {
      title: "Planejamento Previdenciário",
      badge: "Prevenção & Economia",
      description: "Estudo analítico e matemático de todo o seu histórico de contribuições. Identificação das regras de transição aplicáveis ao seu histórico após a Reforma.",
      situations: ["Simulação de regras de transição", "Comparação entre as regras de transição aplicáveis", "Correção prévia de divergências no CNIS"],
      ctaText: "Analisar meu histórico",
      whatsappMsg: "Olá, Dra. Taís. Gostaria de realizar um Planejamento Previdenciário para entender as regras de transição aplicáveis ao meu caso."
    },
    {
      title: "Concessão de Aposentadorias",
      badge: "Carro-Chefe",
      description: "Acompanhamento do pedido administrativo e judicial para aposentadoria por idade, tempo de contribuição, aposentadoria da pessoa com deficiência e aposentadoria especial.",
      situations: ["Aposentadoria por Idade Urbana e Rural", "Tempo Especial (Insalubridade/Periculosidade)", "Desbloqueio de pendências no Meu INSS"],
      ctaText: "Verificar requisitos de aposentadoria",
      whatsappMsg: "Olá, Dra. Taís. Gostaria de verificar se já preencho os requisitos para solicitar minha aposentadoria pelo INSS."
    },
    {
      title: "Benefícios por Incapacidade",
      badge: "Saúde & Proteção",
      description: "Amparo legal para trabalhadores acometidos por doenças ou acidentes que os impeçam de exercer sua atividade habitual. Atuação nos casos de laudo pericial desfavorável.",
      situations: ["Auxílio por Incapacidade Temporária (Auxílio-Doença)", "Aposentadoria por Invalidez Permanente", "Auxílio-Acidente e Reabilitação Profissional"],
      ctaText: "Consultar benefício por incapacidade",
      whatsappMsg: "Olá, Dra. Taís. Estou afastado por motivo de saúde e tive meu benefício por incapacidade negado pelo INSS."
    },
    {
      title: "BPC / LOAS (Benefício Assistencial)",
      badge: "Direito Social",
      description: "O BPC/LOAS prevê 1 salário mínimo mensal a pessoas com 65 anos ou mais, ou com deficiência de qualquer idade, em situação de vulnerabilidade, atendidos os requisitos legais — mesmo sem nunca ter contribuído ao INSS.",
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
      description: "Reparação civil por falhas na prestação do serviço de transporte aéreo. O CDC e a Resolução 400 da ANAC preveem deveres de assistência e possibilidade de reparação pelos danos sofridos.",
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
      description: "Pedido de exclusão de restrições de crédito decorrentes de contas já quitadas, fraudes de terceiros ou serviços nunca contratados, com pleito de reparação por danos morais.",
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
    <section id="especialidades" className="py-20 bg-white border-y border-rule" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal-muted">
              01 — Áreas de Atuação
            </span>
            <span className="h-px w-8 bg-terracotta" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-title font-semibold text-charcoal">
            Atuação técnica focada nas suas necessidades reais.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted">
            Conhecimento profundo e contínuo nas duas frentes de maior impacto para os direitos do cidadão e do trabalhador brasileiro.
          </p>

          {/* OriginKit / Skiper UI Style Tab Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-surface bg-cream border border-rule">
              <button
                type="button"
                aria-pressed={activeTab === 'previdenciario'}
                onClick={() => setActiveTab('previdenciario')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-field text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'previdenciario'
                    ? 'bg-charcoal text-white'
                    : 'text-charcoal-muted hover:text-charcoal'
                }`}
              >
                <Shield size={16} className={activeTab === 'previdenciario' ? 'text-peach' : 'text-charcoal-muted'} />
                <span>Direito Previdenciário (INSS)</span>
              </button>

              <button
                type="button"
                aria-pressed={activeTab === 'consumidor'}
                onClick={() => setActiveTab('consumidor')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-field text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === 'consumidor'
                    ? 'bg-charcoal text-white'
                    : 'text-charcoal-muted hover:text-charcoal'
                }`}
              >
                <Plane size={16} className={activeTab === 'consumidor' ? 'text-peach' : 'text-charcoal-muted'} />
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
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-shell bg-cream border border-rule hover:border-rule-strong hover:bg-white transition-colors duration-300"
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-peach/20 text-terracotta-dark border border-peach/30">
                    {card.badge}
                  </span>
                  <span className="text-[11px] font-mono text-charcoal-muted font-medium">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-semibold text-charcoal tracking-tight mb-3 group-hover:text-charcoal-deep">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Key Situations (Bullet list) */}
                <div className="space-y-2 pt-2 pb-6 border-t border-rule">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-muted">
                    Principais Situações:
                  </div>
                  {card.situations.map((sit, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                      <Check size={14} className="text-terracotta shrink-0 mt-0.5" />
                      <span>{sit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-rule">
                <a
                  href={getWhatsAppUrl(card.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-field text-xs font-semibold text-charcoal bg-white border border-rule group-hover:bg-charcoal group-hover:text-white group-hover:border-charcoal transition-colors"
                >
                  <span>{card.ctaText}</span>
                  <ArrowUpRight size={14} className="text-charcoal-muted group-hover:text-peach transition-colors" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-shell bg-charcoal text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <div className="text-xs uppercase tracking-widest text-peach font-semibold">
              Dúvida sobre outra situação?
            </div>
            <h4 className="font-serif text-lg sm:text-xl font-medium">
              Cada caso possui particularidades que merecem análise individualizada.
            </h4>
            <p className="text-xs text-rule-strong">
              Entre em contato direto pelo WhatsApp para um direcionamento preliminar seguro.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá, Dra. Taís. Tenho uma dúvida jurídica e gostaria de saber se meu caso se enquadra na sua área de atuação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-field bg-cream text-charcoal text-xs font-semibold hover:bg-peach transition-colors shrink-0 cursor-pointer"
          >
            <span>Tirar Dúvida no WhatsApp</span>
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}

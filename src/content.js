import {
  Landmark,
  HandHeart,
  Stethoscope,
  HardHat,
  Users,
  Calculator,
  Plane,
  Luggage,
  ShieldAlert,
  FileX,
  UserX,
  Receipt,
} from 'lucide-react';

export const AREAS = [
  {
    id: 'previdenciario',
    titulo: 'Direito Previdenciário',
    cards: [
      {
        titulo: 'Aposentadoria urbana e rural',
        frase: 'Veja se você já pode se aposentar e qual regra paga o melhor valor.',
        assunto: 'aposentadoria',
        icone: Landmark,
      },
      {
        titulo: 'BPC/LOAS',
        frase: 'Descubra se você ou alguém da família pode receber um salário mínimo por mês, mesmo sem ter contribuído.',
        assunto: 'BPC/LOAS',
        icone: HandHeart,
      },
      {
        titulo: 'Auxílio-doença e invalidez',
        frase: 'A doença ou o acidente te afastou do trabalho? Você pode ter direito a um benefício.',
        assunto: 'auxílio-doença e aposentadoria por invalidez',
        icone: Stethoscope,
      },
      {
        titulo: 'Auxílio-acidente',
        frase: 'Ficou com sequela de um acidente? Veja se pode receber uma indenização mensal do INSS.',
        assunto: 'auxílio-acidente',
        icone: HardHat,
      },
      {
        titulo: 'Pensão por morte',
        frase: 'Perdeu alguém da família? Veja se você tem direito à pensão.',
        assunto: 'pensão por morte',
        icone: Users,
      },
      {
        titulo: 'Revisão de benefício',
        frase: 'Seu benefício pode ter sido calculado errado. Peça a revisão e recupere a diferença.',
        assunto: 'revisão de benefício',
        icone: Calculator,
      },
    ],
  },
  {
    id: 'consumidor',
    titulo: 'Direito do Consumidor',
    cards: [
      {
        titulo: 'Voo cancelado ou atrasado',
        frase: 'Voo cancelado, atrasado ou com overbooking? A companhia pode ter que te indenizar.',
        assunto: 'voo cancelado ou atrasado',
        icone: Plane,
      },
      {
        titulo: 'Bagagem extraviada',
        frase: 'Mala perdida, danificada ou entregue com atraso? Você pode ser indenizado.',
        assunto: 'bagagem extraviada',
        icone: Luggage,
      },
      {
        titulo: 'Golpe do Pix e fraude bancária',
        frase: 'Caiu em golpe ou teve o cartão clonado? Em muitos casos o banco tem que devolver o dinheiro.',
        assunto: 'golpe do Pix e fraude bancária',
        icone: ShieldAlert,
      },
      {
        titulo: 'Empréstimo não contratado',
        frase: 'Apareceu empréstimo ou desconto no benefício que você não pediu? Dá para cancelar e pedir o dinheiro de volta.',
        assunto: 'empréstimo não contratado',
        icone: FileX,
      },
      {
        titulo: 'Nome negativado',
        frase: 'Seu nome foi para o SPC ou Serasa sem motivo? Limpe seu nome e peça indenização.',
        assunto: 'nome negativado',
        icone: UserX,
      },
      {
        titulo: 'Cobrança indevida e plano de saúde',
        frase: 'Cobrança que você não reconhece ou plano negando cobertura? Veja o que fazer.',
        assunto: 'cobrança indevida e plano de saúde',
        icone: Receipt,
      },
    ],
  },
];

export const DIFERENCIAIS = [
  {
    titulo: 'On-line e presencial',
    texto: 'Atendo por videochamada em todo o Brasil e presencialmente em Cuiabá.',
  },
  {
    titulo: 'Direto comigo',
    texto: 'Você fala com a advogada pelo WhatsApp.',
  },
  {
    titulo: 'Você acompanha tudo',
    texto: 'Aviso cada movimentação do seu caso.',
  },
  {
    titulo: 'Tudo pelo celular',
    texto: 'Documentos e assinatura do contrato sem sair de casa.',
  },
];

export const MENSAGEM_CONTATO = 'Olá, Dra. Taís! Vim pelo site e gostaria de falar sobre o meu caso.';

export function mensagemSaibaMais(assunto) {
  return `Olá, Dra. Taís! Vim pelo site e quero saber mais sobre ${assunto}.`;
}

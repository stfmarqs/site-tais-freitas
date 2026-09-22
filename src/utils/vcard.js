/**
 * vCard generation utility for Dra. Taís Freitas
 */
export function generateVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Freitas;Taís;;Dra.;
FN:Dra. Taís Freitas
ORG:Dra. Taís Freitas Advocacia
TITLE:Advogada | OAB/MT 23.396
TEL;TYPE=CELL,VOICE,pref:+5565993568303
EMAIL:contato@indenizacaocerta.com.br
X-SOCIALPROFILE;type=instagram:https://instagram.com/adv_taisdepaula
NOTE:Advogada. Atuação em Direito Previdenciário e Direito do Consumidor. OAB/MT 23.396.
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Dra_Tais_Freitas_Advocacia.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export const CONTACT_INFO = {
  name: "Dra. Taís Freitas",
  oab: "OAB/MT 23.396",
  phoneDisplay: "(65) 9 9356-8303",
  phoneRaw: "5565993568303",
  email: "contato@indenizacaocerta.com.br",
  instagram: "@adv_taisdepaula",
  instagramUrl: "https://www.instagram.com/adv_taisdepaula",
  whatsappBaseUrl: "https://wa.me/5565993568303",
  location: "Cuiabá - MT • Atendimento em todo o Brasil",
};

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message || "Olá, Dra. Taís Freitas. Gostaria de uma orientação jurídica preliminar sobre o meu caso.");
  return `${CONTACT_INFO.whatsappBaseUrl}?text=${encoded}`;
}

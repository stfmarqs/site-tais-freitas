import React, { Suspense, lazy, useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SpecialtiesBento from './components/SpecialtiesBento';
import IntakeDiagnostic from './components/IntakeDiagnostic';
import ProcessVisualLaw from './components/ProcessVisualLaw';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FaixaAreas from './components/FaixaAreas';

// O modal arrasta a biblioteca de QR Code junto. Como ele só abre por ação do
// usuário, fica fora do bundle inicial — o que o visitante baixa para ler a
// página não inclui código de gerar QR.
const DigitalCardModal = lazy(() => import('./components/DigitalCardModal'));

export default function App() {
  const [cartaoAberto, setCartaoAberto] = useState(false);
  // Uma vez montado, o modal permanece: é o que preserva a animação de saída.
  const [cartaoMontado, setCartaoMontado] = useState(false);

  const abrirCartao = useCallback(() => {
    setCartaoMontado(true);
    setCartaoAberto(true);
  }, []);

  const fecharCartao = useCallback(() => setCartaoAberto(false), []);

  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-charcoal">
      <Header onOpenCardModal={abrirCartao} />

      <main className="flex-1">
        <Hero onOpenCardModal={abrirCartao} />
        <SpecialtiesBento />
        <FaixaAreas />
        <IntakeDiagnostic />
        <ProcessVisualLaw />
        <AboutSection onOpenCardModal={abrirCartao} />
        <FaqSection />
      </main>

      <Footer onOpenCardModal={abrirCartao} />

      {cartaoMontado && (
        <Suspense fallback={null}>
          <DigitalCardModal isOpen={cartaoAberto} onClose={fecharCartao} />
        </Suspense>
      )}

      <FloatingWhatsApp />
    </div>
  );
}

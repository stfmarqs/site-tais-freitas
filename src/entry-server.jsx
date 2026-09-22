import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/**
 * Entrada usada só no build, por scripts/prerender.mjs.
 * Não importa index.css de propósito: o CSS é responsabilidade do build cliente.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

const arvore = (
  <StrictMode>
    <App />
  </StrictMode>
)

// O build pré-renderiza o HTML (scripts/prerender.mjs), então em produção o
// #root já vem preenchido e só precisa ser hidratado. Em `vite dev` vem vazio.
if (container.hasChildNodes()) {
  hydrateRoot(container, arvore)
} else {
  createRoot(container).render(arvore)
}

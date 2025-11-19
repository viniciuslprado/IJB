import React from 'react'
import { theme } from '../styles/theme'

const Contato: React.FC = () => {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ color: theme.colors.primary }}>Contato</h1>
      <p style={{ color: theme.colors.text }}>Entre em contato conosco para parcerias, doações e informações.</p>
      <address style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft }}>
        <div>Instituto João de Barros — Franca, SP</div>
        <div>Email: contato@joaodebarros.org.br</div>
      </address>
    </main>
  )
}

export default Contato

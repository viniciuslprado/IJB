import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BotaoCTA from './ui/BotaoCTA'
import { theme } from '../styles/theme'
import DonationModal from './ui/DonationModal'

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: 16,
  alignItems: 'center'
}

const headerStyle: React.CSSProperties = {
  background: '#fff',
  borderBottom: `1px solid rgba(0,0,0,0.06)`,
  padding: '12px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 50
}

export const Header: React.FC = () => {
  const [donateOpen, setDonateOpen] = useState(false)

  return (
    <div>
      <header style={headerStyle}>
        <div style={{ maxWidth: 1280, width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: theme.colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ícone de passarinho">
                <title>Passarinho</title>
                <path d="M22 4.01c-0.65 0.29-1.35 0.48-2.09 0.56a3.66 3.66 0 0 0 1.6-2.02 7.42 7.42 0 0 1-2.33.89 3.7 3.7 0 0 0-6.3 3.37A10.5 10.5 0 0 1 3.16 3.2a3.7 3.7 0 0 0 1.14 4.95 3.66 3.66 0 0 1-1.68-.46v.05a3.7 3.7 0 0 0 2.97 3.63 3.7 3.7 0 0 1-1.67.06 3.71 3.71 0 0 0 3.46 2.57A7.44 7.44 0 0 1 2 19.54 10.5 10.5 0 0 0 7.29 21c6.14 0 9.5-5.08 9.5-9.49 0-.14-.01-.27-.02-.4A6.78 6.78 0 0 0 22 4.01z" fill="#fff"/>
              </svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ fontWeight: 800, color: theme.colors.primary }}>Instituto João de Barros</div>
              </div>
              <div style={{ fontSize: 12, color: theme.colors.muted }}>Franca — SP</div>
            </div>
          </div>

          <nav style={navStyle} aria-label="main navigation">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/ajudar">Como Ajudar</Link>
            <Link to="/contato">Contato</Link>
            <div style={{ marginLeft: 8 }}>
              {/* Botão sempre visível e em destaque */}
              <BotaoCTA onClick={() => setDonateOpen(true)}>DOE AGORA</BotaoCTA>
            </div>
          </nav>
        </div>
      </header>
      <DonationModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </div>
  )
}

export default Header

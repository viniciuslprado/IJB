import React from 'react'
import { theme } from '../styles/theme'
import { Link } from 'react-router-dom'

const footerStyle: React.CSSProperties = {
  background: '#fff',
  borderTop: `1px solid rgba(0,0,0,0.06)`,
  padding: '28px 20px',
  marginTop: 40
}

const colStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, alignItems: 'start' }}>
        <div style={colStyle}>
          <div style={{ fontWeight: 800, color: theme.colors.primary }}>Instituto João de Barros</div>
          <div style={{ color: theme.colors.text, fontSize: 14 }}>Franca — SP</div>
        </div>

        <div style={colStyle}>
          <div style={{ fontWeight: 700, color: theme.colors.primary }}>Institucional</div>
          <Link to="/" style={{ color: theme.colors.text, textDecoration: 'none' }}>Home</Link>
          <Link to="/sobre" style={{ color: theme.colors.text, textDecoration: 'none' }}>Quem Somos</Link>
          <Link to="/projetos" style={{ color: theme.colors.text, textDecoration: 'none' }}>Projetos</Link>
        </div>

        <div style={colStyle}>
          <div style={{ fontWeight: 700, color: theme.colors.primary }}>Apoie</div>
          <Link to="/ajudar" style={{ color: theme.colors.text, textDecoration: 'none' }}>Como Ajudar</Link>
          <Link to="/ajudar?type=dinheiro#doacoes" style={{ color: theme.colors.text, textDecoration: 'none' }}>Doe Agora</Link>
          <Link to="/ajudar?type=voluntario#doacoes" style={{ color: theme.colors.text, textDecoration: 'none' }}>Seja Voluntário</Link>
        </div>

        <div style={colStyle}>
          <div style={{ fontWeight: 700, color: theme.colors.primary }}>Contato</div>
          <div style={{ color: theme.colors.text }}>Telefone: (16) 99181-1811</div>
          <div style={{ color: theme.colors.text }}>Email: <a href="mailto:ijbfranca@gmail.com" style={{ color: theme.colors.primary, textDecoration: 'none' }}>ijbfranca@gmail.com</a></div>
          <div style={{ marginTop: 6 }}>
            <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" style={{ color: theme.colors.primary, textDecoration: 'none' }}>Instagram: @instituto_joaodebarro_franca</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

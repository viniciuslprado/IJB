import React from 'react'
import { theme } from '../styles/theme'
import { Link } from 'react-router-dom'

const footerStyle: React.CSSProperties = {
  background: theme.colors.primaryDark || theme.colors.primary,
  color: '#fff',
  padding: '40px 20px',
  marginTop: 60
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
          <div style={{ fontWeight: 800, color: '#fff' }}>Instituto João de Barros</div>
          <div style={{ color: '#fff', fontSize: 14 }}>Franca — SP</div>
        </div>

        <div style={colStyle}>
          <div style={{ fontWeight: 700, color: '#fff' }}>Institucional</div>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/sobre" style={{ color: '#fff', textDecoration: 'none' }}>Quem Somos</Link>
          <Link to="/projetos" style={{ color: '#fff', textDecoration: 'none' }}>Projetos</Link>
        </div>

        <div style={colStyle}>
          <div style={{ fontWeight: 700, color: '#fff' }}>Apoie</div>
          <Link to="/ajudar" style={{ color: '#fff', textDecoration: 'none' }}>Como Ajudar</Link>
          <Link to="/ajudar?type=dinheiro#doacoes" style={{ color: '#fff', textDecoration: 'none' }}>Doe Agora</Link>
          <Link to="/ajudar?type=voluntario#doacoes" style={{ color: '#fff', textDecoration: 'none' }}>Seja Voluntário</Link>
        </div>

        <div style={colStyle}>
          <div style={{ fontWeight: 700, color: '#fff' }}>Contato</div>
          <div style={{ color: '#fff' }}>Telefone: (16) 99181-1811</div>
          <div style={{ color: '#fff' }}>Email: <a href="mailto:ijbfranca@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>ijbfranca@gmail.com</a></div>
          <div style={{ marginTop: 6 }}>
            <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Instagram: @instituto_joaodebarro_franca</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

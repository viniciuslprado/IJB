import React from 'react'
import { theme } from '../styles/theme'
import { Link } from 'react-router-dom'
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

const colStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: theme.colors.primary,
      color: '#fff',
      marginTop: 60,
      paddingTop: 60,
      paddingBottom: 20,
      borderTop: `4px solid ${theme.colors.accent}`
    }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
            <FaPhone size={14} /> <span>(16) 99181-1811</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
            <FaEnvelope size={14} /> 
            <a href="mailto:ijbfranca@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>ijbfranca@gmail.com</a>
          </div>

          <div style={{ marginTop: 12 }}>
            <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <FaInstagram size={18} /> 
              <span>@instituto_joaodebarro_franca</span>
            </a>
          </div>
        </div>
      </div>
      {/* RODAPÉ INFERIOR: Copyright & CNPJ */}
      <div style={{ 
        maxWidth: 1100, 
        margin: '40px auto 0', 
        padding: '20px 20px 0', 
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        fontSize: 13,
        color: 'rgba(255,255,255,0.5)'
      }}>
        <div>
          © {new Date().getFullYear()} Instituto João de Barros. Todos os direitos reservados.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>CNPJ:</span>
          <span style={{ color: '#fff', fontFamily: 'monospace', fontSize: 14 }}>26.345.732/0001-07</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

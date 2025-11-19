import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  open: boolean
  onClose: () => void
}

export const DonationModal: React.FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate()

  if (!open) return null

  const backdropStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }

  const boxStyle: React.CSSProperties = {
    background: '#fff',
    padding: 20,
    borderRadius: 12,
    maxWidth: 480,
    width: '90%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  }

  return (
    <div style={backdropStyle} role="dialog" aria-modal="true">
      <div style={boxStyle}>
        <h2 style={{ marginTop: 0 }}>Como você quer ajudar?</h2>
        <p>Escolha uma opção abaixo para continuar com a doação.</p>
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <button
            onClick={() => {
              onClose()
              navigate('/ajudar?type=dinheiro')
            }}
            style={{ flex: 1, padding: '10px 12px', borderRadius: 8, background: '#fbc046', border: 'none', fontWeight: 700 }}
          >
            Doar Dinheiro
          </button>

          <button
            onClick={() => {
              onClose()
              navigate('/ajudar?type=material')
            }}
            style={{ flex: 1, padding: '10px 12px', borderRadius: 8, background: '#e77b5b', border: 'none', color: '#fff', fontWeight: 700 }}
          >
            Doar Materiais
          </button>
        </div>

        <div style={{ marginTop: 18, textAlign: 'right' }}>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#666' }}>Fechar</button>
        </div>
      </div>
    </div>
  )
}

export default DonationModal

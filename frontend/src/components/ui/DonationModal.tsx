import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHandHoldingUsd, FaBoxOpen, FaHandsHelping } from 'react-icons/fa'
import { theme } from '../../styles/theme'

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
    background: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(2px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }

  const boxStyle: React.CSSProperties = {
    background: '#fff',
    padding: 32,
    borderRadius: 16,
    maxWidth: 400,
    width: '90%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    position: 'relative'
  }

  const buttonBaseStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    borderRadius: 10,
    border: 'none',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    transition: 'transform 0.2s'
  }

  return (
    <div style={backdropStyle} role="dialog" aria-modal="true" onClick={onClose}>
      <div style={boxStyle} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginTop: 0, textAlign: 'center', color: theme.colors.primary }}>Como quer ajudar?</h2>
        <p style={{ textAlign: 'center', color: theme.colors.text, marginBottom: 24 }}>
          Escolha uma opção para continuar.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button
            onClick={() => { onClose(); navigate('/ajudar?type=dinheiro') }}
            style={{
              ...buttonBaseStyle,
              background: theme.colors.highlight,
              color: '#000'
            }}
          >
            <FaHandHoldingUsd size={20} />
            Doar Dinheiro
          </button>

          <button
            onClick={() => { onClose(); navigate('/ajudar?type=material') }}
            style={{
              ...buttonBaseStyle,
              background: theme.colors.orangeStrong,
              color: '#fff'
            }}
          >
            <FaBoxOpen size={20} />
            Doar Materiais
          </button>

          <button
            onClick={() => { onClose(); navigate('/ajudar?type=voluntario') }}
            style={{
              ...buttonBaseStyle,
              background: theme.colors.secondary,
              color: '#fff'
            }}
          >
            <FaHandsHelping size={20} />
            Ser Voluntário
          </button>
        </div>

        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: theme.colors.muted,
              fontSize: 14,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default DonationModal

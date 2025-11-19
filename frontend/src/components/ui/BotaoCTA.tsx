import React from 'react'
import { theme } from '../../styles/theme'

type BotaoCTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}

export const BotaoCTA: React.FC<BotaoCTAProps> = ({ children = 'DOE AGORA', ...props }) => {
  return (
    <button
      {...props}
      style={{
        background: theme.colors.highlight || '#fbc046',
        color: '#000',
        border: 'none',
        padding: '10px 18px',
        borderRadius: '10px',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
      }}
    >
      {children}
    </button>
  )
}

export default BotaoCTA

import React, { useState } from 'react'
import { theme } from '../../styles/theme'

type NavButtonProps = {
  ariaLabel: string
  onClick: () => void
  side: 'left' | 'right'
  isMobile: boolean
  children: React.ReactNode
}

const CarouselNavButton: React.FC<NavButtonProps> = ({ ariaLabel, onClick, side, isMobile, children }) => {
  const [focused, setFocused] = useState(false)
  const size = isMobile ? 36 : 44
  const offset = isMobile ? 8 : 16
  const sideKey = side === 'left' ? 'left' : 'right'

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.85)',
    color: theme.colors.primary,
    border: 'none',
    width: size,
    height: size,
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    transition: 'background 0.2s, box-shadow 0.2s',
    outline: focused ? `3px solid ${theme.colors.accent}` : 'none'
  }

  const styleAny: any = { ...baseStyle }
  styleAny[sideKey] = offset

  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      style={styleAny}
      onMouseOver={(e) => (e.currentTarget.style.background = '#fff')}
      onMouseOut={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)')}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </button>
  )
}

export default CarouselNavButton

import React from 'react'
type BotaoCTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode
}

export const BotaoCTA: React.FC<BotaoCTAProps> = ({ children = 'DOE AGORA', className = '', ...props }) => {
  const base = 'bg-highlight text-black font-bold rounded-lg px-4 py-2 shadow-md inline-flex items-center justify-center';
  return (
    <button
      {...props}
      className={`${base} ${className}`}
    >
      {children}
    </button>
  )
}

export default BotaoCTA

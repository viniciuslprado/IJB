import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
}

const variantMap: Record<string, string> = {
  primary: 'bg-highlight text-black hover:brightness-95 shadow-lg rounded-full',
  secondary: 'bg-secondary text-white hover:brightness-95 shadow-lg rounded-full',
  outline: 'bg-transparent border border-current rounded-full',
  ghost: 'bg-transparent',
  success: 'bg-[#25D366] text-white shadow-lg rounded-full'
}

const sizeMap: Record<string, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3'
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', full = false, className = '', children, disabled, ...props }) => {
  const base = 'inline-flex items-center justify-center font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantClass = variantMap[variant] || variantMap.primary
  const sizeClass = sizeMap[size] || sizeMap.md
  const fullClass = full ? 'w-full' : ''
  const disabledClass = disabled ? 'opacity-70 cursor-not-allowed pointer-events-none' : ''

  const finalClass = [base, variantClass, sizeClass, fullClass, disabledClass, className].filter(Boolean).join(' ')

  return (
    <button {...props} disabled={disabled} className={finalClass}>
      {children}
    </button>
  )
}

export default Button

import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const base = 'w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-base focus:outline-none mt-2'
  const focus = ' focus:ring-2 focus:ring-[#532b2a] focus:ring-offset-1'
  return <input {...props} className={`${base}${focus} ${className}`.trim()} />
}

export default Input

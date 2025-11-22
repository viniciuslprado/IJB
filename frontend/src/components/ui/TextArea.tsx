import React from 'react'

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
}

const TextArea: React.FC<TextAreaProps> = ({ className = '', ...props }) => {
  const base = 'w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-base focus:outline-none mt-2 resize-y'
  const focus = ' focus:ring-2 focus:ring-[#532b2a] focus:ring-offset-1'
  return <textarea {...props} className={`${base}${focus} ${className}`.trim()} />
}

export default TextArea

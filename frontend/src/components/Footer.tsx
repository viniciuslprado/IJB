import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#532b2a] text-white mt-12 border-t-4 border-[#be5838]" aria-label="rodape">
      <div className="max-w-6xl mx-auto px-5 py-4">
        <div className="flex flex-row justify-between items-center text-sm">
          <span className="text-white">© {new Date().getFullYear()} Inst. João de Barros</span>
          <span className="font-mono text-white">CNPJ: 26.345.732/0001-07</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

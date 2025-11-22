import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#532b2a] text-white mt-12 border-t-4 border-[#be5838]" aria-labelledby="footer-heading">

      {/* Main columns - hidden on mobile */}
      <div className="hidden md:block max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-4 gap-8 text-left">

          {/* Identity */}
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                {/* placeholder bird SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12c2-1 4-2 6-2 1-2 4-4 8-4 0 0-3 4-1 6 2 2 6 1 6 1s-5 3-9 3c-4 0-8-3-10-4z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl leading-tight text-[#fbc046]">Instituto<br/>João de Barros</span>
                <p className="text-sm opacity-70 pl-1">Franca — SP</p>
              </div>
            </div>
          </div>

          {/* Institutional */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#fbc046] font-bold uppercase text-sm tracking-wider mb-1">Institucional</h4>
            <Link to="/" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Home</Link>
            <Link to="/sobre" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Quem Somos</Link>
            <Link to="/projetos" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Projetos</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#fbc046] font-bold uppercase text-sm tracking-wider mb-1">Apoie</h4>
            <Link to="/ajudar" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Como Ajudar</Link>
            <Link to="/ajudar?type=dinheiro" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Doe Agora</Link>
            <Link to="/ajudar?type=voluntario" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Seja Voluntário</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#fbc046] font-bold uppercase text-sm tracking-wider mb-1">Contato</h4>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaPhone className="text-[#fbc046]" />
              import React from 'react'

              const Footer: React.FC = () => {
                return (
                  <footer className="bg-[#532b2a] text-white mt-12 border-t-4 border-[#be5838]" aria-label="rodape">
                    <div className="w-full">
                      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-row justify-between items-center text-sm">
                        <span className="text-white">© {new Date().getFullYear()} Inst. João de Barros</span>
                        <span className="font-mono text-white">CNPJ: 26.345.732/0001-07</span>
                      </div>
                    </div>
                  </footer>
                )
              }

              export default Footer
      <div className="w-full border-t border-white/10">

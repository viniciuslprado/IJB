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
              <span>(16) 99181-1811</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaEnvelope className="text-[#fbc046]" />
              <a href="mailto:ijbfranca@gmail.com" className="hover:text-white">ijbfranca@gmail.com</a>
            </div>
            <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors w-fit text-white">
              <FaInstagram className="text-[#fbc046]" />
              <span>@instituto_...</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar - always visible. Mobile: stacked center; Desktop: single row justify-between */}
      <div className="w-full border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-sm gap-2 text-white/70">
          <span className="block">© {new Date().getFullYear()} Inst. João de Barros</span>
          <span className="block font-mono">CNPJ: 26.345.732/0001-07</span>
        </div>
      </div>

    </footer>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#532b2a] text-white mt-0 md:mt-16 border-t-4 border-[#be5838]">
      
      {/* ÁREA DESKTOP */}
      <div className="hidden md:block max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-4 gap-8 text-left">
          
          {/* Coluna 1: Marca */}
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.01c-0.65 0.29-1.35 0.48-2.09 0.56a3.66 3.66 0 0 0 1.6-2.02 7.42 7.42 0 0 1-2.33.89 3.7 3.7 0 0 0-6.3 3.37A10.5 10.5 0 0 1 3.16 3.2a3.7 3.7 0 0 0 1.14 4.95 3.66 3.66 0 0 1-1.68-.46v.05a3.7 3.7 0 0 0 2.97 3.63 3.7 3.7 0 0 1-1.67.06 3.71 3.71 0 0 0 3.46 2.57A7.44 7.44 0 0 1 2 19.54 10.5 10.5 0 0 0 7.29 21c6.14 0 9.5-5.08 9.5-9.49 0-.14-.01-.27-.02-.4A6.78 6.78 0 0 0 22 4.01z" fill="#fff"/></svg>
              </div>
              <span className="font-extrabold text-lg leading-tight text-[#fbc046]">Instituto<br/>João de Barros</span>
            </div>
            <p className="text-sm text-white/70 pl-1">Franca — SP</p>
          </div>

          {/* Coluna 2: Institucional */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#fbc046] font-bold uppercase text-sm tracking-wide mb-1">Institucional</h4>
            <Link to="/" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Home</Link>
            <Link to="/sobre" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Quem Somos</Link>
            <Link to="/projetos" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Projetos</Link>
          </div>

          {/* Coluna 3: Apoie */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#fbc046] font-bold uppercase text-sm tracking-wide mb-1">Apoie</h4>
            <Link to="/ajudar" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Como Ajudar</Link>
            <Link to="/ajudar?type=dinheiro" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Doe Agora</Link>
            <Link to="/ajudar?type=voluntario" className="text-white/80 hover:text-white hover:underline text-sm transition-colors">Seja Voluntário</Link>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#fbc046] font-bold uppercase text-sm tracking-wide mb-1">Contato</h4>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaPhone className="text-[#fbc046]" /> 
              <span>(16) 99181-1811</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaEnvelope className="text-[#fbc046]" /> 
              <a href="mailto:ijbfranca@gmail.com" className="text-white/80 hover:text-white">ijbfranca@gmail.com</a>
            </div>
            <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 mt-3 bg-white/10 px-4 py-2 rounded-full text-sm text-white hover:bg-white/20 transition-colors w-fit">
              <FaInstagram className="text-[#fbc046]" /> 
              <span>@instituto...</span>
            </a>
          </div>

        </div>

        {/* Rodapé Desktop */}
        <div className="w-full border-t border-white/10 mt-12 pt-6 flex flex-row justify-between items-center text-sm text-white/60">
          <span>© {new Date().getFullYear()} Inst. João de Barros</span>
          <span className="font-mono">CNPJ: 26.345.732/0001-07</span>
        </div>
      </div>

      {/* ÁREA MOBILE */}
      <div className="md:hidden flex flex-col items-center justify-center py-8 gap-2 text-center">
        <span className="text-sm text-white/90">© {new Date().getFullYear()} Inst. João de Barros</span>
        <span className="text-xs font-mono text-white/60 bg-black/20 px-3 py-1 rounded">
          CNPJ: 26.345.732/0001-07
        </span>
      </div>

    </footer>
  )
}

export default Footer
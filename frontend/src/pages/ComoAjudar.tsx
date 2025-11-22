import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { useSearchParams } from 'react-router-dom'
import { theme } from '../styles/theme'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import TextArea from '../components/ui/TextArea'
import { FaHandHoldingUsd, FaTools, FaHandsHelping, FaCopy, FaCheckCircle, FaWhatsapp, FaUniversity } from 'react-icons/fa'

// --- Copy Button Helper (replaces alert-based copy buttons) ---
const CopyButton: React.FC<{ textToCopy: string, label?: string }> = ({ textToCopy, label = 'Copiar' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        marginLeft: 8,
        padding: '4px 10px',
        borderRadius: 6,
        border: 'none',
        background: copied ? '#4CAF50' : '#eee',
        color: copied ? '#fff' : theme.colors.text,
        cursor: 'pointer',
        fontWeight: 700,
        fontSize: 12,
        transition: 'background 0.2s'
      }}
    >
      {copied ? 'Copiado!' : label}
    </button>
  )
}

// --- Formulários ---

const MaterialForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [materials, setMaterials] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Configure as suas chaves do EmailJS ou variáveis de ambiente aqui
    const serviceId = 'SEU_SERVICE_ID'
    const templateId = 'SEU_TEMPLATE_ID'
    const publicKey = 'SUA_PUBLIC_KEY'

    const templateParams = { from_name: name, contact_info: contact, message: materials, type: 'Material' }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success')
        setTimeout(() => {
          if (onClose) onClose()
          setStatus('idle')
        }, 3000)
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <FaCheckCircle size={50} color={theme.colors.secondary} />
        <h3 style={{ color: theme.colors.primary }}>Obrigado pela doação!</h3>
        <p>Entraremos em contacto em breve para combinar a recolha.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
      <div>
        <label style={{ fontWeight: 600, color: theme.colors.text }}>Nome completo</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Seu nome" disabled={status === 'sending'} />
      </div>
      <div>
        <label style={{ fontWeight: 600, color: theme.colors.text }}>Contato</label>
        <Input value={contact} onChange={(e) => setContact(e.target.value)} required placeholder="WhatsApp ou Email" disabled={status === 'sending'} />
      </div>
      <div>
        <label style={{ fontWeight: 600, color: theme.colors.text }}>O que gostaria de doar?</label>
        <TextArea value={materials} onChange={(e) => setMaterials(e.target.value)} required placeholder="Ex: 5 sacos de cimento, sobras de piso..." disabled={status === 'sending'} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 8 }}>
        <Button variant="ghost" className="text-muted" type="button" onClick={onClose}>Cancelar</Button>
        <Button className="px-6 py-2 bg-orange-strong text-white" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Confirmar Doação'}
        </Button>
      </div>
    </form>
  )
}

const VoluntarioForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [skills, setSkills] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const serviceId = 'SEU_SERVICE_ID'
    const templateId = 'SEU_TEMPLATE_ID'
    const publicKey = 'SUA_PUBLIC_KEY'
    const templateParams = { from_name: name, contact_info: contact, message: skills, type: 'Voluntário' }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success')
        setTimeout(() => {
          if (onClose) onClose()
          setStatus('idle')
        }, 3000)
      })
      .catch((err) => {
        console.error(err)
        setStatus('error')
      })
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: 40 }}>
        <FaCheckCircle size={50} color={theme.colors.secondary} />
        <h3 style={{ color: theme.colors.primary }}>Bem-vindo à equipe!</h3>
        <p>Obrigado pelo interesse. Entraremos em contacto em breve.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
      <div>
        <label style={{ fontWeight: 600, color: theme.colors.text }}>Nome completo</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Seu nome" disabled={status === 'sending'} />
      </div>
      <div>
        <label style={{ fontWeight: 600, color: theme.colors.text }}>Contato</label>
        <Input value={contact} onChange={(e) => setContact(e.target.value)} required placeholder="WhatsApp ou Email" disabled={status === 'sending'} />
      </div>
      <div>
        <label style={{ fontWeight: 600, color: theme.colors.text }}>Como pode ajudar?</label>
        <TextArea value={skills} onChange={(e) => setSkills(e.target.value)} required placeholder="Ex: Sou pedreiro, pintor, engenheiro, posso ajudar na limpeza..." disabled={status === 'sending'} />
      </div>
      
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 8 }}>
        <Button variant="ghost" className="text-muted" type="button" onClick={onClose}>Cancelar</Button>
        <Button className="px-6 py-2 bg-secondary text-white" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar Cadastro'}
        </Button>
      </div>
    </form>
  )
}

// --- Página Principal ---

const ComoAjudar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'financeiro' | 'material' | 'voluntario' | null>(null)
  const [searchParams] = useSearchParams()
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const t = searchParams.get('type')
    if (t) {
      if (t.includes('volunt')) setActiveSection('voluntario')
      else if (t.includes('mat')) setActiveSection('material')
      else if (t.includes('din') || t.includes('fin')) setActiveSection('financeiro')
      
      setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300)
    }
  }, [searchParams])

  const pixKey = "26.345.732/0001-07"

  // Note: copy buttons now use `CopyButton` which shows temporary feedback instead of alert()

  return (
    <>
      <Helmet>
        <title>Como Ajudar | Instituto João de Barros</title>
      </Helmet>
      <main className="main-container" style={{ maxWidth: 900, margin: '0 auto', minHeight: '80vh' }}>
        
        <section style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 className="main-hero-title" style={{ color: theme.colors.primary, marginBottom: 16 }}>Faça parte desta construção</h1>
          <p style={{ maxWidth: 600, margin: '0 auto', color: theme.colors.text, fontSize: '1.1rem' }}>
            Escolha como prefere contribuir. Cada tijolo, cada real e cada hora de trabalho contam.
          </p>
        </section>

        {/* CARTÕES DE SELEÇÃO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Financeiro */}
          <div
            onClick={() => setActiveSection(activeSection === 'financeiro' ? null : 'financeiro')}
            className={`hover-card p-6 rounded-2xl cursor-pointer text-center shadow-md transform transition ${activeSection === 'financeiro' ? 'bg-yellow-50 border-4 border-[#fbc046]' : 'bg-white'}`}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-highlight text-[#532b2a]">
              <FaHandHoldingUsd size={22} />
            </div>
            <h3 className="m-0 text-lg text-[#532b2a] font-bold">Doar Dinheiro</h3>
            <p className="text-sm text-gray-600 mt-2">Via Pix ou Transferência</p>
          </div>

          {/* 2. Material */}
          <div
            onClick={() => setActiveSection(activeSection === 'material' ? null : 'material')}
            className={`hover-card p-6 rounded-2xl cursor-pointer text-center shadow-md transform transition ${activeSection === 'material' ? 'bg-orange-50 border-4 border-[#e96b46]' : 'bg-white'}`}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-orange-strong text-white">
              <FaTools size={22} />
            </div>
            <h3 className="m-0 text-lg text-[#532b2a] font-bold">Doar Materiais</h3>
            <p className="text-sm text-gray-600 mt-2">Cimento, pisos e itens de obra</p>
          </div>

          {/* 3. Voluntário */}
          <div
            onClick={() => setActiveSection(activeSection === 'voluntario' ? null : 'voluntario')}
            className={`hover-card p-6 rounded-2xl cursor-pointer text-center shadow-md transform transition ${activeSection === 'voluntario' ? 'bg-green-50 border-4 border-[#678b64]' : 'bg-white'}`}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-secondary text-white">
              <FaHandsHelping size={22} />
            </div>
            <h3 className="m-0 text-lg text-[#532b2a] font-bold">Ser Voluntário</h3>
            <p className="text-sm text-gray-600 mt-2">Doe o seu tempo e talento</p>
          </div>
        </div>

        {/* ÁREA DE CONTEÚDO EXPANDIDO */}
        <div ref={contentRef} style={{ marginTop: 40 }}>
          
          {activeSection === 'financeiro' && (
            <div className="animate-fade-up bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-center text-2xl font-bold text-[#532b2a]">Dados para Doação</h2>
              <p className="text-center text-sm text-gray-600 mb-6">Use a chave Pix (CNPJ) ou os dados da conta bancária.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Opção PIX */}
                <div className="bg-gray-50 p-5 rounded-lg border border-yellow-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-highlight text-[#532b2a]"><FaCopy size={16} /></div>
                    <h3 className="text-lg font-semibold text-[#532b2a]">Chave Pix (CNPJ)</h3>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-md border border-gray-100">
                    <code className="flex-1 text-lg font-extrabold text-gray-800">{pixKey}</code>
                    <CopyButton textToCopy={pixKey} label="Copiar" />
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Titular: Instituto João de Barros</p>
                </div>

                {/* Opção Transferência */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#532b2a] text-white"><FaUniversity size={16} /></div>
                    <h3 className="text-lg font-semibold text-[#532b2a]">Transferência (TED/DOC)</h3>
                  </div>

                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-gray-100 pb-2"> 
                      <span>Banco Sicoob (756)</span>
                      <CopyButton textToCopy={'756'} label="Copiar" />
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-100 pb-2"> 
                      <span>Agência: <strong>4321</strong></span>
                      <CopyButton textToCopy={'4321'} label="Copiar" />
                    </li>
                    <li className="flex justify-between items-center"> 
                      <span>Conta: <strong>2005247-2</strong></span>
                      <CopyButton textToCopy={'2005247-2'} label="Copiar" />
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

          {activeSection === 'material' && (
            <div className="animate-fade-up bg-white p-8 rounded-2xl border-t-4 border-[#e96b46] shadow-lg">
              <h2 className="text-2xl font-bold text-[#e96b46]">O que precisamos?</h2>
              <p className="mb-6 text-gray-700">No momento, nossas maiores necessidades são <strong>cimento, areia e revestimentos</strong>. Se tiver sobras de obra em bom estado, também aceitamos!</p>
              <MaterialForm onClose={() => setActiveSection(null)} />
            </div>
          )}

          {activeSection === 'voluntario' && (
            <div className="animate-fade-up bg-white p-8 rounded-2xl border-t-4 border-[#678b64] shadow-lg">
              <h2 className="text-2xl font-bold text-[#678b64]">Cadastro de Voluntário</h2>
              <p className="mb-6 text-gray-700">Precisamos de todo o tipo de ajuda: desde mão de obra especializada (engenharia, pedreiro) até apoio em eventos e transporte.</p>
              <VoluntarioForm onClose={() => setActiveSection(null)} />
            </div>
          )}

        </div>

        {/* Contato Extra */}
        <div style={{ marginTop: 60, textAlign: 'center', borderTop: '1px solid #eee', paddingTop: 40 }}>
          <p style={{ marginBottom: 16 }}>Dúvidas? Fale conosco diretamente.</p>
          <a href="https://wa.me/5516991811811" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#25D366] text-white">
              <FaWhatsapp size={18} /> WhatsApp Oficial
            </Button>
          </a>
        </div>

      </main>
    </>
  )
}

export default ComoAjudar

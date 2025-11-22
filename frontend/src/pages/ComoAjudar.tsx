import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { useSearchParams } from 'react-router-dom'
import { theme } from '../styles/theme'
import { FaHandHoldingUsd, FaTools, FaHandsHelping, FaCopy, FaCheckCircle, FaWhatsapp, FaUniversity } from 'react-icons/fa'

// --- Subcomponentes de UI (Inputs) ---
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    style={{
      width: '100%',
      padding: '12px 16px',
      borderRadius: 8,
      border: '1px solid #ddd',
      fontSize: '16px',
      outlineColor: theme.colors.primary,
      marginTop: 6
    }}
  />
)

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    {...props}
    style={{
      width: '100%',
      padding: '12px 16px',
      borderRadius: 8,
      border: '1px solid #ddd',
      fontSize: '16px',
      outlineColor: theme.colors.primary,
      minHeight: 100,
      marginTop: 6,
      resize: 'vertical'
    }}
  />
)

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
        <button type="button" onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: theme.colors.muted }}>Cancelar</button>
        <button type="submit" disabled={status === 'sending'} style={{ padding: '10px 24px', borderRadius: 8, background: theme.colors.orangeStrong, color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}>
          {status === 'sending' ? 'Enviando...' : 'Confirmar Doação'}
        </button>
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
        <button type="button" onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: theme.colors.muted }}>Cancelar</button>
        <button type="submit" disabled={status === 'sending'} style={{ padding: '10px 24px', borderRadius: 8, background: theme.colors.secondary, color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}>
          {status === 'sending' ? 'Enviando...' : 'Enviar Cadastro'}
        </button>
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
      <main style={{ padding: '40px 20px', maxWidth: 900, margin: '0 auto', minHeight: '80vh' }}>

        <section style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ color: theme.colors.primary, fontSize: '2.5rem', marginBottom: 16 }}>Faça parte desta construção</h1>
          <p style={{ maxWidth: 600, margin: '0 auto', color: theme.colors.text, fontSize: '1.1rem' }}>
            Escolha como prefere contribuir. Cada tijolo, cada real e cada hora de trabalho contam.
          </p>
        </section>

        {/* CARTÕES DE SELEÇÃO */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>

          {/* 1. Financeiro */}
          <div
            onClick={() => setActiveSection(activeSection === 'financeiro' ? null : 'financeiro')}
            className="hover-card"
            style={{
              background: activeSection === 'financeiro' ? '#FFF9C4' : '#fff',
              border: `2px solid ${activeSection === 'financeiro' ? theme.colors.highlight : 'transparent'}`,
              padding: 24, borderRadius: 16, cursor: 'pointer', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <FaHandHoldingUsd size={32} color={theme.colors.highlight} style={{ marginBottom: 12 }} />
            <h3 style={{ margin: 0, color: theme.colors.primary }}>Doar Dinheiro</h3>
            <p style={{ fontSize: 14, color: theme.colors.text }}>Via Pix ou Transferência</p>
          </div>

          {/* 2. Material */}
          <div
            onClick={() => setActiveSection(activeSection === 'material' ? null : 'material')}
            className="hover-card"
            style={{
              background: activeSection === 'material' ? '#FFE0B2' : '#fff',
              border: `2px solid ${activeSection === 'material' ? theme.colors.orangeStrong : 'transparent'}`,
              padding: 24, borderRadius: 16, cursor: 'pointer', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <FaTools size={32} color={theme.colors.orangeStrong} style={{ marginBottom: 12 }} />
            <h3 style={{ margin: 0, color: theme.colors.primary }}>Doar Materiais</h3>
            <p style={{ fontSize: 14, color: theme.colors.text }}>Cimento, pisos e itens de obra</p>
          </div>

          {/* 3. Voluntário */}
          <div
            onClick={() => setActiveSection(activeSection === 'voluntario' ? null : 'voluntario')}
            className="hover-card"
            style={{
              background: activeSection === 'voluntario' ? '#C8E6C9' : '#fff',
              border: `2px solid ${activeSection === 'voluntario' ? theme.colors.secondary : 'transparent'}`,
              padding: 24, borderRadius: 16, cursor: 'pointer', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
          >
            <FaHandsHelping size={32} color={theme.colors.secondary} style={{ marginBottom: 12 }} />
            <h3 style={{ margin: 0, color: theme.colors.primary }}>Ser Voluntário</h3>
            <p style={{ fontSize: 14, color: theme.colors.text }}>Doe o seu tempo e talento</p>
          </div>
        </div>

        {/* ÁREA DE CONTEÚDO EXPANDIDO */}
        <div ref={contentRef} style={{ marginTop: 40 }}>

          {activeSection === 'financeiro' && (
            <div style={{ background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 10px 40px rgba(0,0,0,0.08)', animation: 'fadeIn 0.4s' }}>
              <h2 style={{ textAlign: 'center', color: theme.colors.primary, marginTop: 0 }}>Dados para Doação</h2>
              <p style={{ textAlign: 'center', marginBottom: 30, color: theme.colors.muted }}>Use a chave Pix (CNPJ) ou os dados da conta bancária.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>

                {/* Opção PIX */}
                <div style={{ background: '#FAFAFA', padding: 20, borderRadius: 12, border: `1px solid ${theme.colors.highlight}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <FaCopy size={24} color={theme.colors.highlight} />
                    <h3 style={{ margin: 0, color: theme.colors.primary }}>Chave Pix (CNPJ)</h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', padding: '12px', borderRadius: 8, border: '1px solid #eee' }}>
                    <code style={{ flex: 1, fontSize: 18, fontWeight: 700, color: theme.colors.text }}>{pixKey}</code>
                    <CopyButton textToCopy={pixKey} label="Copiar" />
                  </div>
                  <p style={{ fontSize: 14, color: theme.colors.muted, marginTop: 12 }}>Titular: Instituto João de Barros</p>
                </div>

                {/* Opção Transferência */}
                <div style={{ background: '#FAFAFA', padding: 20, borderRadius: 12, border: '1px solid #ddd' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <FaUniversity size={24} color={theme.colors.primary} />
                    <h3 style={{ margin: 0, color: theme.colors.primary }}>Transferência (TED/DOC)</h3>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                      <span>Banco Sicoob (756)</span>
                      <CopyButton textToCopy={'756'} label="Copiar" />
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                      <span>Agência: <strong>4321</strong></span>
                      <CopyButton textToCopy={'4321'} label="Copiar" />
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                      <span>Conta: <strong>2005247-2</strong></span>
                      <CopyButton textToCopy={'2005247-2'} label="Copiar" />
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          )}

          {activeSection === 'material' && (
            <div style={{ background: '#fff', padding: 32, borderRadius: 16, borderTop: `6px solid ${theme.colors.orangeStrong}`, boxShadow: '0 10px 40px rgba(0,0,0,0.08)', animation: 'fadeIn 0.4s' }}>
              <h2 style={{ color: theme.colors.orangeStrong, marginTop: 0 }}>O que precisamos?</h2>
              <p style={{ marginBottom: 24 }}>No momento, nossas maiores necessidades são <strong>cimento, areia e revestimentos</strong>. Se tiver sobras de obra em bom estado, também aceitamos!</p>
              <MaterialForm onClose={() => setActiveSection(null)} />
            </div>
          )}

          {activeSection === 'voluntario' && (
            <div style={{ background: '#fff', padding: 32, borderRadius: 16, borderTop: `6px solid ${theme.colors.secondary}`, boxShadow: '0 10px 40px rgba(0,0,0,0.08)', animation: 'fadeIn 0.4s' }}>
              <h2 style={{ color: theme.colors.secondary, marginTop: 0 }}>Cadastro de Voluntário</h2>
              <p style={{ marginBottom: 24 }}>Precisamos de todo o tipo de ajuda: desde mão de obra especializada (engenharia, pedreiro) até apoio em eventos e transporte.</p>
              <VoluntarioForm onClose={() => setActiveSection(null)} />
            </div>
          )}

        </div>

        {/* Contato Extra */}
        <div style={{ marginTop: 60, textAlign: 'center', borderTop: '1px solid #eee', paddingTop: 40 }}>
          <p style={{ marginBottom: 16 }}>Dúvidas? Fale conosco diretamente.</p>
          <a href="https://wa.me/5516991811811" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 20px', borderRadius: 30, background: '#25D366', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
              <FaWhatsapp size={18} /> WhatsApp Oficial
            </button>
          </a>
        </div>

      </main>
    </>
  )
}

export default ComoAjudar

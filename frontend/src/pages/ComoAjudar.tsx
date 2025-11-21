import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { useSearchParams } from 'react-router-dom'
import { theme } from '../styles/theme'
import { FaHandHoldingUsd, FaTools, FaHandsHelping } from 'react-icons/fa'
// DonationModal kept in codebase but not used here anymore



const MaterialInfo: React.FC = () => (
  <div style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, maxWidth: 720 }}>
    <h3 style={{ color: theme.colors.primary }}>Doação de Materiais</h3>
    <p style={{ color: theme.colors.text }}>
      Entregue materiais no Instituto João de Barros — Franca, SP
      <br />Telefone: (16) 99181-1811
      <br />Email: ijbfranca@gmail.com
    </p>
  </div>
)

const MaterialForm: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [materials, setMaterials] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { name, contact, materials, createdAt: new Date().toISOString() }
    const existing = JSON.parse(localStorage.getItem('materialDonations') || '[]')
    existing.push(payload)
    localStorage.setItem('materialDonations', JSON.stringify(existing))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      if (onClose) onClose()
    }, 1400)
    setName('')
    setContact('')
    setMaterials('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, maxWidth: 720, marginTop: 12 }}>
      <h3 style={{ color: theme.colors.primary }}>Ficha de Doação de Materiais</h3>
      <div style={{ display: 'grid', gap: 8 }}>
        <label>
          Nome completo
          <input value={name} onChange={(e) => setName(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          Contato (telefone ou email)
          <input value={contact} onChange={(e) => setContact(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          Materiais e quantidades (ex: 10 sacos de cimento)
          <textarea value={materials} onChange={(e) => setMaterials(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <div style={{ textAlign: 'right' }}>
          <button type="submit" style={{ padding: '10px 14px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700 }}>{submitted ? 'Enviado' : 'Enviar ficha'}</button>
        </div>
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

    // Prefer reading IDs from environment variables to avoid committing secrets.
    // Create a `.env` file in `frontend/` with:
    // VITE_EMAILJS_SERVICE_ID=your_service_id
    // VITE_EMAILJS_TEMPLATE_ID=your_template_id
    // VITE_EMAILJS_PUBLIC_KEY=your_public_key
    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || 'SEU_SERVICE_ID'
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || 'SEU_TEMPLATE_ID'
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || 'SUA_PUBLIC_KEY'

    const templateParams = {
      from_name: name,
      contact_info: contact,
      message: skills
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success')
        setName('')
        setContact('')
        setSkills('')
        setTimeout(() => {
          setStatus('idle')
          if (onClose) onClose()
        }, 3000)
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error)
        setStatus('error')
      })
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, maxWidth: 720, marginTop: 12 }}>
      <h3 style={{ color: theme.colors.primary }}>Formulário de Voluntariado</h3>
      <div style={{ display: 'grid', gap: 8 }}>
        <label>
          Nome completo
          <input value={name} onChange={(e) => setName(e.target.value)} required disabled={status === 'sending'} style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          Contato (telefone ou email)
          <input value={contact} onChange={(e) => setContact(e.target.value)} required disabled={status === 'sending'} style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          Em que pode ajudar?
          <textarea value={skills} onChange={(e) => setSkills(e.target.value)} required disabled={status === 'sending'} style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        
        {status === 'error' && <p style={{ color: 'red' }}>Erro ao enviar. Por favor, tente novamente ou contacte-nos por telefone.</p>}
        {status === 'success' && <p style={{ color: 'green' }}>Obrigado! A sua ficha foi enviada com sucesso.</p>}

        <div style={{ textAlign: 'right' }}>
          <button type="submit" disabled={status === 'sending' || status === 'success'} style={{ padding: '10px 14px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700, opacity: status === 'sending' ? 0.7 : 1 }}>
            {status === 'sending' ? 'A enviar...' : 'Enviar'}
          </button>
        </div>
      </div>
    </form>
  )
}
const ComoAjudar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'financeiro' | 'material' | 'voluntario' | null>(null)
  const [searchParams] = useSearchParams()
  const financialRef = useRef<HTMLDivElement | null>(null)
  const materialRef = useRef<HTMLDivElement | null>(null)
  const volunteerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const t = searchParams.get('type')
    if (t) {
      if (t === 'voluntario' || t === 'voluntário') {
        setActiveSection('voluntario')
        setTimeout(() => volunteerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
      } else if (t === 'material') {
        setActiveSection('material')
        setTimeout(() => materialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
      } else if (t === 'dinheiro' || t === 'financeiro') {
        setActiveSection('financeiro')
        setTimeout(() => financialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
      }
    }
  }, [searchParams])

  const toggleSection = (section: 'financeiro' | 'material' | 'voluntario') => {
    setActiveSection((s) => (s === section ? null : section))
    // scroll to the target after opening
    setTimeout(() => {
      if (section === 'financeiro') financialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (section === 'material') materialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
  }

  return (
    <>
      <Helmet>
        <title>Como Ajudar | Instituto João de Barros</title>
        <meta name="description" content="Formas de colaborar com o Instituto: doações de materiais, apoio financeiro e voluntariado." />
      </Helmet>
      <main style={{ padding: 20 }}>
      <h1 style={{ color: theme.colors.primary }}>Como Ajudar</h1>
      <p style={{ color: theme.colors.text, maxWidth: 780 }}>
        Esta é a página de conversão central — tornando fácil doar ou registrar-se como
        voluntário. A prioridade aqui é clareza, contraste e poucas etapas para conversão.
      </p>

<section style={{ marginTop: 28 }}>
        <h2 style={{ color: theme.colors.primary }}>Formas de Colaboração</h2>
        <p style={{ color: theme.colors.text }}>Você pode contribuir de várias formas. Abaixo estão as principais maneiras de colaborar — listamos o mais comum e o que normalmente precisamos:</p>
        <p style={{ color: theme.colors.text, fontWeight: 600, marginTop: 8 }}>Nossas reformas e melhorias visam garantir moradia digna para famílias em situação de vulnerabilidade.</p>
        <ul style={{ color: theme.colors.text, maxWidth: 720 }}>
          <li><strong>Doação de materiais:</strong> cimento, revestimentos, portas, janelas, ferragens e afins.</li>
          <li><strong>Voluntariado:</strong> mão de obra e profissionais (pedreiros, eletricistas, pintores, ajudantes, arquitetos e engenheiros).</li>
          <li><strong>Apoio financeiro:</strong> contribuições para compra de materiais e despesas da obra.</li>
          <li><strong>Parcerias:</strong> empresas e comércios podem doar materiais, oferecer descontos ou ceder serviços.</li>
        </ul>

        <div style={{ marginTop: 28 }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, maxWidth: 720 }}>
            <h4 style={{ margin: 0, color: theme.colors.primary }}>Contato rápido</h4>
            <p style={{ marginTop: 8, color: theme.colors.text, marginBottom: 0 }}><strong>Telefone:</strong> 📞 (16) 99181-1811</p>
            <p style={{ color: theme.colors.text, marginBottom: 0 }}><strong>Email:</strong> <a href="mailto:ijbfranca@gmail.com">ijbfranca@gmail.com</a></p>
            <p style={{ color: theme.colors.text, marginTop: 8, marginBottom: 0 }}><strong>Doar materiais:</strong> entregue no Instituto — ver horários ao ligar.</p>
          </div>

          <div style={{ marginTop: 12, maxWidth: 720 }}>
            <div style={{ background: '#fff', padding: 12, borderRadius: theme.radii.soft, textAlign: 'center' }}>
              <p style={{ margin: 0, color: theme.colors.text }}><strong>Instagram</strong></p>
              <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" style={{ color: theme.colors.primary }}>@instituto_joaodebarro_franca</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ color: theme.colors.primary }}>Como Ajudar — Ação Imediata</h2>
        <p style={{ color: theme.colors.text }}>Clique numa das três opções para expandir mais informações ou preencher o formulário ali mesmo.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 20 }}>
          {/* Card: Apoio Financeiro */}
          <div onClick={() => toggleSection('financeiro')} className="hover-card" style={{ cursor: 'pointer', padding: 20, borderRadius: theme.radii.soft, background: activeSection === 'financeiro' ? '#FFFDE7' : '#fff', border: activeSection === 'financeiro' ? `2px solid ${theme.colors.highlight}` : '1px solid rgba(0,0,0,0.04)', textAlign: 'center' }}>
            <FaHandHoldingUsd size={40} color={theme.colors.highlight} style={{ marginBottom: 12 }} />
            <h3 style={{ margin: 0, color: theme.colors.primary }}>Apoio Financeiro</h3>
            <p style={{ color: theme.colors.text, fontSize: 14 }}>Contribua com qualquer valor via Pix ou transferência.</p>
            <div style={{ marginTop: 12 }}>
              <button style={{ padding: '8px 14px', borderRadius: 8, background: activeSection === 'financeiro' ? theme.colors.highlight : 'transparent', border: activeSection === 'financeiro' ? 'none' : `1px solid ${theme.colors.highlight}`, color: activeSection === 'financeiro' ? '#000' : theme.colors.highlight, fontWeight: 700 }}>{activeSection === 'financeiro' ? 'Fechar' : 'Doar Agora'}</button>
            </div>
          </div>

          {/* Card: Doar Materiais */}
          <div onClick={() => toggleSection('material')} className="hover-card" style={{ cursor: 'pointer', padding: 20, borderRadius: theme.radii.soft, background: activeSection === 'material' ? '#FFF3E0' : '#fff', border: activeSection === 'material' ? `2px solid ${theme.colors.orangeStrong}` : '1px solid rgba(0,0,0,0.04)', textAlign: 'center' }}>
            <FaTools size={40} color={theme.colors.orangeStrong} style={{ marginBottom: 12 }} />
            <h3 style={{ margin: 0, color: theme.colors.primary }}>Doar Materiais</h3>
            <p style={{ color: theme.colors.text, fontSize: 14 }}>Cimento, pisos, portas e restos de obra aproveitáveis.</p>
            <div style={{ marginTop: 12 }}>
              <button style={{ padding: '8px 14px', borderRadius: 8, background: activeSection === 'material' ? theme.colors.orangeStrong : 'transparent', border: activeSection === 'material' ? 'none' : `1px solid ${theme.colors.orangeStrong}`, color: activeSection === 'material' ? '#fff' : theme.colors.orangeStrong, fontWeight: 700 }}>{activeSection === 'material' ? 'Fechar' : 'Tenho Materiais'}</button>
            </div>
          </div>

          {/* Card: Ser Voluntário */}
          <div onClick={() => toggleSection('voluntario')} className="hover-card" style={{ cursor: 'pointer', padding: 20, borderRadius: theme.radii.soft, background: activeSection === 'voluntario' ? '#E8F5E9' : '#fff', border: activeSection === 'voluntario' ? `2px solid ${theme.colors.secondary}` : '1px solid rgba(0,0,0,0.04)', textAlign: 'center' }}>
            <FaHandsHelping size={40} color={theme.colors.secondary} style={{ marginBottom: 12 }} />
            <h3 style={{ margin: 0, color: theme.colors.primary }}>Ser Voluntário</h3>
            <p style={{ color: theme.colors.text, fontSize: 14 }}>Engenheiros, pedreiros ou ajudantes gerais.</p>
            <div style={{ marginTop: 12 }}>
              <button style={{ padding: '8px 14px', borderRadius: 8, background: activeSection === 'voluntario' ? theme.colors.secondary : 'transparent', border: activeSection === 'voluntario' ? 'none' : `1px solid ${theme.colors.secondary}`, color: activeSection === 'voluntario' ? '#fff' : theme.colors.secondary, fontWeight: 700 }}>{activeSection === 'voluntario' ? 'Fechar' : 'Quero Ajudar'}</button>
            </div>
          </div>
        </div>

        {/* Expanded area */}
        <div style={{ marginTop: 24 }}>
          {activeSection === 'financeiro' && (
            <div ref={financialRef} style={{ background: '#fff', padding: 24, borderRadius: theme.radii.soft, boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
              <h3 style={{ color: theme.colors.primary, marginTop: 0, textAlign: 'center' }}>Dados Bancários — Transferência</h3>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', marginTop: 18 }}>
                <div style={{ flex: '1 1 320px', minWidth: 280, textAlign: 'left', background: '#FAFAFA', padding: 18, borderRadius: 12, border: '1px dashed #ddd' }}>
                  <div style={{ fontWeight: 800, marginBottom: 8 }}>Dados para Transferência</div>
                  <div style={{ marginBottom: 8 }}><strong>Banco:</strong> Sicoob (756) <button onClick={() => { navigator.clipboard.writeText('Sicoob (756)'); alert('Banco copiado: Sicoob (756)') }} style={{ marginLeft: 8, padding: '4px 8px', borderRadius: 6, border: 'none', background: '#eee', cursor: 'pointer' }}>Copiar</button></div>
                  <div style={{ marginBottom: 8 }}><strong>Agência:</strong> 4321 <button onClick={() => { navigator.clipboard.writeText('4321'); alert('Agência copiada: 4321') }} style={{ marginLeft: 8, padding: '4px 8px', borderRadius: 6, border: 'none', background: '#eee', cursor: 'pointer' }}>Copiar</button></div>
                  <div style={{ marginBottom: 8 }}><strong>Conta:</strong> 2005247-2 <button onClick={() => { navigator.clipboard.writeText('2005247-2'); alert('Conta copiada: 2005247-2') }} style={{ marginLeft: 8, padding: '4px 8px', borderRadius: 6, border: 'none', background: '#eee', cursor: 'pointer' }}>Copiar</button></div>
                  <div style={{ marginBottom: 8 }}><strong>Favorecido:</strong> Instituto João de Barros <button onClick={() => { navigator.clipboard.writeText('Instituto João de Barros'); alert('Favorecido copiado') }} style={{ marginLeft: 8, padding: '4px 8px', borderRadius: 6, border: 'none', background: '#eee', cursor: 'pointer' }}>Copiar</button></div>
                  <div style={{ marginTop: 12, fontSize: 14, color: theme.colors.muted }}><strong>Instrução:</strong> Ao realizar a transferência, informe no comprovante: "Doação — [Obra/Referência]" para facilitar a conciliação.</div>
                </div>

                {/* Resumo removido conforme solicitado */}
              </div>
            </div>
          )}

          {activeSection === 'material' && (
            <div ref={materialRef} style={{ marginTop: 8 }}>
              <MaterialInfo />
              <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0, color: theme.colors.primary }}>Ficha de Doação</h4>
                <button onClick={() => setActiveSection(null)} style={{ background: 'transparent', border: 'none', color: theme.colors.primary, cursor: 'pointer' }}>Fechar</button>
              </div>
              <MaterialForm onClose={() => setActiveSection(null)} />
            </div>
          )}

          {activeSection === 'voluntario' && (
            <div ref={volunteerRef} style={{ marginTop: 8 }}>
              <div style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft }}>
                <h3 style={{ color: theme.colors.secondary, marginTop: 0 }}>Junte-se à Equipe</h3>
                <VoluntarioForm onClose={() => setActiveSection(null)} />
              </div>
            </div>
          )}
        </div>
      </section>
      </main>
    </>
  )
}

export default ComoAjudar

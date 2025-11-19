import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { theme } from '../styles/theme'
import BotaoCTA from '../components/ui/BotaoCTA'
// DonationModal kept in codebase but not used here anymore

const FinancialInfo: React.FC = () => (
  <div style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, maxWidth: 720 }}>
    <h3 style={{ color: theme.colors.primary }}>Apoio Financeiro — Dados Bancários</h3>
    <p style={{ color: theme.colors.text }}>
      Banco Sicoob (756)
      <br />Agência: 4321
      <br />Conta corrente: 2005247-2
      <br />Chave Pix: 26.345.732/0001-07
    </p>
  </div>
)

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
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const payload = { name, contact, skills, createdAt: new Date().toISOString() }
    const existing = JSON.parse(localStorage.getItem('volunteers') || '[]')
    existing.push(payload)
    localStorage.setItem('volunteers', JSON.stringify(existing))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      if (onClose) onClose()
    }, 1400)
    setName('')
    setContact('')
    setSkills('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, maxWidth: 720, marginTop: 12 }}>
      <h3 style={{ color: theme.colors.primary }}>Formulário de Voluntariado</h3>
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
          Em que pode ajudar (ex: pedreiro, eletricista, ajudante, arquiteto)
          <textarea value={skills} onChange={(e) => setSkills(e.target.value)} required style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <div style={{ textAlign: 'right' }}>
          <button type="submit" style={{ padding: '10px 14px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700 }}>{submitted ? 'Enviado' : 'Enviar'}</button>
        </div>
      </div>
    </form>
  )
}
const ComoAjudar: React.FC = () => {
  const [showVolunteerForm, setShowVolunteerForm] = useState(false)
  const [searchParams] = useSearchParams()
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const financialRef = useRef<HTMLDivElement | null>(null)
  const materialRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const t = searchParams.get('type')
    if (t) setSelectedType(t)
  }, [searchParams])

  const currentType = selectedType || null

  return (
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
    
          <div>
            <h2 id="doacoes" style={{ color: theme.colors.primary }}>Doações</h2>
            <p style={{ color: theme.colors.text }}>Você pode optar por doar dinheiro ou materiais. Escolha a opção desejada abaixo e siga o fluxo.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
              <BotaoCTA onClick={() => {
                setSelectedType('dinheiro')
                setTimeout(() => financialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
              }}>{currentType === 'dinheiro' ? 'VER DADOS BANCÁRIOS' : 'DOE DINHEIRO'}</BotaoCTA>

              <BotaoCTA onClick={() => {
                if (currentType === 'material') {
                  setSelectedType(null)
                } else {
                  setSelectedType('material')
                  setTimeout(() => materialRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
                }
              }}>{currentType === 'material' ? <span style={{ fontSize: 12 }}>FECHAR DOAÇÃO DE MATERIAIS</span> : 'DOE MATERIAIS'}</BotaoCTA>

              <BotaoCTA onClick={() => setShowVolunteerForm((s) => !s)}>{showVolunteerForm ? 'Fechar formulário' : 'QUERO SER VOLUNTÁRIO'}</BotaoCTA>
            </div>

            {/* Info cards below buttons */}
            <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
              <div ref={financialRef}>
                {currentType === 'dinheiro' && (
                  <div>
                    <FinancialInfo />
                  </div>
                )}
              </div>

              <div ref={materialRef}>
                {currentType === 'material' && (
                  <div>
                    <MaterialInfo />
                    <div style={{ marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ margin: 0, color: theme.colors.primary }}>Ficha de Doação</h4>
                      <button onClick={() => setSelectedType(null)} style={{ background: 'transparent', border: 'none', color: theme.colors.primary, cursor: 'pointer' }}>Fechar</button>
                    </div>
                    <MaterialForm />
                  </div>
                )}
              </div>

              {showVolunteerForm && <div><VoluntarioForm onClose={() => setShowVolunteerForm(false)} /></div>}
            </div>
          </div>

          <aside />
        </div>
      </section>
    </main>
  )
}

export default ComoAjudar

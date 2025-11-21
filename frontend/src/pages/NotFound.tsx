import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { theme } from '../styles/theme'
import BotaoCTA from '../components/ui/BotaoCTA'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main style={{ padding: 24, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Helmet>
        <title>404 — Página não encontrada</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={{ maxWidth: 880, textAlign: 'center' }}>
        <div style={{ fontSize: 88, fontWeight: 900, color: theme.colors.accent, lineHeight: 1 }}>404</div>
        <h1 style={{ marginTop: 8, color: theme.colors.primary }}>Página não encontrada</h1>
        <p style={{ color: theme.colors.text, marginTop: 8, fontSize: 16 }}>
          A página que você está procurando não existe ou foi movida. Verifique o endereço ou retorne para a página inicial.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20 }}>
          <BotaoCTA onClick={() => navigate('/')}>Ir para a Home</BotaoCTA>
          <button
            onClick={() => window.history.back()}
            style={{
              padding: '10px 16px',
              borderRadius: 10,
              border: `2px solid ${theme.colors.primary}`,
              background: 'transparent',
              color: theme.colors.primary,
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Voltar
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound

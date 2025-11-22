import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { theme } from '../styles/theme'
import BotaoCTA from '../components/ui/BotaoCTA'

const styles = {
  main: {
    padding: 24,
    minHeight: '60vh',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const
  },
  container: {
    maxWidth: 880,
    textAlign: 'center' as const
  },
  errorCode: {
    fontSize: 88,
    fontWeight: 900,
    color: theme.colors.accent,
    lineHeight: 1
  },
  title: {
    marginTop: 8,
    color: theme.colors.primary
  },
  description: {
    color: theme.colors.text,
    marginTop: 8,
    fontSize: 16
  },
  buttonContainer: {
    display: 'flex' as const,
    gap: 12,
    justifyContent: 'center' as const,
    marginTop: 20
  },
  backButton: {
    padding: '10px 16px',
    borderRadius: 10,
    border: `2px solid ${theme.colors.primary}`,
    background: 'transparent',
    color: theme.colors.primary,
    fontWeight: 700,
    cursor: 'pointer' as const
  }
}

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main style={styles.main}>
      <Helmet>
        <title>404 — Página não encontrada</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={styles.container}>
        <div style={styles.errorCode}>404</div>
        <h1 style={styles.title}>Página não encontrada</h1>
        <p style={styles.description}>
          A página que você está procurando não existe ou foi movida. Verifique o endereço ou retorne para a página inicial.
        </p>

        <div style={styles.buttonContainer}>
          <BotaoCTA onClick={() => navigate('/')}>Ir para a Home</BotaoCTA>
          <button onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')} style={styles.backButton}>
            Voltar
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFound

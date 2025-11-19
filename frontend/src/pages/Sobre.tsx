import React from 'react'
import { theme } from '../styles/theme'

const Sobre: React.FC = () => {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ color: theme.colors.primary }}>Sobre o Instituto João de Barros</h1>
      <p style={{ maxWidth: 720, color: theme.colors.text }}>
        O Instituto João de Barros, de Franca-SP, atua na construção de oportunidades para
        famílias e crianças. Inspirados pelo comportamento do joão-de-barro, buscamos oferecer
        um ninho seguro: reformamos e construímos moradias, apoiamos com capacitação profissional
        e oferecemos acompanhamento social às famílias atendidas.
      </p>

      <section style={{ marginTop: 20, maxWidth: 800 }}>
        <h2 style={{ color: theme.colors.primary }}>O que fazemos</h2>
        <p style={{ color: theme.colors.text }}>
          Somos uma associação de voluntários que organiza reformas e construções para
          famílias em situação de vulnerabilidade. Trabalhamos com doações de materiais,
          apoio financeiro e esforço voluntário — incluindo arquitetos e engenheiros que
          colaboram com projetos técnicos e acompanhamento das obras. Também promovemos
          ações de capacitação e apoio social para fortalecer a autonomia das famílias.
        </p>
        <div style={{ marginTop: 12 }}>
          <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer">
            <button style={{ padding: '8px 12px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700 }}>Instagram</button>
          </a>
        </div>
      </section>
      <section style={{ marginTop: 20, maxWidth: 800 }}>
        <h2 style={{ color: theme.colors.primary }}>Nossa missão</h2>
        <p style={{ color: theme.colors.text }}>Promover dignidade por meio de educação, acolhimento, capacitação e moradia digna.</p>
      </section>
    </main>
  )
}

export default Sobre

import React from 'react'
import { Helmet } from 'react-helmet-async'
import Button from '../components/ui/Button'
import { theme } from '../styles/theme'
import { FaInstagram, FaHammer, FaHandHoldingHeart, FaUsers } from 'react-icons/fa'

const QuemSomos: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | Instituto João de Barros</title>
        <meta name="description" content="Conheça a missão e as ações do Instituto João de Barros em Franca-SP." />
      </Helmet>
      <main style={{ padding: '40px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <section style={{ textAlign: 'center', marginBottom: 50 }}>
          <h1 className="main-hero-title" style={{ color: theme.colors.primary, marginBottom: 16 }}>Quem Somos</h1>
          <p style={{ maxWidth: 720, margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6, color: theme.colors.text }}>
            O Instituto João de Barros, de Franca-SP, atua na construção de oportunidades para
            famílias e crianças. Inspirados pelo comportamento do joão-de-barro, buscamos oferecer
            um ninho seguro.
          </p>
        </section>

        <section style={{ marginBottom: 60 }}>
          <h2 className="section-title" style={{ textAlign: 'center', color: theme.colors.primary, marginBottom: 30 }}>Nossa Missão</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            <div className="hover-card bg-white p-6 rounded-[12px] text-center shadow-md">
              <div style={{ background: '#EFEBE9', width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <FaHammer size={24} color={theme.colors.brownWarm} />
              </div>
              <h3 style={{ color: theme.colors.primary, margin: '0 0 8px 0' }}>Moradia Digna</h3>
              <p style={{ fontSize: 14, color: theme.colors.text }}>Reformamos e construímos lares para garantir segurança física e emocional.</p>
            </div>

            <div className="hover-card bg-white p-6 rounded-[12px] text-center shadow-md">
              <div style={{ background: '#E8F5E9', width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <FaHandHoldingHeart size={24} color={theme.colors.secondary} />
              </div>
              <h3 style={{ color: theme.colors.primary, margin: '0 0 8px 0' }}>Acolhimento</h3>
              <p style={{ fontSize: 14, color: theme.colors.text }}>Oferecemos acompanhamento social e capacitação profissional às famílias.</p>
            </div>

            <div className="hover-card bg-white p-6 rounded-[12px] text-center shadow-md">
              <div style={{ background: '#FFF8E1', width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <FaUsers size={24} color={theme.colors.highlight} />
              </div>
              <h3 style={{ color: theme.colors.primary, margin: '0 0 8px 0' }}>Comunidade</h3>
              <p style={{ fontSize: 14, color: theme.colors.text }}>Acreditamos no poder da mobilização voluntária e da solidariedade.</p>
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: 40, borderRadius: theme.radii.soft, boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: 40 }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 className="section-title" style={{ color: theme.colors.primary, marginTop: 0 }}>O que fazemos</h2>
            <p style={{ lineHeight: 1.6, color: theme.colors.text }}>
              Somos uma associação de voluntários que organiza reformas e construções para
              famílias em situação de vulnerabilidade. Trabalhamos com doações de materiais,
              apoio financeiro e esforço voluntário — incluindo arquitetos e engenheiros que
              colaboram com projetos técnicos.
            </p>

            <div style={{ marginTop: 24 }}>
              <a href="https://www.instagram.com/instituto_joaodebarro_franca/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="outline" className="border-[#C13584] text-[#C13584] px-4 py-2 inline-flex items-center gap-2 transition-all">
                  <FaInstagram size={20} />
                  Siga-nos no Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 className="section-title" style={{ color: theme.colors.primary }}>Participação e Eventos</h2>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', marginTop: 12, flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 360px' }}>
              <p style={{ lineHeight: 1.6, color: theme.colors.text }}>
                O Instituto organiza e participa de eventos beneficentes fundamentais para angariar recursos, como o evento de Hipismo e ações da Loja Maçônica Pedra da Luz.
              </p>
              <p style={{ lineHeight: 1.6, color: theme.colors.text }}>
                Muitas ações dependem do apoio de voluntários e da participação ativa da comunidade de Franca. O nosso movimento é criado por voluntários e para a comunidade.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default QuemSomos

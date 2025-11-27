import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { theme } from '../styles/theme'
import BotaoCTA from '../components/ui/BotaoCTA'
import DonationModal from '../components/ui/DonationModal'
import Carousel from '../components/ui/Carousel'
import { FaBoxOpen, FaArrowRight, FaHandHoldingHeart, FaCalendarAlt, FaHome, FaHandshake, FaGlassCheers } from 'react-icons/fa'

// heroStyle removed (unused) — estilos aplicados inline onde necessário

const Home: React.FC = () => {

  const [donateOpen, setDonateOpen] = useState(false)
  const heroImage = '/fotos/instituto.png'
  return (
    <>
      <Helmet>
        <title>Instituto João de Barros</title>
        <meta name="description" content="O Instituto João de Barros realiza reformas e construções para famílias em situação de vulnerabilidade em Franca-SP." />
      </Helmet>
      <main style={{ padding: 20 }}>

      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        minHeight: 500,
        marginBottom: 40
      }}>
        <div style={{
          flex: '1 1 400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 20px',
          background: '#f7f7f7',
          borderRadius: theme.radii.soft
        }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 12px',
            background: theme.colors.secondary,
            color: '#fff',
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 700,
            marginBottom: 16,
            alignSelf: 'flex-start'
          }}>
            Moradia Digna
          </div>
          <h1 style={{
            color: theme.colors.primary,
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 16
          }}>
            Construindo esperança,<br />tijolo por tijolo.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 500, color: theme.colors.text }}>
            O Instituto João de Barros dedica-se a transformar vidas através de reformas habitacionais para quem mais precisa.
          </p>
          <div style={{ marginTop: 24 }}>
            <BotaoCTA onClick={() => setDonateOpen(true)}>Quero Apoiar</BotaoCTA>
          </div>
        </div>

        <div style={{
          flex: '1 1 400px',
          minHeight: 400,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          borderRadius: theme.radii.soft,
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)'
        }}>
        </div>
      </section>

      <section style={{ marginTop: 40 }} aria-labelledby="impacto-heading">
        <h2 id="impacto-heading" style={{ color: theme.colors.primary }}>Impacto em Números</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 6, marginBottom: 20 }}>
          <p style={{ color: theme.colors.text, margin: 0, fontSize: 14 }}>Dados oficiais consolidados pela equipe.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          {[
            { number: '05', label: 'obras entregues', desc: 'Reformas concluídas para famílias.' },
            { number: '+20', label: 'voluntários', desc: 'Profissionais mobilizados em ações.' },
            { number: '02', label: 'projetos ativos', desc: 'Projetos em andamento.' },
            { number: '+300', label: 'pessoas', desc: 'Impactadas diretamente pelas ações.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="hover-card"
              style={{
                background: '#fff',
                padding: 24,
                borderRadius: theme.radii.soft,
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                borderTop: `4px solid ${theme.colors.accent}` // Um toque de cor no topo
              }}
            >
              {/* AQUI: Cor de destaque nos números */}
              <div style={{ fontSize: 42, fontWeight: 900, color: theme.colors.accent, lineHeight: 1 }}>
                {item.number}
              </div>
              <div style={{ marginTop: 12, color: theme.colors.primary, fontWeight: 700, fontSize: 18 }}>
                {item.label}
              </div>
              <div style={{ marginTop: 8, color: theme.colors.muted, fontSize: 14 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 60 }}>
        <h3 style={{ color: theme.colors.primary, fontSize: 28 }}>Como Você Pode Ajudar</h3>
        <p style={{ color: theme.colors.text, maxWidth: 760, marginBottom: 30 }}>
          Três formas simples de contribuir com o Instituto.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {/* Card 1: Materiais */}
          <div className="hover-card" style={{ background: '#fff', padding: 24, borderRadius: theme.radii.soft, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#FFF4E5', padding: 12, borderRadius: 12, marginBottom: 16 }}>
              <FaBoxOpen size={32} color={theme.colors.orangeStrong} />
            </div>
            <h4 style={{ margin: 0, fontSize: 20, color: theme.colors.primary }}>Doar materiais</h4>
            <p style={{ color: theme.colors.text, marginTop: 12, flex: 1 }}>
              Cimento, revestimentos, portas e itens de construção são essenciais para nossas obras.
            </p>
            <a href="/ajudar?type=material" style={{ textDecoration: 'none', marginTop: 16, width: '100%' }}>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'transparent',
                border: `2px solid ${theme.colors.orangeStrong}`,
                color: theme.colors.orangeStrong,
                borderRadius: 8,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}>
                Saiba como <FaArrowRight size={12} />
              </button>
            </a>
          </div>

          {/* Card 2: Voluntário */}
          <div className="hover-card" style={{ background: '#fff', padding: 24, borderRadius: theme.radii.soft, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#E8F5E9', padding: 12, borderRadius: 12, marginBottom: 16 }}>
              <FaHandHoldingHeart size={32} color={theme.colors.secondary} />
            </div>
            <h4 style={{ margin: 0, fontSize: 20, color: theme.colors.primary }}>Ser voluntário</h4>
            <p style={{ color: theme.colors.text, marginTop: 12, flex: 1 }}>
              Mãos à obra: profissionais e ajudantes são a força que move as nossas reformas.
            </p>
            <a href="/ajudar?type=voluntario" style={{ textDecoration: 'none', marginTop: 16, width: '100%' }}>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'transparent',
                border: `2px solid ${theme.colors.secondary}`,
                color: theme.colors.secondary,
                borderRadius: 8,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}>
                Quero ajudar <FaArrowRight size={12} />
              </button>
            </a>
          </div>

          {/* Card 3: Doar dinheiro (substituído de 'Eventos') */}
          <div className="hover-card" style={{ background: '#fff', padding: 24, borderRadius: theme.radii.soft, boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ background: '#FFF8E1', padding: 12, borderRadius: 12, marginBottom: 16 }}>
              <FaCalendarAlt size={32} color={theme.colors.highlight} />
            </div>
            <h4 style={{ margin: 0, fontSize: 20, color: theme.colors.primary }}>Doar dinheiro</h4>
            <p style={{ color: theme.colors.text, marginTop: 12, flex: 1 }}>
              Contribua financeiramente para apoiar nossas obras e ações sociais.
            </p>
            <a href="/ajudar?type=financeiro" style={{ textDecoration: 'none', marginTop: 16, width: '100%' }}>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'transparent',
                border: `2px solid ${theme.colors.highlight}`,
                color: theme.colors.highlight,
                borderRadius: 8,
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
              }}>
                Doar agora <FaArrowRight size={12} />
              </button>
            </a>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ color: theme.colors.primary }}>Nossos projetos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
          <article className="hover-card" style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28, color: theme.colors.brownWarm }}><FaHome /></div>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Obras</h3>
            </div>
            <p style={{ marginTop: 8, color: theme.colors.text }}>Obras e melhorias habitacionais para famílias em vulnerabilidade.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/projetos" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '8px 12px', borderRadius: 8, background: 'transparent', color: theme.colors.brownWarm, border: `1px solid ${theme.colors.brownWarm}`, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Saiba mais <FaArrowRight size={12} />
                </button>
              </a>
            </div>
          </article>

          <article className="hover-card" style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28, color: theme.colors.highlight }}><FaGlassCheers /></div>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Eventos</h3>
            </div>
            <p style={{ marginTop: 8, color: theme.colors.text }}>Eventos de arrecadação e mobilização que financiam nossos projetos.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/#eventos" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '8px 12px', borderRadius: 8, background: 'transparent', color: theme.colors.highlight, border: `1px solid ${theme.colors.highlight}`, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Saiba mais <FaArrowRight size={12} />
                </button>
              </a>
            </div>
          </article>

          <article className="hover-card" style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28, color: theme.colors.brownWarm }}><FaHandshake /></div>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Parcerias</h3>
            </div>
            <p style={{ marginTop: 8, color: theme.colors.text }}>Parcerias com empresas para doação de materiais e serviços.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/ajudar#doacoes" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '8px 12px', borderRadius: 8, background: 'transparent', color: theme.colors.brownWarm, border: `1px solid ${theme.colors.brownWarm}`, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Saiba mais <FaArrowRight size={12} />
                </button>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="eventos" style={{ marginTop: 28 }}>
        <h2 style={{ color: theme.colors.primary }}>Eventos</h2>

        <section style={{ marginTop: 12 }}>
          <p style={{ color: theme.colors.text, maxWidth: 760 }}>
            O Instituto organiza eventos de mobilização e arrecadação ao longo do ano — feiras, jantares, campanhas e encontros comunitários — que aproximam a sociedade, fortalecem parcerias e possibilitam a captação de recursos para as nossas obras e ações sociais. Essas iniciativas também são oportunidades para divulgar o trabalho do IJB e envolver novos voluntários e colaboradores.
          </p>
        </section>

        <section style={{ marginTop: 16 }}>
          <h3 style={{ color: theme.colors.primary }}>Hipismo</h3>
          <p style={{ color: theme.colors.text, maxWidth: 760 }}>
            O evento de Hipismo foi um grande sucesso: o público compareceu em bom número e o ambiente foi acolhedor e familiar. Agradecemos ao Equestrian Center Franca pela generosa cessão do espaço e à Loja Maçônica Pedra da Luz, cuja equipe assumiu a organização e a administração da lanchonete — chegando a custear os comes e bebes, de modo que toda a receita foi revertida ao Instituto João de Barros.
          </p>

          <p style={{ color: theme.colors.text, maxWidth: 760 }}>
            Merci a todos que compareceram e consumiram na lanchonete: gestos como esse multiplicam o alcance das nossas ações. A dedicação dos voluntários e parceiros, que abriram mão do seu tempo de lazer para trabalhar pelo bem comum, reforça nosso compromisso de levar moradia digna e suporte social às famílias atendidas.
          </p>

          <div style={{ marginTop: 12 }}>
            <Carousel images={[
              '/fotos/hipismo1.jpg',
              '/fotos/hipismo2.jpg',
              '/fotos/hipismo3.jpg',
              '/fotos/hipismo4.jpg',
              '/fotos/hipismo5.jpg'
            ]} height={500} autoPlayMs={3000} />
          </div>
        </section>
      </section>

      </main>
      <DonationModal open={donateOpen} onClose={() => setDonateOpen(false)} />
    </>
  )
}

export default Home

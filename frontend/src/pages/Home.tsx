import React, { useState } from 'react'
import { theme } from '../styles/theme'
import BotaoCTA from '../components/ui/BotaoCTA'
import DonationModal from '../components/ui/DonationModal'
import Carousel from '../components/ui/Carousel'

const heroStyle: React.CSSProperties = {
  background: '#fff',
  padding: '40px 20px',
  borderRadius: Number(theme.radii.soft.replace('px','')) * 1 + 'px',
  textAlign: 'center'
}

const Home: React.FC = () => {
  const [donateOpen, setDonateOpen] = useState(false)
  return (
    <>
      <main style={{ padding: 20 }}>
      <section style={heroStyle}>
        <h1 style={{ color: theme.colors.primary }}>O alicerce que constrói o futuro.</h1>
        <p style={{ color: theme.colors.text, maxWidth: 720 }}>
          Milhares de vidas precisam de um ninho seguro. Ajude o Instituto João de Barros
          França a edificar oportunidades.
        </p>
        <div style={{ marginTop: 16 }}>
          <BotaoCTA onClick={() => setDonateOpen(true)}>DOE AGORA</BotaoCTA>
        </div>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2 style={{ color: theme.colors.primary }}>Nossos projetos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 16 }}>
          <article style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28 }}>🏠</div>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Obras</h3>
            </div>
            <p style={{ marginTop: 8, color: theme.colors.text }}>Obras e melhorias habitacionais para famílias em vulnerabilidade.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/projetos#obras" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '8px 12px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700 }}>Saiba mais</button>
              </a>
            </div>
          </article>

          <article style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28 }}>🎪</div>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Eventos</h3>
            </div>
            <p style={{ marginTop: 8, color: theme.colors.text }}>Eventos de arrecadação e mobilização que financiam nossos projetos.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/#eventos" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '8px 12px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700 }}>Saiba mais</button>
              </a>
            </div>
          </article>

          <article style={{ background: '#fff', padding: 16, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28 }}>🤝</div>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Parcerias</h3>
            </div>
            <p style={{ marginTop: 8, color: theme.colors.text }}>Parcerias com empresas para doação de materiais e serviços.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="/ajudar#doacoes" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '8px 12px', borderRadius: 8, background: theme.colors.primary, color: '#fff', border: 'none', fontWeight: 700 }}>Saiba mais</button>
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

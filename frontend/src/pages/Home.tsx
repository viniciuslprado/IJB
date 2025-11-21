import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  
  const navigate = useNavigate()
  const [donateOpen, setDonateOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <>
      <main style={{ padding: 20 }}>

      {/* Foto do voluntário com uniforme (adicione o arquivo em public/fotos/voluntario-uniforme.jpg) */}
      <section style={{ marginBottom: 18, display: 'flex', justifyContent: 'center' }}>
        <figure style={{ maxWidth: 880, background: '#fff', padding: 12, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)', textAlign: 'center' }}>
          <picture>
            <img
              src="/fotos/instituto.png"
              alt="Voluntário usando uniforme do Instituto João de Barros"
              loading="lazy"
              decoding="async"
              width={880}
              height={495}
              style={{ width: '100%', height: 'auto', borderRadius: 6 }}
            />
          </picture>
          <figcaption style={{ fontSize: 12, color: theme.colors.muted, marginTop: 8 }}>Foto institucional</figcaption>
        </figure>
      </section>

      <section style={heroStyle} aria-labelledby="hero-heading">
        <h1 id="hero-heading" style={{ color: theme.colors.primary }}>O alicerce que constrói o futuro.</h1>
        <p style={{ color: theme.colors.text, maxWidth: 720 }}>
          Milhares de vidas precisam de um ninho seguro. Ajude o Instituto João de Barros França a edificar oportunidades.
        </p>
        <div style={{ marginTop: 16 }}>
          <BotaoCTA onClick={() => setDonateOpen(true)}>DOE AGORA</BotaoCTA>
        </div>
      </section>

      {/* Impact metrics section (official numbers) - interactive cards */}
      <section style={{ marginTop: 20 }} aria-labelledby="impacto-heading">
        <h2 id="impacto-heading" style={{ color: theme.colors.primary }}>Impacto em Números</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 6 }}>
          <p style={{ color: theme.colors.text, maxWidth: 680, margin: 0 }}>Dados oficiais — indicadores consolidados pela equipe do Instituto João de Barros.</p>
          <div style={{ color: theme.colors.muted, fontSize: 13 }} aria-hidden>• Atualizado: Nov 2025</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 14 }}>
          {/* Obras entregues - links to Projetos */}
          <div
            role="button"
            tabIndex={0}
            aria-label="05 obras entregues — ver detalhes em Projetos"
            onClick={() => navigate('/projetos#obras')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/projetos#obras') }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(0)}
            onBlur={() => setHovered(null)}
            style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, textAlign: 'center', boxShadow: hovered === 0 ? '0 12px 30px rgba(0,0,0,0.12)' : '0 6px 18px rgba(0,0,0,0.04)', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
          >
            <div style={{ fontSize: 40, fontWeight: 900, color: theme.colors.primary }}>05</div>
            <div style={{ marginTop: 8, color: theme.colors.text, fontWeight: 700 }}>obras entregues</div>
            <div style={{ marginTop: 6, color: theme.colors.text }}>Reformas e construções concluídas para famílias carentes.</div>
          </div>

          {/* Voluntários */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Mais de 20 voluntários mobilizados"
            onClick={() => navigate('/ajudar?type=voluntario#doacoes')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/ajudar?type=voluntario#doacoes') }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(1)}
            onBlur={() => setHovered(null)}
            style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, textAlign: 'center', boxShadow: hovered === 1 ? '0 12px 30px rgba(0,0,0,0.12)' : '0 6px 18px rgba(0,0,0,0.04)', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
          >
            <div style={{ fontSize: 40, fontWeight: 900, color: theme.colors.primary }}>+20</div>
            <div style={{ marginTop: 8, color: theme.colors.text, fontWeight: 700 }}>voluntários mobilizados</div>
            <div style={{ marginTop: 6, color: theme.colors.text }}>Profissionais e moradores que contribuíram em obras, eventos e campanhas.</div>
          </div>

          {/* Projetos aprovados */}
          <div
            role="button"
            tabIndex={0}
            aria-label="02 projetos aprovados e em execução"
            onClick={() => navigate('/projetos#obras')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/projetos#obras') }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(2)}
            onBlur={() => setHovered(null)}
            style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, textAlign: 'center', boxShadow: hovered === 2 ? '0 12px 30px rgba(0,0,0,0.12)' : '0 6px 18px rgba(0,0,0,0.04)', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
          >
            <div style={{ fontSize: 40, fontWeight: 900, color: theme.colors.primary }}>02</div>
            <div style={{ marginTop: 8, color: theme.colors.text, fontWeight: 700 }}>projetos aprovados / iniciados</div>
            <div style={{ marginTop: 6, color: theme.colors.text }}>Projetos que passaram pela fase de aprovação e chegaram à execução.</div>
          </div>

          {/* Pessoas alcançadas */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Mais de 300 pessoas alcançadas"
            onClick={() => navigate('/#eventos')}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/#eventos') }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(3)}
            onBlur={() => setHovered(null)}
            style={{ background: '#fff', padding: 18, borderRadius: theme.radii.soft, textAlign: 'center', boxShadow: hovered === 3 ? '0 12px 30px rgba(0,0,0,0.12)' : '0 6px 18px rgba(0,0,0,0.04)', cursor: 'pointer', transition: 'box-shadow 200ms ease' }}
          >
            <div style={{ fontSize: 40, fontWeight: 900, color: theme.colors.primary }}>+300</div>
            <div style={{ marginTop: 8, color: theme.colors.text, fontWeight: 700 }}>pessoas alcançadas</div>
            <div style={{ marginTop: 6, color: theme.colors.text }}>Beneficiários diretos das obras e público atendido em eventos.</div>
          </div>
        </div>
      </section>

      {/* Mini-cards: Como Você Pode Ajudar */}
      <section style={{ marginTop: 18 }}>
        <h3 style={{ color: theme.colors.primary }}>Como Você Pode Ajudar</h3>
        <p style={{ color: theme.colors.text, maxWidth: 760 }}>Três formas simples de contribuir com o Instituto — escolha a que faz mais sentido para você.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>
          <div style={{ background: '#fff', padding: 14, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 24 }}>📦</div>
              <div>
                <div style={{ fontWeight: 700, color: theme.colors.primary }}>Doar materiais</div>
                <div style={{ color: theme.colors.text, marginTop: 6 }}>Cimento, revestimentos, portas e materiais de construção — itens muito citados nas nossas ações.</div>
                <div style={{ marginTop: 8 }}><a href="/ajudar?type=material#doacoes" style={{ color: theme.colors.primary, fontWeight: 700, textDecoration: 'none' }}>Saiba como</a></div>
              </div>
            </div>
          </div>

          <div style={{ background: '#fff', padding: 14, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 24 }}>🤝</div>
              <div>
                <div style={{ fontWeight: 700, color: theme.colors.primary }}>Ser voluntário</div>
                <div style={{ color: theme.colors.text, marginTop: 6 }}>Mãos à obra: profissionais e ajudantes são essenciais nas reformas e na execução dos projetos.</div>
                <div style={{ marginTop: 8 }}><a href="/ajudar?type=voluntario#doacoes" style={{ color: theme.colors.primary, fontWeight: 700, textDecoration: 'none' }}>Quero ajudar</a></div>
              </div>
            </div>
          </div>

          <div style={{ background: '#fff', padding: 14, borderRadius: theme.radii.soft, boxShadow: '0 6px 18px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ fontSize: 24 }}>🎪</div>
              <div>
                <div style={{ fontWeight: 700, color: theme.colors.primary }}>Participar de eventos</div>
                <div style={{ color: theme.colors.text, marginTop: 6 }}>Participe de ações como Hipismo e outras arrecadações que impulsionam nossos projetos.</div>
                <div style={{ marginTop: 8 }}><a href="/#eventos" style={{ color: theme.colors.primary, fontWeight: 700, textDecoration: 'none' }}>Ver eventos</a></div>
              </div>
            </div>
          </div>
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

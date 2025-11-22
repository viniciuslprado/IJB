import React from 'react'
import { Helmet } from 'react-helmet-async'
import { theme } from '../styles/theme'
import Carousel from '../components/ui/Carousel'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

// Helper row component (Zig-Zag layout)
const ProjectRow: React.FC<{
  title: string
  subtitle?: string
  description: React.ReactNode
  images: string[]
  isReversed?: boolean
}> = ({ title, subtitle, description, images, isReversed }) => (
  <article style={{
    display: 'flex',
    flexDirection: isReversed ? 'row-reverse' as const : 'row' as const,
    flexWrap: 'wrap',
    gap: 40,
    alignItems: 'center',
    marginBottom: 80
  }}>
    <div style={{ flex: '1 1 400px', minWidth: 300 }}>
      <h3 className="section-subtitle" style={{ color: theme.colors.primary, marginBottom: 4 }}>{title}</h3>
      {subtitle && (
        <span style={{ display: 'inline-block', background: '#F7F7F7', color: theme.colors.text, fontSize: 14, fontWeight: 600, padding: '4px 10px', borderRadius: 4, marginBottom: 16 }}>{subtitle}</span>
      )}
      <div style={{ lineHeight: 1.6, color: theme.colors.text }}>{description}</div>
    </div>

    <div style={{ flex: '1 1 400px', minWidth: 300 }}>
      <div style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: theme.radii.soft, overflow: 'hidden' }}>
        <Carousel images={images} height={320} autoPlayMs={0} />
      </div>
    </div>
  </article>
)

const Projetos: React.FC = () => {
  return (
    <main style={{ padding: '40px 20px', maxWidth: 1100, margin: '0 auto' }}>
      <Helmet>
        <title>Nossos Projetos | Instituto João de Barros</title>
        <meta name="description" content="Veja as obras e reformas realizadas pelo Instituto João de Barros para famílias em Franca-SP." />
      </Helmet>
      <section style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 className="main-hero-title" style={{ color: theme.colors.primary }}>Nossos Projetos</h1>
        <p style={{ maxWidth: 700, margin: '0 auto', color: theme.colors.text, fontSize: '1.1rem' }}>
          Transformamos vidas tijolo a tijolo. Conheça algumas das histórias que ajudámos a construir.
        </p>
      </section>

      <ProjectRow
        title="Reforma Jardim Aeroporto IV"
        subtitle="Obra 1"
        description={
          <p>Reforma de residência incluindo colocação de piso cerâmico, instalação de esquadrias e pintura. A iniciativa partiu de voluntárias locais; o IJB coordenou e concluiu as melhorias.</p>
        }
        images={['/fotos/primeira1.jpg', '/fotos/primeira2.jpg', '/fotos/primeira3.jpg', '/fotos/primeira4.jpg', '/fotos/primeira5.jpg', '/fotos/primeira6.jpg']}
      />

      <ProjectRow
        isReversed
        title="Casa da Sra. Raimunda"
        subtitle="Obra 2 • 2018"
        description={
          <>
            <p>Entregue em 23 de junho de 2018 para a Sra. Raimunda e seus sete filhos. O projeto incluiu adaptações de acessibilidade completas.</p>
            <p>Recebemos doações de revestimentos, granito e aquecedor solar. Agradecimento especial ao casal Teixeira e Martha pela doação do terreno.</p>
          </>
        }
        images={['/fotos/segunda1.jpg', '/fotos/segunda2.jpg', '/fotos/segunda3.jpg', '/fotos/segunda4.jpg', '/fotos/segunda5.jpg', '/fotos/segunda6.jpg']}
      />

      <ProjectRow
        title="Reconstrução Solidária"
        subtitle="Obra 3 • 2020"
        description={<p>Obra iniciada após mobilização da comunidade para atender uma família que vivia em barraco de lona. O IJB coordenou a captação de materiais e mão de obra. Entrega simbólica em 15/08/2020.</p>}
        images={['/fotos/terceira.jpg', '/fotos/terceira2.jpg', '/fotos/terceira3.jpg', '/fotos/terceira4.jpg', '/fotos/terceira5.jpg']}
      />

      <ProjectRow
        isReversed
        title="Casa da Sra. Raquel"
        subtitle="Obra 4 • Dez 2024"
        description={
          <>
            <p>Projeto focado em iluminação, ventilação e acessibilidade. Com apoio de parceiros em pisos e esquadrias, a obra foi entregue antes do Natal.</p>
            <p>Uma ampla varanda foi criada para convívio da família.</p>
          </>
        }
        images={['/fotos/quarta5.png', '/fotos/quarta2.png', '/fotos/quarta3.png', '/fotos/quarta4.png', '/fotos/quarta1.png']}
      />

      <ProjectRow
        title="Casa da Família Caroline"
        subtitle="Obra 5 • Dez 2023"
        description={
          <>
            <p>Iniciativa liderada pelo Grupo "Jantar por uma Boa Causa". Terreno doado pelos irmãos Pedrosa (Drogafarma).</p>
            <p>Casa ampla e ventilada, com espaços de estudo para as 3 crianças. Entregue antes do Natal graças à mobilização de voluntários.</p>
          </>
        }
        images={['/fotos/quinta4.png', '/fotos/quinta1.png', '/fotos/quinta2.png', '/fotos/quinta3.png', '/fotos/quinta5.png']}
      />

      <section style={{
        background: '#FFF8E1',
        border: `1px solid ${theme.colors.highlight}`,
        padding: 40,
        borderRadius: theme.radii.soft,
        textAlign: 'center',
        marginTop: 60
      }}>
        <h2 className="section-title" style={{ color: theme.colors.primary, marginTop: 0 }}>Campanhas em Andamento</h2>
        <p style={{ color: theme.colors.text, fontSize: 18, maxWidth: 700, margin: '16px auto' }}>
          Estamos sempre a arrecadar cimento e materiais básicos para a próxima obra. A sua ajuda constrói o próximo teto.
        </p>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 700, color: theme.colors.primary }}>
            <FaWhatsapp size={24} color="#25D366" /> (16) 99181-1811
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 700, color: theme.colors.primary }}>
            <FaEnvelope size={24} color={theme.colors.accent as string} /> ijbfranca@gmail.com
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projetos

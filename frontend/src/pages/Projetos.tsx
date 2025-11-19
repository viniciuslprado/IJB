import React from 'react'
import { theme } from '../styles/theme'
import Carousel from '../components/ui/Carousel'

const Projetos: React.FC = () => {

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ color: theme.colors.primary }}>Projetos</h1>

      <section style={{ marginTop: 28, maxWidth: 900 }}>
        <h2 id="obras" style={{ color: theme.colors.primary }}>Obras Realizadas</h2>

        <p style={{ color: theme.colors.text }}>
          O Instituto João de Barros realiza reformas e construções para famílias em situação de vulnerabilidade social.
          Selecionamos beneficiários por processo de triagem e atuamos por meio de doações de materiais, trabalho voluntário e
          acompanhamento técnico de arquitetos e engenheiros.
        </p>

        <p style={{ color: theme.colors.text }}>
          Abaixo apresentamos algumas obras e ações recentes.
        </p>

        <h3 style={{ color: theme.colors.primary, marginTop: 18 }}>Obra 1</h3>
        <p style={{ color: theme.colors.text }}>
          Reforma de residência no Jardim Aeroporto IV, incluindo colocação de piso cerâmico, instalação de esquadrias e pintura.
          A iniciativa partiu de voluntárias locais; o IJB coordenou e concluiu as melhorias. Agradecemos a todos os envolvidos.
        </p>
        <div style={{ marginTop: 8 }}>
          <Carousel images={[
            '/fotos/primeira1.jpg',
            '/fotos/primeira2.jpg',
            '/fotos/primeira3.jpg',
            '/fotos/primeira4.jpg',
            '/fotos/primeira5.jpg',
            '/fotos/primeira6.jpg'
          ]} height={300} autoPlayMs={0} />
        </div>

        <h3 style={{ color: theme.colors.primary, marginTop: 18 }}>Obra 2</h3>
        <p style={{ color: theme.colors.text }}>
          Em 23 de junho de 2018 entregamos a segunda casa do IJB à família da Sra. Raimunda, que tem sete filhos. O projeto,
          elaborado por arquitetos e engenheiros voluntários, incluiu adaptações de acessibilidade, como circulação para cadeira de rodas.
          Recebemos doações de revestimentos, granito, esquadrias e aquecedor solar, além do apoio de voluntários e empresas locais.
          Agradecemos especialmente ao casal Teixeira e Martha pela doação do terreno.
        </p>
        <div style={{ marginTop: 8 }}>
          <Carousel images={[
            '/fotos/segunda1.jpg',
            '/fotos/segunda2.jpg',
            '/fotos/segunda3.jpg',
            '/fotos/segunda4.jpg',
            '/fotos/segunda5.jpg',
            '/fotos/segunda6.jpg',
            '/fotos/segunda7.jpg',
            '/fotos/segunda8.jpg',
            '/fotos/segunda9.jpg'
          ]} height={300} autoPlayMs={0} />
        </div>

        <h3 style={{ color: theme.colors.primary, marginTop: 18 }}>Obra 3</h3>
        <p style={{ color: theme.colors.text }}>
          Obra iniciada após mobilização da comunidade para atender uma família que vivia em barraco de lona. O IJB coordenou a continuidade
          dos trabalhos, captando doações de materiais, mobilizando mão de obra e oferecendo suporte técnico. A entrega simbólica ocorreu em 15/08/2020.
        </p>
        <div style={{ marginTop: 8 }}>
          <Carousel images={['/fotos/terceira.jpg',
            '/fotos/terceira2.jpg',
            '/fotos/terceira3.jpg',
            '/fotos/terceira4.jpg',
            '/fotos/terceira5.jpg'
          ]} height={300} autoPlayMs={0} />
        </div>

        <h3 style={{ color: theme.colors.primary, marginTop: 18 }}>Obra 4</h3>
        <p style={{ color: theme.colors.text }}>
          Em 17 de dezembro de 2024 entregamos a reforma da casa da Sra. Raquel, beneficiando seus filhos e netos. O projeto,
          desenvolvido por arquitetos e engenheiros voluntários, priorizou iluminação, ventilação, acessibilidade e a criação de uma ampla varanda.
          Com o apoio de parceiros recebemos doações e descontos em pisos, revestimentos, portas, janelas, pintura e telhado, o que permitiu
          concluir a obra com qualidade e entregá‑la antes do Natal.
        </p>
        <p style={{ color: theme.colors.text }}>
          Agradecemos aos voluntários, às empresas doadoras e a todos os parceiros: sem vocês este projeto não seria possível.
        </p>
        <div style={{ marginTop: 8 }}>
          <Carousel images={['/fotos/quarta5.png',
            '/fotos/quarta2.png',
            '/fotos/quarta3.png',
            '/fotos/quarta4.png',
            '/fotos/quarta1.png'
          ]} height={300} autoPlayMs={0} />
        </div>

        <h3 style={{ color: theme.colors.primary, marginTop: 18 }}>Obra 5</h3>
        <p style={{ color: theme.colors.text }}>
          Em dezembro de 2023 entregamos a casa da família da Caroline e seus três filhos. A iniciativa foi liderada pelo Grupo "Jantar por uma Boa Causa",
          que indicou a família e organizou um jantar beneficente que arrecadou grande parte dos recursos. O terreno foi doado pelos irmãos Pedrosa, da Rede Drogafarma.
        </p>
        <p style={{ color: theme.colors.text }}>
          O projeto, elaborado por arquitetos e engenheiros voluntários, resultou em uma casa ampla e bem ventilada, com espaços adequados para estudo das crianças.
          Recebemos doações e descontos em pisos, revestimentos, portas, janelas, pintura e telhado, o que possibilitou a entrega antes do Natal.
        </p>
        <p style={{ color: theme.colors.text }}>
          Agradecemos ao Grupo "Jantar por uma Boa Causa", ao Grupo Drogafarma pela doação do terreno, às empresas doadoras e a todos os voluntários envolvidos.
        </p>
        <div style={{ marginTop: 8 }}>
          <Carousel images={['/fotos/quinta4.png',
          '/fotos/quinta1.png', 
            '/fotos/quinta2.png', 
            '/fotos/quinta3.png',  
            '/fotos/quinta5.png']} height={300} autoPlayMs={0} />
        </div>

        {/* Events moved to Home page */}

        <h3 style={{ color: theme.colors.primary, marginTop: 16 }}>Campanhas em andamento</h3>
        <p style={{ color: theme.colors.text }}>
          O IJB mantém campanhas contínuas para arrecadação de materiais — em especial cimento — e de recursos financeiros.
        </p>
        <p style={{ color: theme.colors.text }}><strong>Para colaborar ou obter informações:</strong> 📞 (16) 99181-1811 • <a href="mailto:ijbfranca@gmail.com">ijbfranca@gmail.com</a></p>
      </section>
    </main>
  )
}

export default Projetos

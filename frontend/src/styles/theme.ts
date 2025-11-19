// Paleta de cores centralizada para o projeto Instituto João de Barros
export const theme = {
  colors: {
    // Paleta atualizada conforme solicitado pelo usuário
    // Lista fornecida: #be5838, #411717, #532b2a, #678b64, #573c2c, #6a8e67, #e77b5b, #e96b46, #fbc046
    primary: '#532b2a', // tom de marrom profundo — usado para títulos/solidez
    primaryDark: '#411717',
    accent: '#be5838',
    secondary: '#678b64', // verde musgo atualizado
    brownWarm: '#573c2c',
    greenSoft: '#6a8e67',
    orangeSoft: '#e77b5b',
    orangeStrong: '#e96b46',
    highlight: '#fbc046', // usar como CTA (mostarda / destaque)
    text: '#2E2E2E',
    muted: '#6B6B6B'
  },
  radii: {
    soft: '12px'
  }
}

export type Theme = typeof theme

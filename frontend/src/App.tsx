import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Sobre from './pages/QuemSomos'
import Projetos from './pages/Projetos'
import ComoAjudar from './pages/ComoAjudar'
import NotFound from './pages/NotFound'
// Contato page removed — contact info is site-wide
// import ObrasRealizadas from './pages/ObrasRealizadas'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div className="max-w-[1280px] mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/ajudar" element={<ComoAjudar />} />
          {/* Rota Catch-all para 404 */}
          <Route path="*" element={<NotFound />} />
            {/* <Route path="/obras" element={<ObrasRealizadas />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

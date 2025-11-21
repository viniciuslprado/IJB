import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/QuemSomos'
import Projetos from './pages/Projetos'
import ComoAjudar from './pages/ComoAjudar'
// Contato page removed — contact info is now in the footer and site-wide
// import ObrasRealizadas from './pages/ObrasRealizadas'
import './App.css'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="site-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/ajudar" element={<ComoAjudar />} />
            {/* <Route path="/obras" element={<ObrasRealizadas />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

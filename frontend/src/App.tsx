import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import ComoAjudar from './pages/ComoAjudar'
import Contato from './pages/Contato'
// import ObrasRealizadas from './pages/ObrasRealizadas'
import './App.css'

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
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

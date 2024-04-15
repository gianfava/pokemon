import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Rotas from './pages/Rotas'
import Pokemon from './pages/Pokemon'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/rotas" element={<Rotas />} />
      <Route path="/pokemon/:name" element={<Pokemon />} /> // Rota dinâmica
    </Routes>
  )
}

export default RoutesApp

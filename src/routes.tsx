import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Produtos from './pages/Produtos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Produtos />} />
    <Route path="/restaurant/:id" element={<Produtos />} />
  </Routes>
)

export default Rotas

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} /> 
    </Routes>
  )
}

export default App

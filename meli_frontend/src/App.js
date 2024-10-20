import { useState } from 'react'
import './App.css'

import Form from './components/Form'

function App() {
  const [products, setProducts] = useState([])
  const [termoPesquisado, setTermoPesquisado] = useState('')
  const [precoMinimo, setPrecoMinimo] = useState('')
  const [precoMaximo, setPrecoMaximo] = useState('')
  const [condicao, setCondicao] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    setProducts([]) // Limpa a produtos antes de nova busca

    try {
      const response = await fetch(`http://localhost:3001/api/dados?termoPesquisado=${termoPesquisado}&precoMinimo=${precoMinimo}&precoMaximo=${precoMaximo}&condicao=${condicao}`)

      if (!response.ok) {
        throw new Error('Erro na busca')
      }

      const data = await response.json()
      console.log(data)
      if (data.results.length === 0) {
        setError('Nenhum produto encontrado com esses critérios.');
      } else {
        setProducts(data.results);
      }

    } catch (err) {
      setError('Erro ao buscar produtos. Tente novamente.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1>Produtos à Venda</h1>

      <Form
        handleSearch={handleSearch}
        setTermoPesquisado={setTermoPesquisado}
        setPrecoMinimo={setPrecoMinimo}
        setPrecoMaximo={setPrecoMaximo}
        setCondicao={setCondicao}
      />
      
      {loading && <p>Carregando...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {products.length > 0 ? (
        products.map(item => (
          <div key={item.id} style={{
            border: '1px solid grey',
            width: '600px',
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div>
              <img src={item.thumbnail} alt={item.title} height={100} />
            </div>
            <div style={{ width: '100%' }}>
              <h6>{item.id}</h6>
              <p>{item.title}</p>
              <p>R$ {item.price}</p>
              <p>{item.condition}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))
      ) : (
        !loading && <p>Não há produtos disponíveis.</p>
      )}
    </main>
  )
}

export default App

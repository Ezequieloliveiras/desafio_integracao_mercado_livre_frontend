import { useState } from 'react'
import './App.css'

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

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={termoPesquisado}
          onChange={(e) => setTermoPesquisado(e.target.value)}
          placeholder="Termo de pesquisa"
          required
        />
        <input
          type="number"
          value={precoMinimo}
          onChange={(e) => setPrecoMinimo(e.target.value)}
          placeholder="Preço Mínimo"
        />
        <input
          type="number"
          value={precoMaximo}
          onChange={(e) => setPrecoMaximo(e.target.value)}
          placeholder="Preço Máximo"
        />
        <select value={condicao} onChange={(e) => setCondicao(e.target.value)} required>
          <option value="">Escolha a condição do Produto</option>
          <option value="new">Novo</option>
          <option value="used">Usado</option>
          <option value="not_specified">Não especificado</option>
        </select>
        <button type="submit">Buscar</button>
      </form>

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

import { useState } from 'react'
import { Typography } from '@mui/material'

import FormSubmit from './components/Form.js'
import CardProduct from './components/CardProducts'
import InfoTitle from './components/InfoTitle.js'

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
      <Typography
        sx={{ margin: '50px 0px' }}
        variant='h4'
      >
        Produtos Mercado Livre
      </Typography>

      <FormSubmit
        handleSearch={handleSearch}
        setTermoPesquisado={setTermoPesquisado}
        setPrecoMinimo={setPrecoMinimo}
        setPrecoMaximo={setPrecoMaximo}
        setCondicao={setCondicao}
      />

      <InfoTitle
        loading={loading}
        error={error}
        products={products}
      />

      {
        products.map(item => (
          <CardProduct
            item={item}
          />
        ))
      }

    </main>
  )
}

export default App

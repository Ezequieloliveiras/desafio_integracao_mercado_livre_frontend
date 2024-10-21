import { useState } from 'react'
import { Typography } from '@mui/material'
import { searchProducts } from '../api/api.js'

import FormSubmit from '../components/Form.js'
import CardProduct from '../components/CardProducts.js'
import InfoTitle from '../components/InfoTitle.js'

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
    setProducts([])

    try {
      const results = await searchProducts(termoPesquisado, precoMinimo, precoMaximo, condicao)
      if (results.error) {
        // Exibe o erro retornado da API
        setError(results.error);
      } else {
        setProducts(results);
      }

    } catch (err) {
      setError('Erro ao buscar produtos. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <Typography sx={{ margin: '50px 0px' }} variant='h4'>Produtos Mercado Livre</Typography>

      <FormSubmit
        handleSearch={handleSearch}
        setTermoPesquisado={setTermoPesquisado}
        setPrecoMinimo={setPrecoMinimo}
        setPrecoMaximo={setPrecoMaximo}
        setCondicao={setCondicao}
        condicao={condicao}
      />

      <InfoTitle
        loading={loading}
        error={error}
        products={products}
      />

      {
        Array.isArray(products) && products.length > 0 ? (
          products.map(item => (
            <CardProduct
              item={item}
              key={item.id}
            />
          ))
        ) : (
          <></>
        )
      }

    </main>
  )
}

export default App

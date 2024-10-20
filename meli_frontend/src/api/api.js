import axios from 'axios'

const searchProducts = async (termoPesquisado, precoMinimo, precoMaximo, condicao) => {
  try {
    const response = await axios.get('http://localhost:3001/api/dados', {
      params: {
        termoPesquisado,
        precoMinimo,
        precoMaximo,
        condicao,
      },
    })

    return response.data.results // Retorna os resultados da API

  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    throw error // Propaga o erro para ser tratado no componente
  }
}


const getProductById = async (id) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/items/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}


export {
    searchProducts,
    getProductById
}

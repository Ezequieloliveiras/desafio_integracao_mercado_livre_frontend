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

    return response.data.results

  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    throw error 
  }
}

export {
    searchProducts,
}

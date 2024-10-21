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

    let errorMessage = ''
   
    // Verifica se a resposta do servidor está disponível
    if (error.response) {
      errorMessage = `Erro: ${error.response.data}`
    } else if (error.request) {
      // O pedido foi feito mas não houve resposta
      errorMessage = 'Solicitação feita, mas sem resposta recebida.'
    } else {
      // Algo aconteceu ao configurar a solicitação que acionou um erro
      errorMessage = `Erro ao configurar o pedido: ${error.message}`
    }
    
    return {error: errorMessage}
  }
}

export {
  searchProducts,
}

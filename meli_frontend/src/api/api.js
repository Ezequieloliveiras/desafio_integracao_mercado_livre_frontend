import axios from "axios";

const fetchProducts = async () => {
    try {
        const response = await axios("http://localhost:3001/api/dados")
        return response.data
        
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }

}
export default fetchProducts


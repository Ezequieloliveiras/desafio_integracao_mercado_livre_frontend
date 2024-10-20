import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
    const location = useLocation();
    const { product } = location.state || {};
console.log(product)
    if (!product) {
        return <Typography variant="h6">Produto não encontrado</Typography>; // Tratamento caso o produto não esteja definido
    }

    const teste = product.attributes
console.log('teste',teste)
    return (
        <Box sx={{ maxWidth: 800, margin: '20px auto', padding: '20px' }}>
            <Card>
                <CardMedia
                    component="img"
                    image={product.thumbnail}
                    alt={product.title}
                    sx={{ height: 300, objectFit: 'contain' }} // Ajuste a altura da imagem
                />
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Preço: R$ {product.price.toFixed(2)} {/* Formatação do preço */}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        Condição: {product.condition}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {product.brand}
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
                        Comprar
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProductDetail;

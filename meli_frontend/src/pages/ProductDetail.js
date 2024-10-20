import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent
} from '@mui/material'
import { useLocation } from 'react-router-dom'

function ProductDetail() {
    const location = useLocation()
    const { product } = location.state || {}
    const brandAttribute = product.attributes.find(attr => attr.id === "BRAND")
    const brandAttributeModel = product.attributes.find(attr => attr.id === "MODEL")

    if (!product || !product.attributes) {
        return <Typography variant="h6">Produto não encontrado</Typography>
    }

    return (

        <Box sx={{
            width: '100%',
            height: '100%',
            backgroundColor:'red',
            justifyContent: 'center',
            padding: '20px',
            display: 'block',
            background: ' rgba(0, 0, 0, .1)',
            flexDirection:'column'

        }}
        >
            <a href='/' style={{textDecoration:'none', fontWeight:'bold', color:'grey'}}>Página Inicial</a>

            <Card sx={{
                width: '900px',
                height: '500px',
                marginTop: '20px',
                margin:'0 auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    height: '100%'
                }}
                >

                    <Box sx={{
                        width: '50%',
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                    >
                        <Typography
                            variant="h6"
                            paddingBottom="30px"
                            component="div"
                            gutterBottom>
                            {product.title}
                        </Typography>

                        <CardMedia
                            component="img"
                            image={product.thumbnail}
                            alt={product.title}
                            sx={{
                                height: { xs: 200, md: 300 },  // Ajuste a altura para telas menores e maiores
                                width: { xs: '100%', md: '100%' },  // Tamanho da imagem
                                objectFit: 'contain'
                            }}
                        />
                    </Box>
                    <CardContent sx={{
                        flex: 1,
                        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',

                    }}>

                        <Typography
                            marginTop="35px"
                            variant="h6"
                            color="text.secondary"
                            gutterBottom>
                            Preço: R$ {product.price.toFixed(2)}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                        >
                            Condição: {product.condition}
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            gutterBottom
                        >
                            {product.description}
                        </Typography>

                        {brandAttribute && (
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                gutterBottom
                            >
                                Marca: {brandAttribute.value_name}
                            </Typography>
                        )}

                        {brandAttributeModel && (
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                gutterBottom
                            >
                                Modelo: {brandAttributeModel.value_name}
                            </Typography>
                        )}

                        <a href={product.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver produto no Mercado Livre
                        </a>

                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}

export default ProductDetail

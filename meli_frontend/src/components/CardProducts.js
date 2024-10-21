import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function CardProduct({ item }) {
    const navigate = useNavigate()

    const handleProductClick = () => {
        navigate(`/product/${item.id}`, { state: { product: item } })
    }

    return (
        <Card
            key={item.id}
            onClick={handleProductClick}
            sx={{
                boxShadow: '0px 0px 5px 0px grey',
                width: '600px',
                margin: '20px',
                padding: '10px',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }}
        >
            <CardMedia
                component="img"
                src={item.thumbnail}
                alt={item.title}
                height="100"
                sx={{ objectFit: 'contain', width: "200px" }}
            />
            <CardContent sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'left',
                flexDirection: 'column',
                alignItems: 'left',
                textAlign: 'left'
            }}>
                <Typography sx={{ color: 'grey' }} variant="p">{item.id}</Typography>
                <Typography sx={{ margin: '5px 0px' }} variant="h6">{item.title}</Typography>
                <Typography sx={{ margin: '5px 0px' }} variant="body1">R$ {item.price}</Typography>
                <Typography variant="body2" color='grey'>{item.condition === 'used' ? 'Usado': '' || item.condition === 'new' ? 'Novo' : ''}</Typography>
                <Typography variant="body2">{item.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardProduct

import { useParams } from "react-router-dom"
import { Box, Typography } from '@mui/material'

function ProductDetail() {
    const { id } = useParams()

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4">Produto ID: {id}</Typography>
        </Box>
    )
}

export default ProductDetail

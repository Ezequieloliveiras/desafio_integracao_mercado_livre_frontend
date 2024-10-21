import {
    Typography,
    CircularProgress,
    Box
} from '@mui/material'

function InfoTitle({ loading, error, products }) {

    return (
        <Box sx={{
            width: "600px",
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>

            <Box mt={2}
                display="flex"
                justifyContent="center"
            >
                {loading && <CircularProgress />}
                {error &&
                    <Typography color="error">
                        {error}
                    </Typography>
                }
            </Box>

            <Box
                mt={3}
                color="grey.500"
                display="flex"
                justifyContent="center"
            >
                {products.length === 0 && !loading && (
                    <Typography
                        variant="body1"
                    >
                        Pesquise por um produto.
                    </Typography>
                )}
            </Box>

            <Box >
                {products.length > 0 && (
                    <Typography
                        variant="body1"
                        textAlign="left"
                    >
                        Produtos Encontrados
                    </Typography>
                )}
            </Box>

        </Box>
    )
}

export default InfoTitle


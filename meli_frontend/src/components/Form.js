import {
    Grid2,
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Box
} from '@mui/material'


function Form({
    termoPesquisado,
    setTermoPesquisado,
    precoMinimo,
    setPrecoMinimo,
    precoMaximo,
    setPrecoMaximo,
    condicao,
    setCondicao,
    handleSearch
}) {
    return (
        <Box sx={{
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <Grid2
                container
                spacing={3}
                alignItems="center"
            >

                <Grid2 xs={12} md={4}>
                    <TextField
                        label="Termo de pesquisa"
                        value={termoPesquisado}
                        onChange={(e) => setTermoPesquisado(e.target.value)}
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid2>

                <Grid2 xs={12} md={4} sx={{ minWidth: 200 }}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Condição</InputLabel>
                        <Select
                            value={condicao}
                            onChange={(e) => setCondicao(e.target.value)}
                            label="Condição"
                            required
                        >
                            <MenuItem value="">Escolha a condição</MenuItem>
                            <MenuItem value="new">Novo</MenuItem>
                            <MenuItem value="used">Usado</MenuItem>
                            <MenuItem value="not_specified">Não especificado</MenuItem>
                        </Select>
                    </FormControl>
                </Grid2>

                <Grid2 xs={12} md={3}>
                    <TextField
                        label="Preço Mínimo"
                        type="number"
                        value={precoMinimo}
                        onChange={(e) => setPrecoMinimo(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid2>

                <Grid2 xs={12} md={3}>
                    <TextField
                        label="Preço Máximo"
                        type="number"
                        value={precoMaximo}
                        onChange={(e) => setPrecoMaximo(e.target.value)}
                        fullWidth
                        variant="outlined"
                    />
                </Grid2>

                <Grid2 xs={12} md={3}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit" onClick={handleSearch}>
                        Buscar
                    </Button>
                </Grid2>

            </Grid2>
        </Box>
    )
}

export default Form

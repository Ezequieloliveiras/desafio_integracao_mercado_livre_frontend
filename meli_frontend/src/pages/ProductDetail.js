import { useLocation } from 'react-router-dom'
import {
    Container,
    StyledBox,
    StyledLink,
    StyledCard,
    ImageContainer,
    ProductImage,
    StyledCardContent,
    StyledTypography,
    StyledTypographyTitle,
    StyledTypographyPrice,
} from '../styles/StyleProductDetails'

// componente de que renderiza a lista de produtos que é recebida via api
function ProductDetail() {
    const location = useLocation()
    const { product } = location.state || {}
    const brandAttribute = product?.attributes?.find((attr) => attr.id === 'BRAND')
    const brandAttributeModel = product?.attributes?.find((attr) => attr.id === 'MODEL')

    return (
        <Container>
            <StyledLink href="/">Página Inicial</StyledLink>
            <StyledCard>
                <StyledBox>
                    <ImageContainer>
                        <StyledTypographyTitle>
                            {product.title}
                        </StyledTypographyTitle>
                        <ProductImage
                            component="img"
                            image={product.thumbnail}
                            alt={product.title}
                        />
                    </ImageContainer>
                    <StyledCardContent>
                        <StyledTypographyPrice>
                            Preço: R$ {product.price.toFixed(2)}
                        </StyledTypographyPrice>
                        <StyledTypography>
                            Condição: {product.condition === 'used' ? 'Usado' : '' || product.condition === 'new' ? 'Novo' : ''}
                        </StyledTypography>
                        <StyledTypography>
                            {product.description}
                        </StyledTypography>
                        {brandAttribute && (
                            <StyledTypography>
                                Marca: {brandAttribute.value_name}
                            </StyledTypography>
                        )}
                        {brandAttributeModel && (
                            <StyledTypography>
                                Modelo: {brandAttributeModel.value_name}
                            </StyledTypography>
                        )}
                        <a href={product.permalink}
                            target="_blank"
                            rel="noopener noreferrer">
                            Ver produto no Mercado Livre
                        </a>
                    </StyledCardContent>
                </StyledBox>
            </StyledCard>
        </Container>
    )
}

export default ProductDetail

import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';

function Products() {
    return (
        <Container>
            {
                popularProducts.map(item => (
                    <Product key={item.id} item={item} />
                ))
            }

        </Container>
    )
}

export default Products;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1.25rem;
`

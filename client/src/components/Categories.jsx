import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';

function Categories() {
    return (
        <Container>
            {
                categories.map(category => (
                    <CategoryItem key={category.id} item={category} />
                ))
            }
        </Container>
    )
}

export default Categories;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
`
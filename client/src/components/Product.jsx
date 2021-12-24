import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components'

function Product({ item }) {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0, .2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

`

const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: .3125rem;
    min-width: 17.5rem;
    height: 21.875rem;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`

const Circle = styled.div`
    width: 12.5rem;
    aspect-ratio: 1;
    border-radius:50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height:75% ;
    z-index: 2;
`

const Icon = styled.div`
    width: 2.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;


    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
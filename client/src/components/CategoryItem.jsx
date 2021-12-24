import styled from 'styled-components'

function CategoryItem({ item }) {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	)
}

export default CategoryItem;

const Container = styled.div`
	flex: 1;
	margin: .1875rem;
	min-width: 17.5rem;
	height: 30rem;
	position: relative;
`
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #3f3f46;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Title = styled.h1`
	color: #fff;
	margin-bottom: 1.25rem;
`
const Button = styled.button`
	text-transform: uppercase;
	padding: .625rem;
	font-size: 1.25rem;
	background-color: white;
	cursor: pointer;
	border: 1px solid #0b2e2c;
	&:hover {
		color: inherit;
		background-color: #f8f8f8;
	}
`
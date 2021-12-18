import styled from "styled-components";

function Announcement() {
	return (
		<Container>
			<p>Super Deal! Free Shipping on orders above £50</p>
		</Container>
	)
}

export default Announcement;

const Container = styled.div`
	height: 1.875rem;
	background-color: teal;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-style: 1rem;
	font-weight: 500;
`
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

function Slider() {
	const [slideIndex, setSlideIndex] = useState(0)

	const handleClickArrow = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
		}
	}

	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClickArrow("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{
					sliderItems.map(item => (
						<Slide key={item.id} bg={item.bg}>
							<ImgContainer>
								<Image src={item.img} />
							</ImgContainer>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Description>{item.desc}</Description>
								<Button>Shop Now</Button>
							</InfoContainer>
						</Slide>
					))
				}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClickArrow("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	)
}

export default Slider;

const Container = styled.div`
	width: 100%;
	height: calc(900px - 20px);
	display: flex;
	background-color: #f0f2f5;
	position: relative;
	overflow: hidden;
`
const Arrow = styled.div`
	width: 3.125rem;
	height: 3.125rem;
	background-color: #e8e8e8;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${props => props.direction === "left" && "0.625rem"};
	right: ${props => props.direction === "right" && "0.625rem"};
	margin: auto;
	cursor: pointer;
	z-index: 2;
`

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: .5s ease-in-out;
`
const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`

const Image = styled.img`
	height: 100%;
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 3.125rem;
`

const Title = styled.h1`
	text-transform: uppercase;
	font-size: 4.375rem;
`

const Description = styled.p`
	text-transform: uppercase;
	margin: 1.875rem 0;
	font-size: 1.25rem;
	font-weight: 500;
	letter-spacing: 2px;
	line-height: 1.5;
	& span {
		color: #008080;
		font-weight: 700;
		font-size: 1.875rem;
	}
`

const Button = styled.button`
	text-transform: uppercase;
	padding: .625rem;
	font-size: 1.25rem;
	background-color: transparent;
	cursor: pointer;
	border: 1px solid #0b2e2c;
	&:hover {
		color: white;
		background-color: #0b2e2c;
	}
`
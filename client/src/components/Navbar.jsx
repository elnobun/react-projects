import { Badge } from "@material-ui/core"
import { LanguageRounded, Search, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN <LanguageRounded style={{ color: 'gray', fontSize: 16, marginLeft: 5 }} /></Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: 'gray', fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Adbelis.</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Signin</MenuItem>
					<MenuItem>
						<Badge badgeContent={3} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default navbar

// Container
const Container = styled.div`
	height: 3.75rem;
`

const Wrapper = styled.div`
	padding: .625rem 1.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

// Left 
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Language = styled.span`
	font-size: .875rem;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const SearchContainer = styled.div`
	border: .5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 1.5625rem;
	padding: .3125rem;
	flex-grow: 1;
	
`

const Input = styled.input`
	border: none;
	width: 100%;
	&:focus-visible {
		outline: none;
	}
`

// Center
const Center = styled.div`
	flex: 1;
`

const Logo = styled.h1`
	font-weight: bold;
	text-align: center;
`

// Right 
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	`

const MenuItem = styled.div`
	font-size: 1.125rem;
	margin-left: 1.5625rem;	
	cursor: pointer;
`
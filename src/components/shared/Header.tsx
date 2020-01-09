import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
	return (
		<Container>
			<Logo>
				<StyledLink to="/">Kelly Gorr</StyledLink>
			</Logo>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 100px;
`

const Logo = styled.h1`
	font-size: 2em;
`
const StyledLink = styled(Link)`
	font-family: 'mohaveregular';
`

import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
	return (
		<Container>
			<Link to='/'>Test 1</Link>
			<Link to='/contact'>Contact</Link>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;

	a {
		padding: 10px;
		background-color: aliceblue;
		margin: 0 10px;

		&:first-child {
			margin-left: 0;
		}
	}
`

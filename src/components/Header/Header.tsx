import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { PrimaryColor, PrimaryColorBg } from '../../GlobalStyles'

export const Header = (): JSX.Element => {
	return (
		<HeaderTitle>
			<StyledLink aria-label="logo" to="/">
				Photography
			</StyledLink>
		</HeaderTitle>
	)
}

const HeaderTitle = styled.h1`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 100px;
	padding-bottom: 10px;
`
const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;

	font-size: 1em;
	font-family: 'mohaveregular';
	letter-spacing: 0.05em;
	text-transform: uppercase;

	border: 2px solid transparent;

	&:focus {
		border: 2px solid ${PrimaryColor};
		box-shadow: inset 0px 0px 0px 5px ${PrimaryColorBg};
	}

	&:focus:not(:focus-visible) {
		border: 2px solid transparent;
		box-shadow: 0;
	}
`

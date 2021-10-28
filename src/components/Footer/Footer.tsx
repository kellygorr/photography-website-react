import styled from 'styled-components/macro'
import { PrimaryColor } from '../../GlobalStyles'

export interface IFooterList {
	title: string
	link: ILink
}

interface ILink {
	title: string
	link: string
}

const list: IFooterList[] = [
	{
		title: 'Contact/Resume',
		link: {
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/kellygorr/',
		},
	},
	{
		title: 'Portfolio',
		link: {
			title: 'kellygorr.com',
			link: 'https://kellygorr.com/',
		},
	},
	{
		title: 'Website',
		link: {
			title: 'github.com/kellygorr/photography-website-react',
			link: 'https://github.com/kellygorr/photography-website-react',
		},
	},
]

export const Footer = (): JSX.Element => (
	<Container>
		<List>
			{list.map((item: IFooterList) => (
				<ListItem key={item.title}>
					<StyledLink href={(item.link as ILink).link} rel="noopener noreferrer" target="_blank">
						<Header>{item.title}</Header>
						<URL>{(item.link as ILink).title}</URL>
					</StyledLink>
				</ListItem>
			))}
		</List>
	</Container>
)

const Container = styled.div`
	display: flex;
	width: 100%;
	padding: 40px 3% 25px 3%;

	font-size: 0.9em;
	background-color: #000000;
`

const List = styled.ul`
	transition: padding 0.5s ease-out;
`

const ListItem = styled.li`
	display: flex;
	margin-bottom: 15px;
`

const Header = styled.div``
const URL = styled.span``

const StyledLink = styled.a`
	&:before {
		content: ' ';
		position: absolute;
		pointer-events: none;
		top: 0px;
		left: -15px;
		bottom: 0px;
		transition: border-color 100ms ease-in, left 100ms ease-in;
		border-left: 2px solid transparent;
	}

	&:hover,
	&:focus {
		text-decoration: none;
		&:before {
			left: -8px;
			border-color: ${PrimaryColor};
		}
	}
`

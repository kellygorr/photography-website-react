import styled from 'styled-components/macro'

export interface IFooterList {
	title: string
	link: ILink
}

interface ILink {
	title: string
	URL: string
}

const list: IFooterList[] = [
	{
		title: 'Contact/Resume',
		link: {
			title: 'LinkedIn',
			URL: 'https://www.linkedin.com/in/kellygorr/',
		},
	},
	{
		title: 'Portfolio',
		link: {
			title: 'kellygorr.com',
			URL: 'https://kellygorr.com/',
		},
	},
	{
		title: 'Photography',
		link: {
			title: 'photography.kellygorr.com',
			URL: 'https://photography.kellygorr.com/',
		},
	},
	{
		title: 'Website',
		link: {
			title: 'github.com/kellygorr/photography-website-react',
			URL: 'https://github.com/kellygorr/photography-website-react',
		},
	},
]

export const Footer = (): JSX.Element => (
	<Container>
		<List>
			{list.map((item: IFooterList) => (
				<ListItem key={item.title}>
					<StyledLink href={item.link.URL} rel="noopener noreferrer" target="_blank">
						<Title>{item.title}</Title>
						{item.link.title}
					</StyledLink>
				</ListItem>
			))}
		</List>
	</Container>
)

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 270px;
	padding: 40px 3%;

	font-size: 0.9em;
	background-color: #000000;

	@media only screen and (max-width: 768px) {
		height: auto;
	}
`

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
`

const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	min-width: 50%;
`
const Title = styled.div`
	&:first-child {
		margin: 0;
	}
`
const StyledLink = styled.a`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding: 5px;
	border: 2px solid transparent;

	&:focus {
		border: 2px solid white;
	}

	&:focus:not(:focus-visible) {
		border: 2px solid transparent;
	}
`

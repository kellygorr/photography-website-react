import * as React from 'react'
import styled from 'styled-components/macro'
import { IFooterList } from './Footer'

interface IFooterListProps {
	list: IFooterList[]
}

export const FooterList: React.FC<IFooterListProps> = (props: IFooterListProps) => (
	<Container>
		{props.list.map((item: IFooterList) => (
			<FooterListItem key={item.title}>
				<Title>{item.title}</Title>
				{item.link.map((link) => (
					<div key={link.title}>
						{link.tags && <Tags>[{link.tags.map((tag, index) => (index === link.tags.length - 1 ? tag : tag + ', '))}]</Tags>}
						<StyledLink href={link.URL} rel="noopener noreferrer" target="_blank">
							{link.title}
						</StyledLink>
					</div>
				))}
			</FooterListItem>
		))}
	</Container>
)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
`
const FooterListItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`
const Title = styled.div`
	&:first-child {
		margin: 0;
	}
`
const StyledLink = styled.a`
	white-space: nowrap;
	&:hover {
		text-decoration: underline;
	}
`

const Tags = styled.div`
	width: 100%;
`

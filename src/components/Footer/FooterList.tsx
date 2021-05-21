import * as React from 'react'
import styled from 'styled-components/macro'
import { IListAccessibility, listAccessibility } from '../shared/listAccessibility'
import { IFooterList } from './Footer'

interface IFooterListProps {
	list: IFooterList[]
}

export const FooterList = (props: IFooterListProps) => {
	const ref = React.useRef<HTMLUListElement>(null)
	const [tabIndex, setTabIndex] = React.useState(0) // Start with index 0 instead of navigating the dom to determine the index of the active element on every tab

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const listProps: IListAccessibility = {
			e,
			listLength: props.list.length,
			tabIndex,
			setTabIndex,
			ref,
		}
		listAccessibility(listProps)
	}

	return (
		<List ref={ref} onKeyDown={handleKeyDown}>
			{props.list.map((item: IFooterList) => (
				<ListItem key={item.title}>
					<StyledLink href={item.link.URL} rel="noopener noreferrer" target="_blank">
						<Title>{item.title}</Title>

						{item.link.title}
					</StyledLink>
				</ListItem>
			))}
		</List>
	)
}

const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
`

const ListItem = styled.li`
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

	padding: 5px;
	border: 2px solid transparent;

	&:focus {
		border: 2px solid white;
	}

	&:focus:not(:focus-visible) {
		border: 2px solid transparent;
	}
`

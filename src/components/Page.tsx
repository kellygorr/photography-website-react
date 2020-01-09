import * as React from 'react'
import styled from 'styled-components/macro'
import { createRef } from 'react'
import { IProject } from './data/IProject'
import { Slideshow } from './shared/Slideshow'
import { Link } from 'react-router-dom'

interface IPageProps {
	index: number
	data: IProject | null
	bgColor: string
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}
	return (
		<Container style={{ backgroundColor: props.bgColor }}>
			<Slideshow index={props.index} title={props.data.title} data={props.data.photos} slideshowRef={createRef<HTMLDivElement>()} />
			<Header>
				<CloseButton to="/">X</CloseButton>
			</Header>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`
const Header = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 20px;
`
const CloseButton = styled(Link)``

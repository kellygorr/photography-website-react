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
	console.log('RENDER PAGE!!!')
	return (
		<Container style={{ backgroundColor: props.bgColor }}>
			<Header>
				<CloseButton to="/">X</CloseButton>
			</Header>
			<Slideshow index={props.index} title={props.data.title} data={props.data.photos} slideshowRef={createRef<HTMLDivElement>()} />
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`
const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 20px;
`
const CloseButton = styled(Link)``

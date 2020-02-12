import * as React from 'react'
import styled from 'styled-components/macro'
import { createRef } from 'react'
import { IProject } from './data/IProject'
import { Slideshow } from './shared/Slideshow'

interface IPageProps {
	index: number
	data: IProject | null
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}
	console.log('RENDER PAGE!!!')
	return (
		<Container>
			<Slideshow index={props.index} title={props.data.title} data={props.data.photos} slideshowRef={createRef<HTMLDivElement>()} />
		</Container>
	)
}

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`

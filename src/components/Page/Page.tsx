import styled from 'styled-components/macro'
import { createRef } from 'react'
import { IProject } from '../../data/IProject'
import { Slideshow } from './Slideshow'

interface IPageProps {
	index: number
	data: IProject | null
}

export const Page = (props: IPageProps): JSX.Element => {
	if (!props.data) {
		return null
	}
	return (
		<Container>
			<Slideshow index={props.index} title={props.data.title} data={props.data.photos} slideshowRef={createRef<HTMLUListElement>()} />
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

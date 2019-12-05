import * as React from 'react'
import styled from 'styled-components/macro'
import { IProject } from './data/IProject'
import { Slideshow } from './shared/Slideshow'

interface IPageProps {
	data: IProject | null
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}
	return (
		<Container>
			<Slideshow data={props.data.photos} />
		</Container>
	)
}

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`

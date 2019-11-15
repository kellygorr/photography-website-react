import * as React from 'react'
import styled from 'styled-components'
import { Thumbnail } from './Thumbnail'
import { projects } from './data'

export const Home: React.FC = () => {
	return (
		<Gallery>
			{projects.map((project) => (
				<Thumbnail key={project.title} project={project} />
			))}
		</Gallery>
	)
}

const Gallery = styled.div`
	grid-row: canvas;
	position: relative;
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	grid-gap: 10px;
`

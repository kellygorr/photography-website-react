import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './Thumbnail'
import { projects } from './data'

export const Home: React.FC = () => {
	return (
		<Gallery>
			{projects.map((project) => (
				<Row>
					<Title>{project.title}</Title>
					<Thumbnails>
						{project.photos.map((photo) => (
							<Thumbnail key={project.title} title={project.title} photo={photo} />
						))}
					</Thumbnails>
				</Row>
			))}
		</Gallery>
	)
}

const Gallery = styled.div`
	width: 100%;
	display: grid;
	grid-gap: 10px;
	padding-top: 0;
`
const Title = styled.h2``
const Row = styled.div`
	overflow: hidden;
`

const Thumbnails = styled.div`
	display: flex;
	align-items: center;

	/* Hide scrollbars  */
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0 !important;
	}
	/* Horizontal scrolling only */
	overflow-x: auto;
	overflow-y: hidden;

	-webkit-overflow-scrolling: touch;

	/* Space before first slide and after last slide  */
	&:before,
	&:after {
		content: '';
		height: 10px; /*  % does not work */
		min-width: 10%;
		width: 10%;
	}
`

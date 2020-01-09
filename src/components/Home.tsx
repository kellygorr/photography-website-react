import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './shared/Thumbnail'
import { projects } from './data'
import { darken } from 'polished'
import { PrimaryColorBg } from '../GlobalStyles'
export const Home: React.FC = () => {
	// console.log('CHANGE KEY TO PROJECT TITLE')
	return (
		<Gallery>
			{projects.map((project, index) => {
				const bgColor = darken(index / projects.length / projects.length, PrimaryColorBg)
				return (
					<Row key={index} style={{ backgroundColor: bgColor }}>
						<Title>{project.title}</Title>
						<Thumbnails>
							{project.photos.map((photo, index) => (
								<Thumbnail key={project.title + index} index={index} title={project.title} photo={photo} />
							))}
						</Thumbnails>
					</Row>
				)
			})}
		</Gallery>
	)
}

const Gallery = styled.div`
	width: 100%;
	display: grid;
`
const Title = styled.h2`
	padding: 10px;
	font-family: 'mohaveregular';
`
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
		min-width: 3%;
		width: 3%;
	}

	& a:last-child {
		margin-right: 0;
	}
`

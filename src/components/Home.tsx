import * as React from 'react'
import styled from 'styled-components/macro'
import { Thumbnail } from './shared/Thumbnail'
import { projects } from './data'

interface IHomeProps {
	isVisible: boolean
}
export const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
	return (
		<Gallery style={{ display: props.isVisible ? 'grid' : 'none' }}>
			{projects.map((project) => {
				return (
					<Row key={project.title}>
						<Title>{project.title}</Title>
						<Thumbnails>
							{project.photos.map((photo, index) => (
								<Thumbnail key={photo.img} index={index} title={project.title} photo={photo} />
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
	/* grid-auto-rows: 320px; */
`
const Title = styled.h2`
	padding: 0 10px 10px 3%;
	font-family: 'mohaveregular';
	font-size: 1.75em;
`
const Row = styled.div`
	overflow: hidden;
	padding-bottom: 10px;
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
	overflow-x: scroll;
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

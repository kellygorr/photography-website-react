import styled from 'styled-components/macro'
import { projects } from '../../data'
import { Thumbnails } from './Thumbnails'

interface IHomeProps {
	isVisible: boolean
}
export const Home = (props: IHomeProps): JSX.Element => {
	return (
		<Gallery style={{ display: props.isVisible ? 'grid' : 'none' }}>
			{projects.map((project) => {
				return (
					<Row key={project.title}>
						<Title>
							{project.title} - {project.photos.length}
						</Title>
						<Thumbnails title={project.title} photos={project.photos} />
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
	font-size: 1.5em;
	text-transform: uppercase;
`
const Row = styled.div`
	overflow: hidden;
	padding-bottom: 10px;
`

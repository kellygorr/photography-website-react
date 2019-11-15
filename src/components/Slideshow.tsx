import * as React from 'react'
import styled from 'styled-components'
import { ISlideshow } from './data/IProject'

interface IPageProps {
	data: ISlideshow[]
}

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}
	return (
		<Container>
			<Slides>
				{props.data.map((slide: ISlideshow) => (
					<Slide>
						<img src={slide.img} alt={slide.img} />
						{slide.caption && <Caption>{slide.caption}</Caption>}
					</Slide>
				))}
			</Slides>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 500px;
	max-height: 500px;
	background-color: gray;
	overflow: hidden;
`
const Slides = styled.div`
	position: absolute;
	display: inline-block;
`

const Slide = styled.div`
	width: 40%;
	max-width: 30%;

	img {
		width: 100%;
	}
`
const Caption = styled.div`
	width: 100%;
	text-align: center;
`

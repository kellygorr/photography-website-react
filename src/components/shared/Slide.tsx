import * as React from 'react'
import styled from 'styled-components/macro'

interface ISlideProps {
	image: string
}

export const Slide: React.FC<ISlideProps> = (props: ISlideProps) => {
	const [maxWidth, setMaxWidth] = React.useState(0)
	const [maxHeight, setMaxHeight] = React.useState(0)

	return (
		<SlideContainer>
			<img
				src={props.image}
				alt={props.image}
				style={{
					maxWidth: maxWidth > maxHeight ? maxWidth + 'px' : maxWidth / (maxHeight / maxWidth) + 'px',
					width: maxWidth ? '100%' : '0px',
				}}
				onLoad={(x) => {
					setMaxWidth(x.currentTarget.naturalWidth)
					setMaxHeight(x.currentTarget.naturalHeight)
				}}
			/>
		</SlideContainer>
	)
}

const SlideContainer = styled.div`
	min-width: 100%;
	scroll-snap-align: start;
	text-align: center;
	position: relative;
	border: 2px solid transparent;

	img {
		width: 0%;
	}
`

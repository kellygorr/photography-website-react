import * as React from 'react'
import styled from 'styled-components/macro'

interface ISlideProps {
	image: string
}

export const Slide: React.FC<ISlideProps> = (props: ISlideProps) => {
	return (
		<SlideContainer>
			<img src={props.image} alt={props.image} />
		</SlideContainer>
	)
}

const SlideContainer = styled.div`
	min-width: 100%;
	height: 100%;
	scroll-snap-align: start;
	text-align: center;
	position: relative;
	padding: 10px;

	img {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
`

// export const Slide: React.FC<ISlideProps> = (props: ISlideProps) => {
// 	return <SlideContainer style={{ backgroundImage: `url('${props.image}')` }} />
// }

// const SlideContainer = styled.div`
// 	min-width: 100%;
// 	height: 100%;
// 	scroll-snap-align: start;
// 	text-align: center;
// 	position: relative;
// 	border: 2px solid transparent;
// 	background-repeat: no-repeat;
// 	background-size: contain;
// 	background-position: center center;
// `

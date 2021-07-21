import { useInView } from 'react-intersection-observer'

import styled from 'styled-components/macro'
import { IPhotos } from '../../data/IProject'
import { Overlay, PrimaryColor, PrimaryColorBg } from '../../GlobalStyles'
import { AnimateIn } from '../Home/Thumbnail'

interface ISlideProps {
	slide: IPhotos
	infoVisible: boolean
	setInfoVisible: (isVisible: boolean) => void
}

export const Slide = (props: ISlideProps): JSX.Element => {
	const { slide, infoVisible, setInfoVisible } = props

	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<Container className="slide" ref={ref} role={'button'} aria-expanded={infoVisible} aria-label={slide.title} tabIndex={0}>
			{inView && (
				<Img
					srcSet={`
						${process.env.REACT_APP_IMAGE_640px}${slide.img} 640w,
						${process.env.REACT_APP_IMAGE_768px}${slide.img} 768w,
						${process.env.REACT_APP_IMAGE_1024px}${slide.img} 1024w,
						${process.env.REACT_APP_IMAGE_1366px}${slide.img} 1366w,
						${process.env.REACT_APP_IMAGE_1600px}${slide.img} 1600w,
						${process.env.REACT_APP_IMAGE_1920px}${slide.img} 1920w,
					`}
					src={process.env.REACT_APP_IMAGE_1920px + slide.img}
					alt={slide.title}
				/>
			)}
			{infoVisible && (
				<Info
					onClick={(e) => {
						e.stopPropagation()
						setInfoVisible(false)
					}}
				>
					<InfoContainer>
						<span>{slide.title}</span>
						<span>{slide.date && 'Date: ' + slide.date}</span>
						{slide.info &&
							Object.keys(slide.info).map((x, index) => (
								<span key={index}>
									<InfoTitle>{`${x}: `}</InfoTitle>
									<span>{slide.info[x]}</span>
								</span>
							))}
					</InfoContainer>
				</Info>
			)}
		</Container>
	)
}

const BORDER_WIDTH = 2

const Container = styled.li`
	min-width: 100%;
	height: 100%;
	scroll-snap-align: start;
	text-align: center;
	padding: 0px 10px;
	border: ${BORDER_WIDTH}px solid transparent;

	&:focus {
		border: ${BORDER_WIDTH}px solid ${PrimaryColor};
		box-shadow: inset 0px 0px 0px 5px ${PrimaryColorBg};
	}

	&:focus:not(:focus-visible) {
		border: ${BORDER_WIDTH}px solid transparent;
		box-shadow: 0;
	}

	img {
		cursor: pointer;
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
`

const Info = styled.div`
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${Overlay};
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: #000000;

	padding: 20px;
`

const InfoTitle = styled.span`
	text-transform: capitalize;
`

const Img = styled.img`
	opacity: 0;
	animation: 1s ease-out 0.5s ${AnimateIn};
	animation-fill-mode: forwards;
`

import * as React from 'react'

import styled from 'styled-components/macro'
import { IPhotos } from '../data/IProject'
import { Link } from 'react-router-dom'
import { Overlay } from '../../GlobalStyles'

interface IPageProps {
	index: number
	title: string
	data: IPhotos[]
	slideshowRef: React.RefObject<HTMLDivElement>
}

let slideshowRef: React.RefObject<HTMLDivElement>
let ScrollTimer: number
let InfoTimer: number

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	slideshowRef = props.slideshowRef
	const [active, setActive] = React.useState(props.index)
	const [info, setInfo] = React.useState(false)
	const [isScrolling, setIsScrolling] = React.useState(false)

	React.useEffect(() => {
		// animate to active slide, only when props.index changes
		if (slideshowRef && slideshowRef.current && props.index) {
			slideshowRef.current.scrollTo(window.innerWidth * active, 0)
		}
	}, [active, props.index])

	React.useEffect(() => {
		if (!isScrolling) {
			clearTimeout(ScrollTimer)
			clearTimeout(InfoTimer)
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	const handleIndexClick = () => {
		setInfo(!info)
	}

	return (
		<Container>
			<Header to="/">
				<Title> {props.title}</Title>
				<CloseButton>X</CloseButton>
			</Header>
			<Slides
				ref={slideshowRef}
				onScroll={() => {
					setInfo(false)
					clearTimeout(ScrollTimer)
					clearTimeout(InfoTimer)

					setIsScrolling(true)
					ScrollTimer = setTimeout(function() {
						setIsScrolling(false)
					}, 250)
				}}
				onPointerDown={() => {
					clearTimeout(InfoTimer)

					if (!info && !isScrolling) {
						InfoTimer = setTimeout(function() {
							setInfo(true)
						}, 250)
					}
				}}
				onPointerUp={(e) => {
					clearTimeout(InfoTimer)

					if (!info && !isScrolling) {
						handleSlideClick(e, active)
					}
				}}
			>
				{props.data.map((slide: IPhotos, index: number) => (
					<Slide key={index}>
						<img src={slide.img} alt={slide.img} />
						{info && (
							<Info
								onClick={(e) => {
									e.stopPropagation()
									setInfo(false)
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
					</Slide>
				))}
			</Slides>

			<Footer>
				<SlideIndex onClick={handleIndexClick}>
					{active + 1} <InfoCircle>i</InfoCircle> {props.data.length}
				</SlideIndex>
			</Footer>
		</Container>
	)
}

const findActiveSlide = (setActive: (index: number) => void): void => {
	if (slideshowRef && slideshowRef.current) {
		var slideArray = [].slice.call(slideshowRef.current.querySelectorAll('div'))
		const activeSlideIndex = slideArray.findIndex((el) => isElementCentered(el))
		if (activeSlideIndex >= 0) {
			setActive(activeSlideIndex)
		}
	}
}

const isElementCentered = (el: HTMLDivElement) => {
	var rect = el.getBoundingClientRect()
	const center = document.documentElement.clientWidth / 2
	return rect.left < center && center < rect.right
}

const handleSlideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, active: number): void => {
	const direction = e.clientX < window.innerWidth / 2 ? -1 : 1
	slideshowRef.current.scrollTo({ left: window.innerWidth * (active + direction), behavior: 'smooth' })
}

const HEADER_HEIGHT = 7
const HEADER_TEXT_HEIGHT = HEADER_HEIGHT - 2
const HEADER_CLOSE = HEADER_HEIGHT / 2

const FOOTER_HEIGHT = 5
const FOOTER_TEXT_HEIGHT = FOOTER_HEIGHT - 2

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const Header = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 3%;
	width: 100%;
`
const Title = styled.div`
	font-size: clamp(25px, ${HEADER_TEXT_HEIGHT}vh, 40px);
	font-family: 'mohaveregular';

	text-transform: uppercase;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const CloseButton = styled.div`
	display: flex;
	align-items: center;
	font-size: clamp(18px, ${HEADER_CLOSE}vh, 30px);
`

const Slides = styled.div`
	display: flex;
	align-items: center;
	flex: 1;

	width: 100%;
	/* Hide scrollbars  */
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0 !important;
	}
	/* Horizontal scrolling only */
	overflow: hidden;
	overflow-x: scroll;
	overflow-y: hidden;
	/* snap mandatory on horizontal axis  */
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
`

const Slide = styled.div`
	min-width: 100%;
	height: 100%;
	scroll-snap-align: start;
	text-align: center;
	padding: 0px 10px;

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

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 3%;
	width: 100%;
`

const SlideIndex = styled.div`
	cursor: pointer;
	display: flex;
	font-size: clamp(18px, ${FOOTER_TEXT_HEIGHT}vh, 30px);
	align-items: center;
`

const InfoCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 8px;
	width: 20px;
	height: 20px;
	border-radius: 100%;

	color: black;
	background-color: white;
	font-size: 15px;
	font-weight: bold;
`

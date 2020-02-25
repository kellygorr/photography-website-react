import * as React from 'react'

import styled from 'styled-components/macro'
import { IPhotos } from '../data/IProject'
import { Link } from 'react-router-dom'
import { PrimaryColorBg } from '../../GlobalStyles'

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
	const [activeInfo, setActiveInfo] = React.useState(null)
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

	return (
		<Container>
			<Header to="/">
				<Title> {props.title}</Title>
				<CloseButton>X</CloseButton>
			</Header>
			<Slides
				ref={slideshowRef}
				onScroll={() => {
					setActiveInfo(null)
					clearTimeout(ScrollTimer)
					clearTimeout(InfoTimer)

					setIsScrolling(true)
					ScrollTimer = setTimeout(function() {
						setIsScrolling(false)
					}, 250)
				}}
				onPointerDown={() => {
					clearTimeout(InfoTimer)

					if (!activeInfo && activeInfo !== 0 && !isScrolling) {
						InfoTimer = setTimeout(function() {
							setActiveInfo(active)
						}, 250)
					}
				}}
				onPointerUp={(e) => {
					clearTimeout(InfoTimer)

					if (!activeInfo && activeInfo !== 0 && !isScrolling) {
						handleSlideClick(e, active)
					}
				}}
			>
				{props.data.map((slide: IPhotos, index: number) => (
					<Slide key={index}>
						<img src={slide.img} alt={slide.img} />
						{activeInfo === index && (
							<Info
								onClick={(e) => {
									e.stopPropagation()
									setActiveInfo(null)
								}}
							>
								<InfoBackground />
								<InfoContainer>
									<span>{slide.title}</span>
									<span>{slide.date && 'Date: ' + slide.date}</span>
									<span>{slide.camera && 'Camera: ' + slide.camera}</span>
									<span>{slide.lens}</span>
								</InfoContainer>
							</Info>
						)}
					</Slide>
				))}
			</Slides>

			<Footer>
				<SlideIndex>
					{active + 1} <Subscript>of</Subscript> {props.data.length}
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
const HEADER_HEIGHT_OFFSET = HEADER_HEIGHT - 1
const HEADER_CLOSE = HEADER_HEIGHT / 2

const FOOTER_HEIGHT = 5
const FOOTER_TEXT_HEIGHT = FOOTER_HEIGHT - 2
const FOOTER_SUBTEXT_HEIGHT = FOOTER_TEXT_HEIGHT / 1.5

const FOOTER_HEADER_HEIGHT = HEADER_HEIGHT + FOOTER_HEIGHT

const Container = styled.div`
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const Header = styled(Link)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: ${HEADER_HEIGHT}vh;
	width: 100%;
`
const Title = styled.div`
	flex: 1;
	height: ${HEADER_TEXT_HEIGHT}vh;
	line-height: ${HEADER_HEIGHT_OFFSET}vh;
	font-size: ${HEADER_TEXT_HEIGHT}vh;
	font-family: 'mohaveregular';

	text-transform: uppercase;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 3%;
`

const CloseButton = styled.div`
	padding: 10px 3% 10px 10px;
	display: flex;
	align-items: center;
	font-size: ${HEADER_CLOSE}vh;
`

const Slides = styled.div`
	height: calc(100vh - ${FOOTER_HEADER_HEIGHT}vh);
	width: 100%;
	display: flex;
	align-items: center;
	width: inherit;
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
`
const InfoBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: inherit;
	height: inherit;
	background-color: ${PrimaryColorBg};
	opacity: 0.5;
`
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: #000000;

	padding: 20px;
`

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${FOOTER_HEIGHT}vh;
	padding: 0 3%;
	width: 100%;
`

const SlideIndex = styled.div`
	display: flex;
	font-size: ${FOOTER_TEXT_HEIGHT}vh;
`
const Subscript = styled.div`
	font-size: ${FOOTER_SUBTEXT_HEIGHT}vh;
	padding: 0 8px;
	display: flex;
	align-items: center;
`

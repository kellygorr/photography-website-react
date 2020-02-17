import * as React from 'react'

import styled from 'styled-components/macro'
import { IPhotos } from '../data/IProject'
import { Slide } from './Slide'
import { Link } from 'react-router-dom'

interface IPageProps {
	index: number
	title: string
	data: IPhotos[]
	slideshowRef: React.RefObject<HTMLDivElement>
}

let slideshowRef: React.RefObject<HTMLDivElement>
let ScrollTimer: number

export const Slideshow: React.FC<IPageProps> = (props: IPageProps) => {
	slideshowRef = props.slideshowRef
	const [active, setActive] = React.useState(props.index)
	const [isScrolling, setIsScrolling] = React.useState(false)

	React.useEffect(() => {
		// animate to active slide, only when props.index changes
		if (slideshowRef && slideshowRef.current && props.index) {
			slideshowRef.current.scrollTo(window.innerWidth * active, 0)
		}
	}, [active, props.index])

	React.useEffect(() => {
		if (!isScrolling) {
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	return (
		<Container>
			<Header>
				<Title> {props.title}</Title>
				<CloseButton to="/">X</CloseButton>
			</Header>
			<Slides
				ref={slideshowRef}
				onScroll={() => {
					setIsScrolling(true)
					clearTimeout(ScrollTimer)

					ScrollTimer = setTimeout(function() {
						setIsScrolling(false)
					}, 250)
				}}
				onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleSlideClick(e, active)}
			>
				{props.data.map((slide: IPhotos) => (
					<Slide key={slide.img} image={slide.img} />
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

const HEADER_HEIGHT = 9
const HEADER_TEXT_HEIGHT = HEADER_HEIGHT - 1
const HEADER_HEIGHT_OFFSET = HEADER_HEIGHT + 1

const FOOTER_HEIGHT = 7
const FOOTER_TEXT_HEIGHT = FOOTER_HEIGHT - 4
const FOOTER_SUBTEXT_HEIGHT = FOOTER_TEXT_HEIGHT / 2
const FOOTER_HEIGHT_OFFSET = FOOTER_HEIGHT - 4

const FOOTER_HEADER_HEIGHT = HEADER_HEIGHT + FOOTER_HEIGHT

const Container = styled.div`
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: ${HEADER_HEIGHT}vh;
	width: 100%;
	padding: 0 0 0 3%;
	background-color: #000000;
`
const Title = styled.div`
	overflow: hidden;
	height: ${HEADER_TEXT_HEIGHT}vh;
	line-height: ${HEADER_HEIGHT_OFFSET}vh;
	font-size: ${HEADER_TEXT_HEIGHT}vh;
	font-family: 'mohaveregular';

	text-transform: uppercase;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const CloseButton = styled(Link)`
	display: flex;
	align-items: center;
	background-color: #000000;
	height: 100%;
	padding: 10px 20px 10px 10px;
	border-radius: 2px;
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
	overflow-x: auto;
	overflow-y: hidden;
	/* snap mandatory on horizontal axis  */
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
`

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${FOOTER_HEIGHT}vh;
	width: 100%;
	padding: 0 3%;

	text-align: center;
	background-color: #000000;
`
const SlideIndex = styled.div`
	display: flex;
	overflow: hidden;
	/* height: ${FOOTER_TEXT_HEIGHT}vh; */
	/* line-height: ${FOOTER_HEIGHT_OFFSET}vh; */
	font-size: ${FOOTER_TEXT_HEIGHT}vh;
	/* font-family: 'mohaveregular'; */
`
const Subscript = styled.div`
	font-size: ${FOOTER_SUBTEXT_HEIGHT}vh;
	padding: 0 5px;
	display: flex;
	align-items: center;
`

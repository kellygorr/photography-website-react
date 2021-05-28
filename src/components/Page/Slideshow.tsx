import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { IPhotos } from '../../data/IProject'
import { Link, useHistory } from 'react-router-dom'
import { Slide } from './Slide'
import { PrimaryColor, PrimaryColorBg } from '../../GlobalStyles'
import { ISlideshowAccessibility, slideshowAccessibility } from '../shared/slideshowAccessibility'

interface IPageProps {
	index: number
	title: string
	data: IPhotos[]
	slideshowRef: React.RefObject<HTMLUListElement>
}

let slideshowRef: React.RefObject<HTMLUListElement>
let ScrollTimer: number
let InfoTimer: number

export const Slideshow = (props: IPageProps): JSX.Element => {
	const history = useHistory()
	slideshowRef = props.slideshowRef
	const [active, setActive] = useState(props.index)
	const [infoVisible, setInfoVisible] = useState(false)
	const [isScrolling, setIsScrolling] = useState(false)

	useEffect(() => {
		// animate to active slide, only when props.index changes
		if (slideshowRef && slideshowRef.current && active) {
			slideshowRef.current.scrollTo(window.innerWidth * active, 0)
		}
	}, [active])

	useEffect(() => {
		if (!isScrolling) {
			clearTimeout(ScrollTimer)
			clearTimeout(InfoTimer)
			findActiveSlide(setActive)
		}
	}, [isScrolling])

	const handleIndexClick = () => {
		setInfoVisible(!infoVisible)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const accessibilityProps: ISlideshowAccessibility = {
			e,
			activeIndex: active,
			listLength: props.data.length,
			ref: slideshowRef,
		}
		slideshowAccessibility(accessibilityProps)

		if (e.key === 'Escape') {
			history.push('/')
		} else if (e.key === 'Enter' && (e.target as HTMLElement).className.includes('slide')) {
			handleIndexClick()
		}
	}

	return (
		<Container onKeyDown={handleKeyDown}>
			<Header to="/" id="slide-title">
				<Title> {props.title}</Title>
				<CloseButton>
					<span aria-hidden>X</span> <HiddenA11y>Close button</HiddenA11y>
				</CloseButton>
			</Header>
			<Slides
				ref={slideshowRef}
				tabIndex={-1}
				onScroll={() => {
					setInfoVisible(false)
					clearTimeout(ScrollTimer)
					clearTimeout(InfoTimer)

					setIsScrolling(true)
					ScrollTimer = setTimeout(() => {
						setIsScrolling(false)
					}, 250)
				}}
				onPointerDown={() => {
					clearTimeout(InfoTimer)

					if (!infoVisible && !isScrolling) {
						InfoTimer = setTimeout(() => {
							setInfoVisible(true)
						}, 250)
					}
				}}
				onPointerUp={(e) => {
					clearTimeout(InfoTimer)

					if (!infoVisible && !isScrolling) {
						handleSlideClick(e, active)
					}
				}}
			>
				{props.data.map((slide: IPhotos) => (
					<Slide slide={slide} key={slide.img} infoVisible={infoVisible} setInfoVisible={setInfoVisible} />
				))}
			</Slides>

			<Footer>
				<SlideIndex id="slide-info" onClick={handleIndexClick} tabIndex={0} aria-expanded={infoVisible} aria-label={'slide info'}>
					{active + 1}
					<InfoCircle>i</InfoCircle>
					{props.data.length}
				</SlideIndex>
			</Footer>
		</Container>
	)
}

const findActiveSlide = (setActive: (index: number) => void): void => {
	if (slideshowRef && slideshowRef.current) {
		const slideArray = [].slice.call(slideshowRef.current.querySelectorAll('li'))
		const activeSlideIndex = slideArray.findIndex((el) => isElementCentered(el))

		if (activeSlideIndex >= 0) {
			setActive(activeSlideIndex)
		}
	}
}

const isElementCentered = (el: HTMLUListElement) => {
	const rect = el.getBoundingClientRect()
	const center = document.documentElement.clientWidth / 2
	return rect.left < center && center < rect.right
}

const handleSlideClick = (e: React.MouseEvent<HTMLUListElement, MouseEvent>, active: number): void => {
	const direction = e.clientX < window.innerWidth / 2 ? -1 : 1
	slideshowRef.current.scrollTo({ left: window.innerWidth * (active + direction), behavior: 'smooth' })
}

const HEADER_HEIGHT = 7
const HEADER_TEXT_HEIGHT = HEADER_HEIGHT - 2
const HEADER_CLOSE = HEADER_HEIGHT / 2

const FOOTER_HEIGHT = 5
const FOOTER_TEXT_HEIGHT = FOOTER_HEIGHT - 2

const BORDER_WIDTH = 2

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
	padding: 0 2vw;
	width: 100%;
	height: 8vh;
	min-height: 40px;
	border: ${BORDER_WIDTH}px solid transparent;

	&:focus {
		border: ${BORDER_WIDTH}px solid ${PrimaryColor};
		box-shadow: inset 0px 0px 0px 5px ${PrimaryColorBg};
	}

	&:focus:not(:focus-visible) {
		border: ${BORDER_WIDTH}px solid transparent;
		box-shadow: 0;
	}
`
const Title = styled.div`
	display: flex;
	align-items: center;
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

const Slides = styled.ul`
	display: flex;
	align-items: center;
	flex: 1;

	width: 100%;
	/* Hide scrollbars  */
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0 !important;
		display: none;
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
	width: 100%;
	min-height: 8vh;
	padding: 5px 2vw;
	min-height: 40px;
`

const SlideIndex = styled.button`
	cursor: pointer;
	display: flex;
	font-size: clamp(18px, ${FOOTER_TEXT_HEIGHT}vh, 30px);
	align-items: center;
	border: ${BORDER_WIDTH}px solid transparent;
	padding: 5px;

	&:focus {
		border: ${BORDER_WIDTH}px solid ${PrimaryColor};
		box-shadow: inset 0px 0px 0px 5px ${PrimaryColorBg};
	}

	&:focus:not(:focus-visible) {
		border: ${BORDER_WIDTH}px solid transparent;
		box-shadow: 0;
	}
`

const InfoCircle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 15px;
	width: 20px;
	height: 20px;
	border-radius: 100%;

	color: black;
	background-color: white;
	font-size: 15px;
	font-weight: bold;
`

export const HiddenA11y = styled.span`
	border: 0px;
	clip: rect(0px, 0px, 0px, 0px);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0px;
	position: absolute;
	width: 1px;
	white-space: nowrap;
	overflow-wrap: normal;
`

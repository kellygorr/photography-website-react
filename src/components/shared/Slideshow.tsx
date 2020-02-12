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
			<Slides
				ref={slideshowRef}
				onScroll={() => {
					setIsScrolling(true)
					clearTimeout(ScrollTimer)

					ScrollTimer = setTimeout(function() {
						setIsScrolling(false)
					}, 250)
				}}
			>
				{props.data.map((slide: IPhotos) => (
					<Slide key={slide.img} image={slide.img} />
				))}
			</Slides>

			<SlideHeader>
				<CloseButton to="/">X</CloseButton>
			</SlideHeader>

			<SlideFooter>
				<SlideIndex>
					{props.title} {active + 1} of {props.data.length}
				</SlideIndex>
				<Directions>(Scroll to navigate)</Directions>
			</SlideFooter>
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

const Container = styled.div`
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const SlideHeader = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	padding: 20px 0;
`
const CloseButton = styled(Link)`
	display: flex;
	align-items: center;
	background-color: #000000;
	height: 100%;
	padding: 10px 20px 10px 10px;
`

const Slides = styled.div`
	height: calc(100vh - 100px);
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

const SlideIndex = styled.div``

const Directions = styled.div``

const SlideFooter = styled.div`
	height: 100px;
	width: 100%;
	text-align: center;
	padding: 20px;
`

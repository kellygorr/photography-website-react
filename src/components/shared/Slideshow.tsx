import * as React from 'react'

import styled from 'styled-components/macro'
import { IPhotos } from '../data/IProject'
import { Slide } from './Slide'

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

	// console.log('CHANGE KEY TO IMG NAME')
	return (
		<>
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
					{props.data.map((slide: IPhotos, index) => (
						<Slide key={index} image={slide.img} />
					))}
				</Slides>
			</Container>
			<SlideFooter>
				<SlideIndex>
					{props.title} {active + 1} of {props.data.length}
				</SlideIndex>
				<Directions>(Scroll to navigate)</Directions>
			</SlideFooter>
		</>
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
	display: flex;
	flex: 1;
	align-items: center;
	width: 100%;
`
const Slides = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	/* Hide scrollbars  */
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0 !important;
	}
	/* Horizontal scrolling only */
	overflow-x: auto;
	overflow-y: hidden;
	/* snap mandatory on horizontal axis  */
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
`

const SlideIndex = styled.div``

const Directions = styled.div``
const SlideFooter = styled.div`
	width: 100%;
	text-align: center;
	padding: 20px;
`

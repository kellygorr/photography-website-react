export interface ISlideshowAccessibility {
	e: React.KeyboardEvent
	activeIndex: number
	listLength: number
	ref: React.RefObject<HTMLUListElement>
}
export const slideshowAccessibility = (props: ISlideshowAccessibility): void => {
	const { e, activeIndex, listLength, ref } = props
	let newIndex

	switch (e.key) {
		case 'ArrowUp':
		case 'ArrowLeft':
			e.preventDefault()
			newIndex = activeIndex - 1
			break
		case 'ArrowDown':
		case 'ArrowRight':
			e.preventDefault()
			newIndex = activeIndex + 1
			break
		case 'Home':
			e.preventDefault()
			newIndex = 0
			break
		case 'End':
			e.preventDefault()
			newIndex = listLength - 1
			break
		case 'Tab': {
			let element: HTMLElement
			if (document.activeElement.classList.contains('slide')) {
				element = e.shiftKey ? document.getElementById('slide-title') : document.getElementById('slide-info')
			} else if ((document.activeElement.id === 'slide-info' && e.shiftKey) || document.activeElement.id === 'slide-title') {
				element = document.getElementsByClassName('slide')[activeIndex] as HTMLElement
			}

			if (element) {
				e.preventDefault()
				element.focus()
			}
			break
		}
		default:
			break
	}
	if (newIndex >= 0) {
		const element = ref?.current?.children[newIndex] as HTMLElement
		if (element) {
			element.focus()
		}
	}
}

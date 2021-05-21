import * as React from 'react'
import styled from 'styled-components/macro'
import { IPhotos } from '../../data/IProject'
import { IListAccessibility, listAccessibility } from '../shared/listAccessibility'
import { Thumbnail } from './Thumbnail'

interface IThumbnailProps {
	title: string
	photos: IPhotos[]
}

export const Thumbnails = (props: IThumbnailProps) => {
	const ref = React.useRef<HTMLUListElement>(null)
	const [tabIndex, setTabIndex] = React.useState(0) // Start with index 0 instead of navigating the dom to determine the index of the active element on every tab

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const listProps: IListAccessibility = {
			e,
			listLength: props.photos.length,
			tabIndex,
			setTabIndex,
			ref,
		}
		listAccessibility(listProps)
	}

	return (
		<List ref={ref} tabIndex={-1} onKeyDown={handleKeyDown}>
			{props.photos.map((photo, index) => (
				<Thumbnail key={photo.img} index={index} title={props.title} photo={photo} />
			))}
		</List>
	)
}

const List = styled.ul`
	display: flex;
	align-items: center;

	/* Hide scrollbars  */
	overflow: -moz-scrollbars-none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0 !important;
	}
	/* Horizontal scrolling only */
	overflow-x: auto;
	overflow-y: hidden;

	-webkit-overflow-scrolling: touch;

	/* Space before first slide and after last slide  */
	&:before,
	&:after {
		content: '';
		height: 10px; /*  % does not work */
		min-width: 3%;
		width: 3%;
	}

	& a:last-child {
		margin-right: 0;
	}
`

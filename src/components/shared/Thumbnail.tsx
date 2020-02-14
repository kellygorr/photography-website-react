import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IPhotos } from '../data/IProject'
import { LoadingColor } from '../../GlobalStyles'

interface IThumbnailProps {
	index: number
	title: string
	photo: IPhotos
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { photo, title, index } = props
	return (
		<ThumbnailContainer
			to={{
				pathname: `page/${title.replace(' ', '').toLowerCase()}`,
				state: {
					index: index,
				},
			}}
			style={{ backgroundImage: `url('${photo.thumbnail}')` }}
		/>
	)
}
const ThumbnailContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	background-size: cover;
	background-position: center;
	background-color: ${LoadingColor};

	min-width: 43%;

	height: 33vw;
	max-height: 250px;
	max-width: 250px;
	margin-right: 10px;

	@media (min-width: 895px) {
		min-width: 350px;
	}
`

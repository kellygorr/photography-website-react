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

	min-width: 60%;
	width: 60vw;
	height: 50vw;
	min-height: 100px;
	margin-right: 20px;

	@media (min-width: 450px) {
		min-width: 43%;
		width: 43vw;
		height: 33vw;
	}

	@media (min-width: 700px) {
		min-width: 35%;
		width: 35vw;
		height: 25vw;
	}

	@media (min-width: 1000px) {
		min-width: 350px;
		width: 250px;
		height: 250px;
	}
`

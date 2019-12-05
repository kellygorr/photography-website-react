import * as React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IPhotos } from './data/IProject'

interface IThumbnailProps {
	title: string
	photo: IPhotos
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { photo, title } = props
	return (
		<ThumbnailContainer to={`page/${title.replace(' ', '').toLowerCase()}`}>
			<ThumbnailStyled style={{ backgroundImage: `url('${photo.thumbnail}')` }}>{<Button> </Button>}</ThumbnailStyled>
			<Details>{photo.title}</Details>
		</ThumbnailContainer>
	)
}
const ThumbnailContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	min-width: 200px;
	width: 200px;
	height: 150px;
`

const ThumbnailStyled = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-color: green;
	border: 1px solid pink;
`

const Button = styled.div``
const Details = styled.div`
	width: 100%;
	text-align: center;
	padding: 10px 0;
`

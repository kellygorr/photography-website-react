import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'chenonceaux_castle_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'France/france_paris_1_kellygorr.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'tower2_1000wordsart.png'

export const france: IProject = {
	title: 'France',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Chenonceaux Castle',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Paris',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'Paris',
			thumbnail: img3,
			img: img3,
		},
	],
}

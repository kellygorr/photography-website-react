import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'madrid_street_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'Sinagoga_La_Blanca_1000wordsart.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'toledo_cathedral_1000wordsart.png'

export const spain: IProject = {
	title: 'Spain',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Toledo',
			thumbnail: img3,
			img: img3,
		},
		{
			title: 'Madrid',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Sinagoga La Blanca',
			thumbnail: img2,
			img: img2,
		},
	],
}

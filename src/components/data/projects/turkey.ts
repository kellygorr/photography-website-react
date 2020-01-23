import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'aphrodisias_turkey_1_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'blue_mosque_1_1000wordsart.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'blue_mosque_2_1000wordsart.png'
const img4 = process.env.REACT_APP_IMAGE_URL + 'istanbul_column_1_1000wordsart.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'istanbul_column_2_1000wordsart.png'
const img6 = process.env.REACT_APP_IMAGE_URL + 'medusa_didyma_1000wordsart.png'

export const turkey: IProject = {
	title: 'Turkey',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Aphrodisias',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Blue Mosque',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'Blue Mosque',
			thumbnail: img3,
			img: img3,
		},
		{
			title: 'Istanbul',
			thumbnail: img4,
			img: img4,
		},
		{
			title: 'Istanbul',
			thumbnail: img5,
			img: img5,
		},
		{
			title: 'Didyma',
			thumbnail: img6,
			img: img6,
		},
	],
}

import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'bee_lavender_2_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'crocus_duo_1000wordsart2.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'dandelion_2_1000wordsart.png'
const img4 = process.env.REACT_APP_IMAGE_URL + 'dandelion_seeds_1000wordsart.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'large_crocus_photo_1000wordsart.png'
const img6 = process.env.REACT_APP_IMAGE_URL + 'rain_drop_1_1000wordsart.png'
const img7 = process.env.REACT_APP_IMAGE_URL + 'white_flower_5_1000wordsart.png'
const img8 = process.env.REACT_APP_IMAGE_URL + 'snow_flowers_1000wordsart3.png'

export const flowers: IProject = {
	title: 'Flowers',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Bee',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Crocus',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'Dandelion',
			thumbnail: img3,
			img: img3,
		},
		{
			title: 'Dandelion',
			thumbnail: img4,
			img: img4,
		},
		{
			title: 'Crocus',
			thumbnail: img5,
			img: img5,
		},
		{
			title: 'Raindrop',
			thumbnail: img6,
			img: img6,
		},
		{
			title: 'Clover',
			thumbnail: img7,
			img: img7,
		},
		{
			title: 'Snow',
			thumbnail: img8,
			img: img8,
		},
	],
}

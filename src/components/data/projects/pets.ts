import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'cat_nap_1_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'cat_portrait_1_1000wordsart.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'corgi_dog_1_1000wordsart.png'
const img4 = process.env.REACT_APP_IMAGE_URL + 'pygmy_goat_1_1000wordsart.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'pygmy_goat_2_1000wordsart.png'
const img6 = process.env.REACT_APP_IMAGE_URL + 'pygmy_goat_6_1000wordsart.png'
const img7 = process.env.REACT_APP_IMAGE_URL + 'yellow_labrador_retriever_1000wordsart.png'

export const pets: IProject = {
	title: 'Pets',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Basil',
			thumbnail: img4,
			img: img4,
		},
		{
			title: 'Basil',
			thumbnail: img5,
			img: img5,
		},
		{
			title: 'Basil',
			thumbnail: img6,
			img: img6,
		},
		{
			title: 'Sandy',
			thumbnail: img7,
			img: img7,
		},
		{
			title: 'Rocky',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Rocky',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'Cory',
			thumbnail: img3,
			img: img3,
		},
	],
}

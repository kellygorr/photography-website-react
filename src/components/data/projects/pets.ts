import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'Pets/kody_kellygorr.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'Pets/cat_portrait_1_kellygorr.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'Pets/corgi_dog_1_kellygorr.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'Pets/pygmy_goat_1_kellygorr.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'Pets/pygmy_goat_2_kellygorr.jpg'
const img6 = process.env.REACT_APP_IMAGE_URL + 'Pets/pygmy_goat_6_kellygorr.jpg'
const img7 = process.env.REACT_APP_IMAGE_URL + 'Pets/yellow_labrador_retriever_kellygorr.jpg'
const img8 = process.env.REACT_APP_IMAGE_URL + 'Pets/pygmy_goat_4_kellygorr.jpg'
const img9 = process.env.REACT_APP_IMAGE_URL + 'Pets/corgi_dog_2_kellygorr.jpg'

export const pets: IProject = {
	title: 'Pets',
	photos: [
		{
			title: 'Kody',
			thumbnail: img1,
			img: img1,
		},
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
			title: 'Comet',
			thumbnail: img7,
			img: img7,
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
		{
			title: 'Basil',
			thumbnail: img8,
			img: img8,
		},
		{
			title: 'Hasil',
			thumbnail: img9,
			img: img9,
		},
	],
}

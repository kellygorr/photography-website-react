import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'Flowers/bee_lavender_3_kellygorr.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'Flowers/crocus_duo_kellygorr.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'Flowers/dandelion_2_kellygorr.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'Flowers/dandelion_seeds_kellygorr.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'Flowers/crocus_1_kellygorr.jpg'
const img6 = process.env.REACT_APP_IMAGE_URL + 'Flowers/rain_drop_1_kellygorr.jpg'
const img7 = process.env.REACT_APP_IMAGE_URL + 'Flowers/white_flower_5_kellygorr.jpg'
const img8 = process.env.REACT_APP_IMAGE_URL + 'Flowers/snow_flowers_kellygorr.jpg'
const img9 = process.env.REACT_APP_IMAGE_URL + 'Flowers/daisies_flowers_kellygorr.jpg'
const img10 = process.env.REACT_APP_IMAGE_URL + 'Flowers/butterfly_1_kellygorr.jpg'
const img11 = process.env.REACT_APP_IMAGE_URL + 'Flowers/butterfly_2_kellygorr.jpg'
const img12 = process.env.REACT_APP_IMAGE_URL + 'Flowers/butterfly_3_kellygorr.jpg'
const img13 = process.env.REACT_APP_IMAGE_URL + 'Flowers/daisies_2_kellygorr.jpg'

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
		{
			title: 'Daisies',
			thumbnail: img9,
			img: img9,
		},
		{
			thumbnail: img10,
			img: img10,
		},
		{
			thumbnail: img11,
			img: img11,
		},
		{
			thumbnail: img12,
			img: img12,
		},
		{
			thumbnail: img13,
			img: img13,
		},
	],
}

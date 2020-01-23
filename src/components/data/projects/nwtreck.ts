import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'sheep_1_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'snow_owl_2_1000wordsart.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'tree_tops_1_1000wordsart.png'

export const nwtreck: IProject = {
	title: 'NW Treck',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Sheep',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Snowy Owl',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'NW Treck',
			thumbnail: img3,
			img: img3,
		},
	],
}

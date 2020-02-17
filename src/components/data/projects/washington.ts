import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'Beach/Beach_driftwood_kellygorr.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'Washington/nw_treck_1_kellygorr.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'Washington/nw_treck_2_kellygorr.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'Washington/nw_treck_kellygorr.jpg'

export const washington: IProject = {
	title: 'Washington',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Driftwood',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'NW Treck Sheep',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'NW Treck Snowy Owl',
			thumbnail: img3,
			img: img3,
		},
		{
			title: 'NW Treck',
			thumbnail: img4,
			img: img4,
		},
	],
}

import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'ballard_locks_5_1000wordsart.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'gas_works_park_2_1000wordsart.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'seattle_1_1000wordsart.png'
const img4 = process.env.REACT_APP_IMAGE_URL + 'seattle_3_1000wordsart.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'uw_cherryblossoms_1_1000wordsart.png'
const img6 = process.env.REACT_APP_IMAGE_URL + 'uw_library_1_1000wordsart.png'
const img7 = process.env.REACT_APP_IMAGE_URL + 'uw_library_2_1000wordsart.png'

export const seattle: IProject = {
	title: 'Seattle',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Ballard locks',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Gas works park',
			thumbnail: img2,
			img: img2,
		},
		{
			title: 'Gas works park',
			thumbnail: img3,
			img: img3,
		},
		{
			title: 'Gas works park',
			thumbnail: img4,
			img: img4,
		},
		{
			title: 'University of Washington',
			thumbnail: img5,
			img: img5,
		},
		{
			title: 'University of Washington',
			thumbnail: img6,
			img: img6,
		},
		{
			title: 'University of Washington',
			thumbnail: img7,
			img: img7,
		},
	],
}

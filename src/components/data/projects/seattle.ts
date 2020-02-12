import { IProject } from '../IProject'

const img2 = process.env.REACT_APP_IMAGE_URL + 'gas_works_park_2_1000wordsart.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'uw_cherryblossoms_1_1000wordsart.png'
const img6 = process.env.REACT_APP_IMAGE_URL + 'uw_library_1_1000wordsart.png'
const img7 = process.env.REACT_APP_IMAGE_URL + 'uw_library_2_1000wordsart.png'
const img8 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_1_kellygorr.jpg'
const img9 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_2_kellygorr.jpg'
const img10 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_3_kellygorr.jpg'
const img11 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_4_kellygorr.jpg'
const img12 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_5_kellygorr.jpg'
export const seattle: IProject = {
	title: 'Seattle',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Gas works park',
			thumbnail: img2,
			img: img2,
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
		{
			title: 'Gas Works Park',
			thumbnail: img8,
			img: img8,
		},
		{
			title: 'Gas Works Park',
			thumbnail: img9,
			img: img9,
		},
		{
			title: 'Gas Works Park',
			thumbnail: img10,
			img: img10,
		},
		{
			title: 'Ballard locks',
			thumbnail: img11,
			img: img11,
		},
		{
			thumbnail: img12,
			img: img12,
		},
	],
}

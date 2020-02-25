import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_kellygorr.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'Seattle/uw_kellygorr.jpg'
const img8 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_1_kellygorr.jpg'
const img9 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_2_kellygorr.jpg'
const img10 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_3_kellygorr.jpg'
const img11 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_4_kellygorr.jpg'
const img12 = process.env.REACT_APP_IMAGE_URL + 'Seattle/seattle_5_kellygorr.jpg'
export const seattle: IProject = {
	title: 'Seattle',
	photos: [
		{
			title: 'Seattle',
			thumbnail: img1,
			img: img1,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
		{
			title: 'University of Washington',
			thumbnail: img2,
			img: img2,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
		{
			title: 'Gas Works Park',
			thumbnail: img8,
			img: img8,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
		{
			title: 'Gas Works Park',
			thumbnail: img9,
			img: img9,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
		{
			title: 'Gas Works Park',
			thumbnail: img10,
			img: img10,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
		{
			title: 'Ballard locks',
			thumbnail: img11,
			img: img11,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
		{
			title: 'Ballard locks',
			thumbnail: img12,
			img: img12,
			camera: 'Canon',
			lens: 'Canon',
			date: '1/1/11',
		},
	],
}

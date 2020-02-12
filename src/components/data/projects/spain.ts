import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'Spain/madrid_street_kellygorr.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'Spain/Sinagoga_La_Blanca_kellygorr.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'Spain/toledo_cathedral_kellygorr.jpg'

export const spain: IProject = {
	title: 'Spain',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Toledo',
			thumbnail: img3,
			img: img3,
		},
		{
			title: 'Madrid',
			thumbnail: img1,
			img: img1,
		},
		{
			title: 'Sinagoga La Blanca',
			thumbnail: img2,
			img: img2,
		},
	],
}

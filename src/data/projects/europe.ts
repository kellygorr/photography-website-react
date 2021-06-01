import { IProject } from '../IProject'

const img1 = 'europe-3.jpg'
const img2 = 'europe-4.jpg'

export const europe: IProject = {
	title: 'Europe',
	photos: [
		{
			title: 'Toledo',
			img: img1,
			date: '6.20.2004',
			info: {
				camera: 'Canon PowerShot S1 iS',
				extra: 'Photoshop fantasy edit',
			},
		},
		{
			title: 'Paris',
			img: img2,
			date: '6.27.2004',
			info: {
				camera: 'Canon PowerShot S1 iS',
			},
		},
	],
}

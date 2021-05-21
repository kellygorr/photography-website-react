import { IProject } from '../IProject'

const img2 = 'europe-2.jpg'
const img3 = 'europe-3.jpg'
const img4 = 'europe-4.jpg'

export const europe: IProject = {
	title: 'Europe',
	photos: [
		{
			title: 'Toledo',
			img: img3,
			date: '6.20.2004',
			info:{
				camera: 'Canon PowerShot S1 iS',
			}
		},
		{
			title: 'Sinagoga La Blanca',
			img: img2,
			date: '6.20.2004',
			info:{
				camera: 'Canon PowerShot S1 iS',
			}
		},
		{
			title: 'Paris',
			img: img4,
			date: '6.27.2004',
			info:{
				camera: 'Canon PowerShot S1 iS',
			}
		},
	],
}

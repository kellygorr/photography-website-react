import { IProject } from '../IProject'

const img1 = 'washington-1.jpg'
const img2 = 'washington-2.jpg'
const img3 = 'washington-3.jpg'
const img4 = 'washington-4.jpg'

export const washington: IProject = {
	title: 'Washington',
	photos: [
		{
			title: 'Camano Island',
			img: img1,
			date: '9.9.2007',
			info:{
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 17-85mm f/4-5.6 IS USM',
			}
		},
		{
			title: 'NW Treck - Sheep',
			img: img2,
			date: '9.10.2011',
			info:{
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			}
		},
		{
			title: 'NW Treck - Snowy Owl',
			img: img3,
			date: '9.10.2011',
			info:{
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF 100-400mm f/4.5-5.6L IS USM',
			}
		},
		{
			title: 'NW Treck',
			img: img4,
			date: '9.10.2011',
			info:{
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			}
		},
	],
}

import { IProject } from '../IProject'

const img1 = 'seattle-1.jpg'
const img2 = 'seattle-2.jpg'
const img3 = 'seattle-3.jpg'
const img4 = 'seattle-4.jpg'
const img5 = 'seattle-5.jpg'
const img6 = 'seattle-6.jpg'
const img7 = 'seattle-7.jpg'

export const seattle: IProject = {
	title: 'Seattle',
	photos: [
		{
			title: 'Seattle',
			img: img6,
			date: '1.16.2010',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Gas Works Park',
			img: img1,
			date: '1.16.2010',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Gas Works Park',
			img: img2,
			date: '1.16.2010',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Gas Works Park',
			img: img3,
			date: '1.16.2010',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Ballard locks',
			img: img4,
			date: '2.14.2010',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Ballard locks',
			img: img5,
			date: '2.14.2010',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'University of Washington',
			img: img7,
			date: '4.8.2012',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF 100mm f/2.8 Macro',
			},
		},
	],
}

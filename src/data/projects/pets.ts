import { IProject } from '../IProject'

const img1 = 'pet-1.jpg'
const img2 = 'pet-2.jpg'
const img3 = 'pet-3.jpg'
const img4 = 'pet-4.jpg'
const img5 = 'pet-5.jpg'
const img6 = 'pet-6.jpg'
const img8 = 'pet-8.jpg'
const img9 = 'pet-9.jpg'

export const pets: IProject = {
	title: 'Pets',
	photos: [
		{
			title: 'Kody',
			img: img4,
			date: '',
			info: {
				camera: 'Canon EOS 60D',
				lens: 'Rokinon FE8M-C 8mm F3.5 Fisheye Fixed Lens',
			},
		},
		{
			title: 'Basil',
			img: img5,
			date: '5.29.2009',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Basil',
			img: img6,
			date: '7.3.2009',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Comet',
			img: img9,
			date: '1.26.2008',
			info: {
				camera: 'Canon EOS 30D',
				lens: 'Canon EF-S 17-85mm f/4-5.6 IS USM',
			},
		},
		{
			title: 'Rocky',
			img: img1,
			date: '4.25.2009',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Cory',
			img: img2,
			date: '5.10.2009',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Basil',
			img: img8,
			date: '7.3.2009',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
		{
			title: 'Cory',
			img: img3,
			date: '5.10.2009',
			info: {
				camera: 'Canon EOS Digital Rebel',
				lens: 'Canon EF-S 18-55mm f/3.5-5.6 IS',
			},
		},
	],
}

import { IProject } from '../IProject'

const img2 = process.env.REACT_APP_IMAGE_URL + 'France/france_paris_1_kellygorr.jpg'

export const france: IProject = {
	title: 'France',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Paris',
			thumbnail: img2,
			img: img2,
		},
	],
}

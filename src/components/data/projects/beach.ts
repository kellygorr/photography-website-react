import { IProject } from '../IProject'

const img1 = process.env.REACT_APP_IMAGE_URL + 'Beach_driftwood_1000wordsart.png'

export const beach: IProject = {
	title: 'Beach',
	subtitle: 'subtitle',
	photos: [
		{
			title: 'Driftwood',
			thumbnail: img1,
			img: img1,
		},
	],
}

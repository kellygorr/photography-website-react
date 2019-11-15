import { IProject } from '../IProject'
import { TagType } from '../IProject'
import thumbnail from '../../../assets/thumbnails/test.jpg'

export const test: IProject = {
	title: 'Test',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.XboxOne],
	content: [
		{
			slideshow: [
				{
					caption: 'Text',
				},
				{
					caption: 'Text 2',
				},
				{
					caption: 'Text 3',
				},
				{
					caption: 'Text 4',
				},
				{
					caption: 'Text 5',
				},
				{
					caption: 'Text 6',
				},
			],
		},
	],
}

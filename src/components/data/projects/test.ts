import { IProject } from '../IProject'
import { TagType } from '../IProject'


export const test: IProject = {
	title: 'Test',
	subtitle: 'subtitle',
	thumbnail:'',
	tags: [TagType.XboxOne],
	content: [
		{
			header: 'test'
		},
	],
}

export enum SkillType {
	UIUX = 'UI-UX',
	Design = 'design',
	Illustration = 'illustration',
	JQuery = 'jQuery',
	JavaScript = 'JavaScript',
	React = 'React',
	TypeScript = 'TypeScript',
	AngularJS = 'AngularJS',
	PHP = 'PHP',
	MySQL = 'MySQL',
	Ajax = 'Ajax',
	JSON = 'JSON',
	HTML = 'HTML',
	CSS = 'CSS',
}

export interface IProject {
	title: string
	subtitle: string
	photos: IPhotos[]
}

export interface IPhotos {
	title?: string
	thumbnail: string
	img: string
	date?: string
	camera?: string
	lens?: string
	caption?: string
}

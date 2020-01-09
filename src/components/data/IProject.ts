export enum TagType {
	Xbox = 'Xbox',
	Poll = 'poll',
	Quiz = 'quiz',
	Plugin = 'plugin',
	Tooling = 'tooling',
	Infographic = 'infographic',
	Website = 'website',
	Mobile = 'mobile',
	Web = 'web',
	Kinect = 'Xbox Kinect',
	Print = 'print',
}
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

export enum ToolType {
	Illustrator = 'Illustrator',
	Photoshop = 'Photoshop',
	InDesign = 'InDesign',
}

export enum SectionType {
	Header = 'header',
	Slideshow = 'slideshow',
	Body = 'body',
	attachments = 'attachments',
}

export enum FileType {
	Video,
	Image,
	Pdf,
	Link,
}

export interface IProject {
	title: string
	subtitle: string
	photos: IPhotos[]
	tags?: TagType[]
}

export interface IPhotos {
	title?: string
	thumbnail: string
	img: string
	caption?: string
}

export interface IAttachment {
	img: string
	caption?: string
	desc?: string
	type: FileType
	source: string
}

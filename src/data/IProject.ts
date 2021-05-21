export interface IProject {
	title: string
	photos: IPhotos[]
}

export interface IPhotos {
	title: string
	img: string
	date?: string
	info?: {
		camera?: string
		lens?: string
		extra?: string
	}
}

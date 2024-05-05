export interface ChildProps {
	children: React.ReactNode
}

export interface IArchivedBlog {
	year: string
	blogs: IBlog[]
}
export interface IBlog {
	title: string
	description: string
	author: IAuthor
	category: ICategoryAndTag
	tag: ICategoryAndTag
	image: { url: string }
	createdAt: string
	content: {
		html: string
	}
	slug: string
}

export interface IAuthor {
	name: string
	img: { url: string }
	bio: string
	blogs: IBlog[]
	id: string
}

export interface ICategoryAndTag {
	name: string
	slug: string
}

import { IBlog, ICategoryAndTag } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENPOINT!

export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				slug
				name
			}
		}
	`

	const { categories } = await request<{ categories: ICategoryAndTag[] }>(
		graphqlAPI,
		query
	)
	return categories
}

export const getBlogsByCategory = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				blogs {
					description
					author {
						name
						img {
							url
						}
						bio
					}
					content {
						html
					}
					createdAt
					image {
						url
					}
					slug
					tag {
						name
						slug
					}
					category {
						name
						slug
					}
					title
				}
				name
			}
		}
	`

	const { category } = await request<{
		category: { blogs: IBlog[]; name: string }
	}>(graphqlAPI, query, { slug })
	return category
}

import type { List } from '#types'

export const lists: List[] = [
	{
		id: 'list-1',
		title: 'List 1',
		image: '/deno.jpg',
		pinned: false,
		authorId: 'user-1',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		author: {
			name: 'User 1',
			handle: 'user-1',
			avatar: '/profile.png',
			id: 'usr-1',
			createdAt: '2020-01-01',
			updatedAt: '2020-01-01',
			cover: '/deno.jpg',
			description: 'This is a user',
			followers: [],
			following: [],
			tweets: [],
			website: 'https://example.com'
		},
		items: {
			users: [],
			tweets: []
		},
		type: 'public'
	},
	{
		id: 'list-2',
		title: 'List 2',
		image: '/deno.jpg',
		pinned: true,
		authorId: 'user-1',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		author: {
			name: 'User 1',
			handle: 'user-1',
			avatar: '/profile.png',
			id: 'usr-1',
			createdAt: '2020-01-01',
			updatedAt: '2020-01-01',
			cover: '/deno.jpg',
			description: 'This is a user',
			followers: [],
			following: [],
			tweets: [],
			website: 'https://example.com'
		},
		items: {
			users: [],
			tweets: []
		},
		type: 'public'
	}
]

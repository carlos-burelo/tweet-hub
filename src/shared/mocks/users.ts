import type { User } from '#types'

export const user: User = {
	id: 'usr-1',
	name: 'John Doe',
	handle: 'jdoe',
	avatar: '/profile.png',
	cover: '/deno.jpg',
	description: 'I am a software developer',
	website: 'https://example.com',
	tweets: [
		{
			id: 'tw-0',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',
				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '0 few seconds ago',
			updatedAt: '0 few seconds ago',
			content: {
				text: 'Testing #large message.> 50 characters and custom entities: @jdoe, #hashtag, https://example.com'
			},
			entities: {
				hashtags: [],
				mentions: [
					{
						id: 'usr-1',
						name: 'John Doe',
						handle: 'jdoe',
						cover: '/deno.jpg',
						avatar: '/profile.png',
						description: 'I am a software developer',
						website: 'https://example.com',
						tweets: [],
						followers: [],
						following: [],
						createdAt: '2 minutes ago',
						updatedAt: '2 minutes ago'
					}
				],
				links: []
			}
		},
		{
			id: 'tw-1',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',
				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '1 minute ago',
			updatedAt: '1 minute ago',
			content: {
				text: 'Testing #short message.<= 50 characters'
			},
			entities: {
				hashtags: [],
				mentions: [
					{
						id: 'usr-1',
						name: 'John Doe',
						handle: 'jdoe',
						avatar: '/profile.png',
						cover: '/deno.jpg',
						description: 'I am a software developer',

						website: 'https://example.com',
						tweets: [],
						followers: [],
						following: [],
						createdAt: '2 minutes ago',
						updatedAt: '2 minutes ago'
					}
				],
				links: []
			}
		},
		{
			id: 'tw-2',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',
				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '2 minutes ago',
			updatedAt: '2 minutes ago',
			content: {
				text: 'Testing content: 1. image',
				media: ['/deno.jpg']
			},
			entities: {
				hashtags: ['hashtag'],
				mentions: [],
				links: []
			}
		},
		{
			id: 'tw-3',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',

				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '3 minutes ago',
			updatedAt: '3 minutes ago',
			content: {
				text: 'Testing content: 2. image',
				media: ['/deno.jpg', '/deno.jpg']
			},
			entities: {
				hashtags: ['hashtag'],
				mentions: [],
				links: []
			}
		},
		{
			id: 'tw-3',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',

				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '4 minutes ago',
			updatedAt: '4 minutes ago',
			content: {
				text: 'Testing content: 3. image',
				media: ['/deno.jpg', '/deno.jpg', '/deno.jpg']
			},
			entities: {
				hashtags: ['hashtag'],
				mentions: [],
				links: []
			}
		},
		{
			id: 'tw-4',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',

				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '4 minutes ago',
			updatedAt: '4 minutes ago',
			content: {
				text: 'Testing content: 4. image',
				media: ['/deno.jpg', '/deno.jpg', '/deno.jpg', '/deno.jpg']
			}
		},
		{
			id: 'tw-5',
			authorId: 'usr-1',
			author: {
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
				description: 'I am a software developer',

				website: 'https://example.com',
				tweets: [],
				following: [],
				followers: [],
				cover: '/deno.jpg',
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			},
			createdAt: '4 minutes ago',
			updatedAt: '4 minutes ago',
			content: {
				text: 'Testing content: 5. image',
				media: ['/deno.jpg', '/deno.jpg', '/deno.jpg', '/deno.jpg', '/deno.jpg']
			}
		}
	],
	following: [],
	followers: [],
	createdAt: '2 minutes ago',
	updatedAt: '2 minutes ago'
}

export const users: User[] = [
	{
		id: 'usr-1',
		name: 'John Doe',
		handle: 'jdoe',
		cover: '/deno.jpg',
		avatar: '/profile.png',
		description: 'I am a software developer',
		website: 'https://example.com',
		tweets: [],
		following: [],
		followers: [],
		createdAt: '2 minutes ago',
		updatedAt: '2 minutes ago'
	},
	{
		id: 'usr-2',
		name: 'Jane Doe',
		handle: 'jane',
		avatar: '/profile.png',
		cover: '/deno.jpg',
		description: 'I am a software developer',

		website: 'https://example.com',
		tweets: [],
		following: [],
		followers: [],
		createdAt: '2 minutes ago',
		updatedAt: '2 minutes ago'
	},
	{
		id: 'usr-3',
		name: 'Ryan Ray',
		handle: 'rray',
		avatar: '/profile.png',
		cover: '/deno.jpg',
		description: 'I am a software developer',

		website: 'https://example.com',
		tweets: [],
		following: [],
		followers: [],
		createdAt: '2 minutes ago',
		updatedAt: '2 minutes ago'
	},
	{
		id: 'usr-4',
		name: 'Mike Jones',
		handle: 'mjones',
		avatar: '/profile.png',
		cover: '/deno.jpg',
		description: 'I am a software developer',

		website: 'https://example.com',
		tweets: [],
		following: [],
		followers: [],
		createdAt: '2 minutes ago',
		updatedAt: '2 minutes ago'
	},
	{
		id: 'usr-5',
		name: 'Randy Savage',
		handle: 'rsavage',
		avatar: '/profile.png',
		cover: '/deno.jpg',
		description: 'I am a software developer',

		website: 'https://example.com',
		tweets: [],
		following: [],
		followers: [],
		createdAt: '2 minutes ago',
		updatedAt: '2 minutes ago'
	}
]

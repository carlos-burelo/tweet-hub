import type { Group } from '#types'

export const groups: Group[] = [
	{
		name: 'Svelte Society',
		cover: 'https://blog.meetupfeed.io/wp-content/uploads/2021/03/Svelte.png',
		avatar: '/svelte.svg',
		type: 'private',
		members: [
			{
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
			},
			{
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
			}
		],
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: '1 minutes ago',
		bio: 'Backend Development',
		id: 'gr-1',
		tweets: [],
		handle: 'backendbros'
	},
	{
		name: 'Deno for Gentlemen',
		cover: 'https://i.pinimg.com/736x/c3/39/0d/c3390d27ce000ecd621623090213c6f4.jpg',
		avatar: 'https://tsh.io/wp-content/uploads/2020/06/deno-tutorial-and-node-comparison_.jpg',
		type: 'private',
		members: [
			{
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
			},
			{
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
			}
		],
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: '1 minutes ago',
		bio: 'Backend Development',
		id: 'gr-2',
		tweets: [],
		handle: 'backendbros'
	},
	{
		name: 'Sociedad en contra de Java ♨️',
		cover: 'https://pics.me.me/i-love-java-9-51-pm-even-i-hate-java-32016102.png',
		avatar: 'https://i.giphy.com/media/90FH7I3McAQ7u/giphy.gif',
		type: 'public',
		members: [
			{
				id: 'usr-1',
				name: 'John Doe',
				handle: 'jdoe',
				avatar: '/profile.png',
			}
		],
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: '1 minutes ago',
		bio: 'Backend Development',
		id: 'gr-3',
		tweets: [],
		handle: 'backendbros'
	},
	{
		name: 'Twitter nos demando',
		cover: 'https://pbs.twimg.com/media/EwNKoY9U8Acy6wS.jpg',
		avatar: 'https://paraatrasniparatomarimpulso.files.wordpress.com/2011/08/dead_twitter1.jpg',
		type: 'public',
		members: [],
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png'
		},
		createdAt: '1 minutes ago',
		handle: 'twitternosdemando',
		bio: 'Memes y otras cosas',
		id: 'gr-4',
		tweets: []
	}
]

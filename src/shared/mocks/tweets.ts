import type { Tweet } from '#types'

export const tweets: Tweet[] = [
	{
		id: 'tw-0',
		createdAt: new Date().toISOString(),
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		content: {
			markup: 'Mensaje largo con mas de 50 caracteres y resaltado de entidades: <mark>@joe</mark>, <mark>#hashtag</mark>, <a href="https://twitter.com/home">https://twitter.com/home</a>',
		},
		entities: {
			mentions: [
				{
					id: 'usr-1',
					name: 'John Doe',
					handle: 'jdoe',
					avatar: '/profile.png',
				}
			],
			urls: [
				{
					url: 'https://twitter.com/home',
					host: 'twitter.com',
					title: 'Twitter',
					description: 'Twitter homepage',
				}
			]
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-1',
		author: {
			id: 'usr-2',
			name: 'Jane Doe',
			handle: 'jane',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		entities: {
		},
		content: {
			markup: 'Mensaje corto de menos de 50 caracteres <mark>@jane</mark>',
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-12',
		author: {
			id: 'usr-2',
			name: 'Jane Doe',
			handle: 'jane',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		entities: {
		},
		content: {
			markup: 'Encuesta pendiente',
			poll: {
				expiredAt: new Date().toISOString(),
				question: 'Nos va a demandar twitter?',
				options: [
					{
						id: '1234',
						title: 'Amonos que aqui espantan',
						count: 70.5,
						votes: []
					},
					{
						id: '5678',
						title: 'Si',
						count: 29.5,
						votes: []
					}
				]
			}
			// poll: {
			// 	createdAt: new Date().toISOString(),
			// 	updatedAt: new Date().toISOString(),
			// 	expiredAt: new Date().toISOString(),
			// 	question: 'Nos va a demandar Twitter?',
			// 	options: [
			// 		{
			// 			id: 'opt-1',
			// 			label: 'Si',
			// 			users: [],
			// 			value: 50
			// 		},
			// 		{
			// 			id: 'opt-2',
			// 			label: 'XD',
			// 			value: 30,
			// 			users: []
			// 		},
			// 		{
			// 			id: 'opt-3',
			// 			label: 'Fuimonos que aqui espantan',
			// 			value: 20,
			// 			users: []
			// 		}
			// 	]
			// }
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-2',
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		content: {
			markup: 'Probando contenedor de una sola imagen <mark>@jdoe</mark>',
			media: ['/deno.jpg']
		},
		entities: {
			hashtags: ['hashtag'],
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-3',
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		content: {
			markup: 'Probando contenedor de 2 imagenes <mark>#2</mark>',
			media: ['/deno.jpg', '/deno.jpg']
		},
		entities: {
			hashtags: ['hashtag'],
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-3',
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		content: {
			markup: 'Probando contenedor de 3 imagenes <mark>#3</mark>',
			media: ['/deno.jpg', '/deno.jpg', '/deno.jpg']
		},
		entities: {
			hashtags: ['hashtag'],
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-4',
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		content: {
			markup: 'Probando contenedor de 4 imagenes <mark>#4</mark>',
			media: ['/deno.jpg', '/deno.jpg', '/deno.jpg', '/deno.jpg']
		},
		entities: {
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	},
	{
		id: 'tw-5',
		author: {
			id: 'usr-1',
			name: 'John Doe',
			handle: 'jdoe',
			avatar: '/profile.png',
		},
		createdAt: new Date().toISOString(),
		content: {
			markup: 'Probando contenedor de 5 imagenes <mark>#5</mark>, siendo este el limite de imagenes que se pueden mostrar en un contenedor',
			media: ['/deno.jpg', '/img1.png', '/img2.jpg', '/img3.png', '/img4.jpg']
		},
		entities: {
		},
		comments: {
			count: 0,
			users: [],
		},
		likes: {
			count: 0,
			users: [],
		},
		retweets: {
			count: 0,
			users: [],
		},
	}
]

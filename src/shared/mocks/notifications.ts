import type { NotificationI } from '#types'

export const notifications: NotificationI[] = [
	{
		id: 'nt-1',
		type: 'mention',
		title: '@username mentioned you',
		author: {
			avatar: '/profile.png',
			handle: '@username',
			name: 'User 1'
		},
		createdAt: '2020-01-01',
		updatedAt: '2020-01-01',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		ref: '/tweet/tw-1'
	},
	{
		id: 'nt-2',
		type: 'like',
		title: '@username liked your tweet',
		author: {
			avatar: '/profile.png',
			handle: '@username',
			name: 'User 1'
		},
		createdAt: '2020-01-01',
		updatedAt: '2020-01-01',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		ref: '/tweet/tw-1'
	},
	{
		id: 'nt-3',
		type: 'comment',
		title: '@username commented on your tweet',
		author: {
			avatar: '/profile.png',
			handle: '@username',
			name: 'User 1'
		},
		createdAt: '2020-01-01',
		updatedAt: '2020-01-01',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		ref: '/tweet/tw-1'
	},
	{
		id: 'nt-4',
		type: 'retweet',
		author: {
			avatar: '/profile.png',
			handle: '@username',
			name: 'User 1'
		},
		title: '@username retweeted your tweet',
		createdAt: '2020-01-01',
		updatedAt: '2020-01-01',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		ref: '/tweet/tw-1'
	},
	{
		id: 'nt-5',
		type: 'recomendation',
		author: {
			avatar: '/profile.png',
			handle: '@username',
			name: 'User 1'
		},
		createdAt: '2020-01-01',
		updatedAt: '2020-01-01',
		title: '@username recommended you to follow',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		ref: '/tweet/tw-1'
	}
]

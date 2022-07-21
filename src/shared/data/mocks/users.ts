import type { User } from "#types"

export const user: User = {
  id: 'usr-1',
  name: 'John Doe',
  userName: 'jdoe',
  image: '/profile.png',
  bio: 'I am a software developer',
  location: 'New York, NY',
  website: 'https://godofredo.ninja',
  tweets: [
    {
      id: 'tw-0',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],

      },
      createdAt: '0 few seconds ago',
      updatedAt: '0 few seconds ago',
      content: {
        text: 'Testing #large message.> 50 characters and custom entities: @jdoe, #hashtag, https://example.com',
        entities: {
          hashtags: [],
          mentions: [
            {
              id: 'usr-1',
              name: 'John Doe',
              userName: 'jdoe',
              image: '/profile.png',
            }
          ],
        }
      }
    },
    {
      id: 'tw-1',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],
      },
      createdAt: '1 minute ago',
      updatedAt: '1 minute ago',
      content: {
        text: 'Testing #short message.<= 50 characters',
        entities: {
          hashtags: [],
          mentions: [
            {
              id: 'usr-1',
              name: 'John Doe',
              userName: 'jdoe',
              image: '/profile.png',
            }
          ],
        }
      }
    },
    {
      id: 'tw-2',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],
      },
      createdAt: '2 minutes ago',
      updatedAt: '2 minutes ago',
      content: {
        text: 'Testing content: 1. image',
        media: [
          '/deno.jpg'
        ],
        entities: {
          hashtags: [
            'hashtag'
          ],
          mentions: []
        },
      }
    },
    {
      id: 'tw-3',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],
      },
      createdAt: '3 minutes ago',
      updatedAt: '3 minutes ago',
      content: {
        text: 'Testing content: 2. image',
        media: [
          '/deno.jpg',
          '/deno.jpg',
        ],
        entities: {
          hashtags: [
            'hashtag'
          ],
          mentions: []
        },
      }
    },
    {
      id: 'tw-3',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],
      },
      createdAt: '4 minutes ago',
      updatedAt: '4 minutes ago',
      content: {
        text: 'Testing content: 3. image',
        media: [
          '/deno.jpg',
          '/deno.jpg',
          '/deno.jpg',
        ],
        entities: {
          hashtags: [
            'hashtag'
          ],
          mentions: []
        },
      }
    },
    {
      id: 'tw-4',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],
      },
      createdAt: '4 minutes ago',
      updatedAt: '4 minutes ago',
      content: {
        text: 'Testing content: 4. image',
        media: [
          '/deno.jpg',
          '/deno.jpg',
          '/deno.jpg',
          '/deno.jpg',
        ],
        entities: {
          hashtags: [
            'hashtag'
          ],
          mentions: []
        },
      }
    },
    {
      id: 'tw-5',
      authorId: 'usr-1',
      author: {
        id: 'usr-1',
        name: 'John Doe',
        userName: 'jdoe',
        image: '/profile.png',
        bio: 'I am a software developer',
        location: 'New York, NY',
        website: 'https://godofredo.ninja',
        tweets: [],
        following: [],
        followers: [],
      },
      createdAt: '4 minutes ago',
      updatedAt: '4 minutes ago',
      content: {
        text: 'Testing content: 5. image',
        media: [
          '/deno.jpg',
          '/deno.jpg',
          '/deno.jpg',
          '/deno.jpg',
          '/deno.jpg',
        ],
        entities: {
          hashtags: [
            'hashtag'
          ],
          mentions: []
        },
      }
    }
  ],
  following: [],
  followers: [],
}

export const users: User[] = [
  {
    id: 'usr-1',
    name: 'John Doe',
    userName: 'jdoe',
    image: '/profile.png',
    bio: 'I am a software developer',
    location: 'New York, NY',
    website: 'https://godofredo.ninja',
    tweets: [],
    following: [],
    followers: [],
  },
  {
    id: 'usr-2',
    name: 'Jane Doe',
    userName: 'jdoe',
    image: '/profile.png',
    bio: 'I am a software developer',
    location: 'New York, NY',
    website: 'https://godofredo.ninja',
    tweets: [],
    following: [],
    followers: [],
  },
  {
    id: 'usr-3',
    name: 'John Doe',
    userName: 'jdoe',
    image: '/profile.png',
    bio: 'I am a software developer',
    location: 'New York, NY',
    website: 'https://godofredo.ninja',
    tweets: [],
    following: [],
    followers: [],
  },
  {
    id: 'usr-4',
    name: 'John Doe',
    userName: 'jdoe',
    image: '/profile.png',
    bio: 'I am a software developer',
    location: 'New York, NY',
    website: 'https://godofredo.ninja',
    tweets: [],
    following: [],
    followers: [],
  },
  {
    id: 'usr-5',
    name: 'John Doe',
    userName: 'jdoe',
    image: '/profile.png',
    bio: 'I am a software developer',
    location: 'New York, NY',
    website: 'https://godofredo.ninja',
    tweets: [],
    following: [],
    followers: [],
  }
]
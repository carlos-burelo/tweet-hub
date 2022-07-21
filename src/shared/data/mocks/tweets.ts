import type { Tweet } from "#shared/types"

export const tweets: Tweet[] = [
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
      text: 'Mensaje largo con mas de 50 caracteres y resaltado de entidades: @jdoe, #hashtag, https://example.com',
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
      text: 'Mensaje corto de menos de 50 caracteres #svelte',
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
      text: 'Probando contenedor de una sola imagen #1',
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
      text: 'Probando contenedor de 2 imagenes #2',
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
      text: 'Probando contenedor de 3 imagenes #3',
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
      text: 'Probando contenedor de 4 imagenes #4',
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
      text: 'Probando contenedor de 5 imagenes #5, siendo este el limite de imagenes que se pueden mostrar en un contenedor',
      media: [
        '/deno.jpg',
        '/img1.png',
        '/img2.jpg',
        '/img3.png',
        '/img4.jpg',
      ],
      entities: {
        hashtags: [
          'hashtag'
        ],
        mentions: []
      },
    }
  }
]
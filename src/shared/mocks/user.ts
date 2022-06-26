import { User } from "#types"

export const users: User[] = [
  {
    id: 'user-1',
    avatar: '/profile.png',
    bio: 'I am a user',
    createdAt: '2020-01-01',
    displayName: 'User One',
    userName: 'user1',
    website: 'https://user1.com',
    followers: [],
    following: [],
  },
  {
    id: 'user-2',
    avatar: 'https://avatars.githubusercontent.com/u/22801514?v=4',
    bio: 'I am a user',
    createdAt: '2020-01-01',
    displayName: 'User Two',
    userName: 'user2',
    website: 'https://user1.com',
    followers: [],
    following: [],
  },
  {
    id: 'user-3',
    avatar: 'https://avatars.githubusercontent.com/u/45366419?v=4',
    bio: 'I am a user',
    createdAt: '2020-01-01',
    displayName: 'User Three',
    userName: 'user3',
    website: 'https://user1.com',
    followers: [],
    following: [],
  }
]




export const userMock = {
  id: 'carlos31',
  name: 'Carlos Burelo',
  email: 'jhonDoe@gmail.com',
  avatar: 'https://pbs.twimg.com/profile_images/1516438716528607235/gvPOb6Ds_400x400.png',
  website: 'https://carlosburelo.vercel.app',
  bio: 'Front-end / Back-end  Developer-  Software Engineer',
  // avatar: 'https://avatars.githubusercontent.com/u/56522783?v=4',
}

export const tweetMock = {
  id: '1',
  image: 'https://pbs.twimg.com/media/FV34hOzXgAEekTg?format=jpg&name=small',
  raw: `Hello, world!\n![image](https://pbs.twimg.com/media/FV34hOzXgAEekTg?format=jpg&name=small)`,
}
export const listMock = {
  id: '1',
  image: 'https://www.geekmi.news/__export/1636751568813/sites/debate/img/2021/11/12/nobara_jujutsu_kaisen_figura.jpg_976912859.jpg'
}
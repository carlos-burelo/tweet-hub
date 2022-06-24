import _ from './ProfileInfo.module.css'
import Image from 'next/image'
import Avatar from '#components/Avatar'
import { userMock } from '#mocks/user'
import { CalendarIcon, WebsiteIcon } from 'shared/icons'
import TweetCard from '#components/Tweet/TweetCard'
export default function ProfileInfo() {
  const categories = ['Tweets', 'Respuestas', 'Fotos y videos', 'Me gusta']
  return (
    <div className={_.container}>
      <div className={_.images}>
        <div className={_.bannerContainer}>
          <Image
            className={_.banner}
            src='https://pbs.twimg.com/profile_banners/1087496012573208576/1650382139/1500x500'
            height={200}
            width={600}
            layout='responsive'
          />
        </div>
        <div className={_.avatarContainer}>
          <Avatar src={userMock.avatar} size={140} className={_.avatar} />
        </div>
      </div>
      <div className={_.info}>
        <div className={_.displayNames}>
          <h2 className={_.name}>{userMock.name}</h2>
          <h3 className={_.username}>@{userMock.id}</h3>
        </div>
        <p className={_.bio}>{userMock.bio}</p>
        <div className={_.otherInfo}>
          <a
            className={_.website}
            href={userMock.website}
            target='_blank'
            rel='noreferrer noopener'
          >
            <WebsiteIcon />
            <span>{userMock.website.replace(/https:\/\//, '')}</span>
          </a>
          <div className={_.joinDate}>
            <CalendarIcon /> Se unió en enero de 2019
          </div>
        </div>
      </div>
      <div className={_.media}>
        <div className={_.categories}>
          {categories.map(trend => (
            <div className={_.category} key={trend}>
              {trend}
            </div>
          ))}
        </div>
        <div className={_.tweets}>
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </div>
      </div>
    </div>
  )
}

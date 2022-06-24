import Avatar from '#components/Avatar'
import Markdown from '#components/Markdown'
import { tweetMock, userMock } from '#mocks/user'
import TweetActions from './TweetActions'
import _ from './TweetCard.module.css'
import TweetHeader from './TweetHeader'

export default function TweetCard({}) {
  return (
    <div className={_.tweetCard}>
      <div className={_.avatar}>
        <Avatar src={userMock.avatar} size={50} />
      </div>
      <div className={_.tweet}>
        <TweetHeader />
        <Markdown raw={tweetMock.raw} />
        <TweetActions />
      </div>
    </div>
  )
}

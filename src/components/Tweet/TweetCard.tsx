import Avatar from '#components/Avatar'
import Markdown from '#components/Markdown'
// import { tweetMock, userMock } from '#mocks/user'
import { Tweet } from '#types'
import TweetActions from './TweetActions'
import _ from './TweetCard.module.css'
import TweetHeader from './TweetHeader'

export default function TweetCard({ author, content, createdAt }: Tweet) {
  const { userName, displayName } = author
  return (
    <div className={_.tweetCard}>
      <div className={_.avatar}>
        <Avatar src={author.avatar} size={50} />
      </div>
      <div className={_.tweet}>
        <TweetHeader
          userName={userName}
          displayName={displayName}
          createdAt={createdAt}
        />
        <Markdown raw={content.text} />
        <TweetActions />
      </div>
    </div>
  )
}

import Avatar from '#components/Avatar'
import Markdown from '#components/Markdown'
import TweetReactions from '#components/Tweet/TweetReactions'
import TweetHeader from '#components/Tweet/TweetHeader'
import { Tweet } from '#types'
import _ from './TweetCard.module.scss'

export default function TweetCard({ author, content, createdAt, id }: Tweet) {
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
          id={id}
        />
        <Markdown raw={content.text} />
        <TweetReactions />
      </div>
    </div>
  )
}

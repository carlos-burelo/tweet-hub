import _ from './TweetHeader.module.css'
import { userMock } from '#mocks/user'
import UserName from '#components/UserName'
import { MoreIcon } from 'shared/icons'

interface Props {
  userName: string
  displayName: string
  createdAt: string
}

export default function TweetHeader({
  displayName,
  userName,
  createdAt,
}: Props) {
  return (
    <div className={_.tweetHeader}>
      <div className={_.tweetData}>
        <div className={_.tweetAuthor}>
          <span className={_.tweetAuthorName}>{displayName}</span>
          <UserName id={userName} />
        </div>
        <span className={_.tweetDate}>{createdAt}</span>
      </div>
      <div className={_.more}>
        <MoreIcon />
      </div>
    </div>
  )
}

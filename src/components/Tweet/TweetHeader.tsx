import _ from './TweetHeader.module.css'
import { userMock } from '#mocks/user'
import UserName from '#components/UserName'
import { MoreIcon } from 'shared/icons'

export default function TweetHeader({}) {
  return (
    <div className={_.tweetHeader}>
      <div className={_.tweetData}>
        <div className={_.tweetAuthor}>
          <span className={_.tweetAuthorName}>{userMock.name}</span>
          <UserName id={userMock.id} />
        </div>
        <span className={_.tweetDate}>4h</span>
      </div>
      <div className={_.more}>
        <MoreIcon />
      </div>
    </div>
  )
}

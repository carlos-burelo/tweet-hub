import UserName from '#components/UserName'
import { MoreIcon } from '#shared/icons'
import _ from './TweetHeader.module.scss'
import { User } from '#types'
import Link from '#components/Link/Link'

interface Props extends Pick<User, 'displayName' | 'userName' | 'id'> {
  createdAt: string // tweet createdAt
}

export default function TweetHeader({
  displayName,
  userName,
  createdAt,
  id,
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
      <Link href={`/tweet/${id}`}>
        <div className={_.more} title='Visualizar tweet'>
          <MoreIcon />
        </div>
      </Link>
    </div>
  )
}

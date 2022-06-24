import Avatar from '#components/Avatar'
import Button from '#components/Button'
import UserName from '#components/UserName'
import { userMock } from '#mocks/user'
import _ from './FollowChip.module.css'

export default function FollowChip() {
  return (
    <div className={_.followChip}>
      <div className={_.user}>
        <div className={_.avatar}>
          <Avatar src={userMock.avatar} />
        </div>
        <div className={_.data}>
          <div className={_.name}>{userMock.name}</div>
          <UserName id={userMock.id} />
        </div>
      </div>
      <Button text='seguir' />
    </div>
  )
}

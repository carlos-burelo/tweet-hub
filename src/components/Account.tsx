import Avatar from '#components/Avatar'
import UserName from '#components/UserName'
import { userMock } from '#mocks/user'
import _ from './Account.module.css'

export default function Account() {
  return (
    <section className={_.account}>
      <Avatar src={userMock.avatar} size={40} />
      <div className={_.info}>
        <span className={_.name}>{userMock.name}</span>
        <UserName id={userMock.id} />
      </div>
    </section>
  )
}

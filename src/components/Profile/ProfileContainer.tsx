import Header from '#components/Header'
import _ from './ProfileContainer.module.css'
import ProfileInfo from './ProfileInfo'

export default function ProfileContainer() {
  return (
    <div className={_.container}>
      <Header title='Carlos Burelo' subtitle='10 tweets' showBack />
      <ProfileInfo />
    </div>
  )
}

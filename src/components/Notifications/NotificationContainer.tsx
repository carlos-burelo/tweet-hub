import Header from '#components/Header'
import NotificationHeader from './NotificationHeader'
import NotificationCard from './NotificationCard'
import _ from './NotificationContainer.module.css'

export default function NotificationContainer() {
  return (
    <section className={_.container}>
      <Header title='Notificaciones' showBack>
        <NotificationHeader />
      </Header>
      <div className={_.notifications}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </section>
  )
}

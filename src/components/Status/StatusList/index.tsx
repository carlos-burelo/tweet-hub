import StatusCard from '../StatusCard'
import _ from './StatusList.module.scss'

interface StatusListProps {}

export default function StatusList({}: StatusListProps) {
  return (
    <div className={_.wrapper}>
      <section className={_.container}>
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </section>
    </div>
  )
}

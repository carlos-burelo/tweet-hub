import _ from './TrendsContainer.module.css'
import Header from '../Header'
import TrendsCard from './TrendsCard'
import { tweetMock } from '#mocks/user'
import TrendsHeader from './TrendsHeader'

export default function TrendsContainer() {
  return (
    <section className={_.container}>
      <Header title='Tendencias'>
        <TrendsHeader />
      </Header>
      <div className={_.trends}>
        <TrendsCard />
        <TrendsCard image={tweetMock.image} />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
      </div>
    </section>
  )
}

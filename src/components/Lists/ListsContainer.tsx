import Header from '#components/Header'
import ListCard from './ListCard'
import _ from './ListsContainer.module.css'

export default function ListsContainer({}) {
  return (
    <section className={_.container}>
      <Header title='Listas' subtitle='@carlosburelo' showBack />
      <div className={_.listContainer}>
        <h3 className={_.title}>Tus Listas</h3>
        <div className={_.lists}>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </section>
  )
}

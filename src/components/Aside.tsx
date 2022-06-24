import Account from './Account'
import _ from './Aside.module.css'
import Navbar from './Navbar'

export default function Aside() {
  return (
    <aside className={_.aside}>
      <section className={_.brand}>
        <h1>
          Tweet<mark>Hub</mark>
        </h1>
      </section>
      <Navbar />
      <Account />
    </aside>
  )
}

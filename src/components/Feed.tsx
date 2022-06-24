import _ from './Feed.module.css'
import Header from './Header'

interface Props {
  children: React.ReactNode
}

export default function Feed({ children }: Props) {
  return (
    <main className={_.feed}>
      <Header title='Inicio' />
      {children}
    </main>
  )
}

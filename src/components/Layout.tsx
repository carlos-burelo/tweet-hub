import Aside from './Aside'
import _ from './Layout.module.css'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={_.layout}>
      <Aside />
      <section className={_.container}>
        <div className={_.content}>{children}</div>
      </section>
    </div>
  )
}

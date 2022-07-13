import Navbar from '#components/Navbar'
import _ from './Layout.module.scss'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Tweet Hub</title>
      </Head>
      <div className={_.layout}>
        <Navbar />
        <section className={_.container}>
          <div className={_.content}>{children}</div>
        </section>
      </div>
    </>
  )
}

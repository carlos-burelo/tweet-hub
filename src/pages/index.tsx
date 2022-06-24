import Feed from '#components/Feed'
import Layout from '#components/Layout'
import Search from '#components/Search'
import Sidebar from '#components/Sidebar'
import TweetCard from '#components/Tweet/TweetCard'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Feed>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </Feed>
      <Sidebar showTrends showFollow showSearch />
    </Layout>
  )
}

export default Home

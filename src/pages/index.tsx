import Feed from '#components/Feed'
import Layout from '#components/Layout'
import Sidebar from '#components/Sidebar'
import TweetCard from '#components/Tweet/TweetCard'
import query from '#graphql/client'
import { Tweet } from '#types'
import type { NextPage } from 'next'

interface Props {
  tweets: Tweet[]
}
const Home: NextPage<Props> = ({ tweets }) => {
  return (
    <Layout>
      <Feed>
        {tweets.map(tweet => (
          <TweetCard key={tweet.id} {...tweet} />
        ))}
      </Feed>
      <Sidebar showTrends showFollow showSearch />
    </Layout>
  )
}
export const getServerSideProps = async () => {
  const { tweets } = await query(
    `tweets {
      id,
      author {
        displayName,
        avatar,
        userName
      }
      content {
        text
        media
      }
    }`
  )
  return {
    props: {
      tweets,
    },
  }
}

export default Home

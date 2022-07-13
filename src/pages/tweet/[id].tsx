import Layout from '#components/Layout'
import ListsContainer from '#components/Lists/ListContainer'
import Sidebar from '#components/Sidebar'
import TweetCard from '#components/Tweet/TweetCard'
import query, { tweetQuery } from '#graphql/client'
import type { GetServerSideProps, NextPage } from 'next'
import { Tweet } from '#types'
import Header from '#components/Header'

interface Props {
  tweet: Tweet
}

const TweetPage: NextPage<Props> = ({ tweet }) => {
  console.log(tweet)
  return (
    <Layout>
      <section>
        <Header title='Tweet' showBack />
        <TweetCard {...tweet} />
      </section>
      <Sidebar showFollow showSearch showTrends />
    </Layout>
  )
}

export default TweetPage

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query
  const { tweet } = await query<Tweet>(tweetQuery, { id })
  return {
    props: {
      tweet,
    },
  }
}

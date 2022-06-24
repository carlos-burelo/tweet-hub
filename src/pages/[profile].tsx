import Layout from '#components/Layout'
import ProfileContainer from '#components/Profile/ProfileContainer'
import Sidebar from '#components/Sidebar'
import type { NextPage } from 'next'

const Lists: NextPage = () => {
  return (
    <Layout>
      <ProfileContainer />
      <Sidebar showFollow showSearch showTrends />
    </Layout>
  )
}

export default Lists

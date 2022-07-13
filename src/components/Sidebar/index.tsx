import { followUsersQuery } from '#graphql/client'
import useQuery from '#hooks/useQuery'
import FollowChip from '#components/Follow/FollowChip'
import Search from '#components/Search'
import _ from './Sidebar.module.scss'
import groups from '#mocks/groups'
import GroupCard from '#components/Groups/GroupCard'

interface SidebarProps {
  showFollow?: boolean
  showTrends?: boolean
  showSearch?: boolean
}

export default function Sidebar({
  showSearch,
  showFollow,
  showTrends,
}: SidebarProps) {
  const { loading, data } = useQuery(followUsersQuery)
  return (
    <div className={_.container}>
      {showSearch && (
        <div className={_.search}>
          <Search />
        </div>
      )}
      <aside className={_.sidebar}>
        {showTrends && (
          <AsideCard title='Unete a una comunidad'>
            {groups.map(group => (
              <GroupCard key={group.id} {...group} />
            ))}
          </AsideCard>
        )}

        {showFollow && (
          <AsideCard title='A quién seguir?'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              data.users.map((user: any) => (
                <FollowChip key={user.id} {...user} />
              ))
            )}
          </AsideCard>
        )}
      </aside>
    </div>
  )
}

interface SideCardProps {
  title: string
  children: React.ReactNode
}
function AsideCard({ title, children }: SideCardProps) {
  return (
    <section className={_.asideCard}>
      <h3 className={_.title}>{title}</h3>
      <div className={_.content}>{children}</div>
      <div className={_.viewMore}>Ver mas</div>
    </section>
  )
}

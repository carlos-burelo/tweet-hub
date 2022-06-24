import FollowChip from './Follow/FollowChip'
import Search from './Search'
import _ from './Sidebar.module.css'

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
  return (
    <div className={_.container}>
      {showSearch && (
        <div className={_.search}>
          <Search />
        </div>
      )}
      <aside className={_.sidebar}>
        {showTrends && (
          <AsideCard title='Que esta pasando?'>
            <h2>hello</h2>
          </AsideCard>
        )}

        {showFollow && (
          <AsideCard title='A quién seguir?'>
            <FollowChip />
            <FollowChip />
            <FollowChip />
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
      <div className={_.viewMore}>View More</div>
    </section>
  )
}

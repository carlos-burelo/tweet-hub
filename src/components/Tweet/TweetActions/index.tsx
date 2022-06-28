import _ from './TweetActions.module.scss'
import { MediaIconsMap } from '#shared/icons'

export default function TweetActions() {
  return (
    <section className={_.actions}>
      <Action name='image' />
      <Action name='gif' />
      <Action name='emoji' />
    </section>
  )
}
interface ActionProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}
function Action({ name }: ActionProps) {
  const [Icon] = MediaIconsMap[name]
  return <div className={_.action}>{Icon}</div>
}

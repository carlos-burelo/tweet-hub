import _ from './NavLink.module.css'
import Link from 'next/link'
import { NavIcons } from 'shared/icons'
import { useRouter } from 'next/router'

interface Props {
  to: string
  text: React.ReactNode
}

export default function NavLink({ to, text, ...props }: Props) {
  const { asPath: path } = useRouter()
  const route = to.includes('?') ? to.split('?')[0] : to
  const [Icon, IconActive] = NavIcons[route] || NavIcons['/profile']
  const isActive = path == to
  return (
    <Link href={to} {...props}>
      <a className={_.link}>
        {isActive ? IconActive : Icon}
        <span>{text}</span>
      </a>
    </Link>
  )
}

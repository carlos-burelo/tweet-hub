import _ from './UserName.module.css'
import Link from 'next/link'

interface Props {
  id: string
}

export default function UserName({ id }: Props) {
  return (
    <Link href={`/${id}`}>
      <a className={_.username}>@{id}</a>
    </Link>
  )
}

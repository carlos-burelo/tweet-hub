import _ from './UserName.module.css'
import Link from 'next/link'
import FollowCard from './Follow/FollowCard'
import { useState } from 'react'
import useWindowSize from '#hooks/useWindowSize'
import { User } from '#types'
import query from '#graphql/client'
import { userQuery } from '#graphql/client/queys'

interface Props {
  id: string
}

type UserCard = Pick<User, 'avatar' | 'bio' | 'displayName' | 'userName'>
export default function UserName({ id }: Props) {
  const [user, setUser] = useState<UserCard>({
    avatar: '/profile.png',
    bio: '',
    displayName: '',
    userName: '',
  })
  const [showInfo, setShowInfo] = useState(false)
  const { height } = useWindowSize()
  const [positionUp, setPositionUp] = useState(false)
  const handleInfoPosition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const Limit = 300 + 70
    let positionUp = false
    const mouse = { x: e.clientX, y: e.clientY }
    if (mouse.y + Limit > height) positionUp = true
    setPositionUp(positionUp)
  }
  if (showInfo && user.userName !== id) {
    query(userQuery, { userName: id }).then(data => {
      if (data) setUser(data.user)
    })
  }
  return (
    <div className={_.link}>
      <Link href={`/${id}`}>
        <a
          className={_.username}
          onMouseMove={handleInfoPosition}
          onMouseEnter={() => setShowInfo(true)}
          onMouseLeave={() => setShowInfo(false)}
        >
          @{id}
        </a>
      </Link>
      {showInfo && (
        <FollowCard top={positionUp} onHide={setShowInfo} {...user} />
      )}
    </div>
  )
}

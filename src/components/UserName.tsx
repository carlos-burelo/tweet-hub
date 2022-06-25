import _ from './UserName.module.css'
import Link from 'next/link'
import FollowCard from './Follow/FollowCard'
import { useState } from 'react'
import useWindowSize from '#hooks/useWindowSize'

interface Props {
  id: string
}

export default function UserName({ id }: Props) {
  // muestra la información del usuario cuando se hace hover en el nombre de usuario y se ajusta a la posición  dependiendo del tamaño de la pantalla y
  const [showInfo, setShowInfo] = useState(false)
  const { height, width } = useWindowSize()
  const [positionUp, setPositionUp] = useState(false)
  const handleInfoPosition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const Limit = 300 + 70
    let positionUp = false
    const mouse = { x: e.clientX, y: e.clientY }
    const viewport = { x: width, y: height }
    console.log(mouse, viewport)
    if (mouse.y + Limit > height) positionUp = true
    setPositionUp(positionUp)
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
      {showInfo && <FollowCard top={positionUp} onHide={setShowInfo} />}
    </div>
  )
}

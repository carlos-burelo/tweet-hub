import Avatar from '#components/Avatar'
import Image from 'next/image'
import _ from './GroupCard.module.scss'

interface GroupCardProps {
  title: string
  isPublic: boolean
  image: string
  banner: string
  members: string[]
}

export default function GroupCard({
  banner,
  image,
  isPublic,
  title,
  members,
}: GroupCardProps) {
  return (
    <article className={_.container}>
      <div className={_.banner}>
        <Image
          src={banner}
          alt={title}
          width={300}
          height={100}
          layout='responsive'
          className={_.bannerImg}
          objectFit='cover'
          objectPosition='center'
        />
      </div>

      <div className={_.data}>
        <div className={_.avatar}>
          <Avatar src={image} size={55} className={_.avatarImg} />
        </div>
        <div className={_.info}>
          <h3 className={_.title}>{title}</h3>
          <div className={_.meta}>
            <span>{members.length} Miembros</span>
            <div className={_.type}>
              {isPublic ? '🌐 Público' : '🔒 Privado'}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

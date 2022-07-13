import _ from './StatusCard.module.scss'
import Avatar from '#components/Avatar'
import Image from 'next/image'

interface StatusCardProps {}

export default function StatusCard({}: StatusCardProps) {
  return (
    <div className={_.container}>
      <Image
        src='/deno.jpg'
        alt='Status'
        width={120}
        height={190}
        objectFit='cover'
        layout='responsive'
        className={_.img}
      />
      <div className={_.info}>
        <div className={_.avatar}>
          <Avatar size={45} src='/profile.png' />
        </div>
        <span>jhon doe</span>
      </div>
    </div>
  )
}

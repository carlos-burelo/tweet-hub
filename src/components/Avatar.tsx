import _ from './Avatar.module.css'
import Image from 'next/image'

interface Props {
  src: string
  size?: number
  className?: string
}
export default function Avatar({ src, size = 48, className }: Props) {
  return (
    <Image
      src={src}
      width={size}
      height={size}
      className={_.avatar + ' ' + className}
      alt='avatar'
    />
  )
}

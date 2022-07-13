import _ from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  primary?: boolean
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}
const cx = (...args: string[]) => args.filter(Boolean).join(' ')

export default function Button({
  text,
  primary,
  children,
  size,
  ...props
}: Props) {
  return (
    <button
      className={cx(_.button, primary ? _.primary : '', size ? _[size] : '')}
      {...props}
    >
      {text || children}
    </button>
  )
}

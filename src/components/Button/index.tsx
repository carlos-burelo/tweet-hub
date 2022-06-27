import _ from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export default function Button({ text, ...props }: Props) {
  return (
    <button className={_.button} {...props}>
      {text}
    </button>
  )
}

import _ from './Button.module.css'

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

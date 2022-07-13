import _ from './ContentInput.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export default function ContentInput({ ...props }: Props) {
  return <textarea className={_.textinput} {...props} />
}

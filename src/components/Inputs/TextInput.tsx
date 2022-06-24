import _ from './TextInpu.module.css'

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export default function TextInput({ ...props }: Props) {
  return <textarea {...props} />
}

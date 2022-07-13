import _ from './TextInput.module.scss'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className={_.textInput}>
      <label className={_.label} htmlFor='field'>
        {label}
      </label>
      <input className={_.input} type='text' {...props} />
    </div>
  )
}

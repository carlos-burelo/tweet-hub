import { InputImageIcon } from '#shared/icons'
import _ from '../TweetActions.module.scss'

export default function UploadImage() {
  return (
    <div className={_.inputContainer}>
      <input className={_.input} />
      <div className={_.action}>
        <InputImageIcon />
      </div>
    </div>
  )
}

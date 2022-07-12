import { InputGifIcon } from '#shared/icons'
import _ from '../TweetActions.module.scss'

export default function UploadGif() {
  return (
    <div className={_.inputContainer}>
      <input className={_.input} />
      <div className={_.action}>
        <InputGifIcon />
      </div>
    </div>
  )
}

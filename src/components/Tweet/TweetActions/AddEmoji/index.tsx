import { InputEmojiIcon } from '#shared/icons'
import _ from '../TweetActions.module.scss'

export default function AddEmoji() {
  return (
    <div className={_.action}>
      <InputEmojiIcon />
    </div>
  )
}

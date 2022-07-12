import _ from './TweetActions.module.scss'
import AddEmoji from './AddEmoji'
import AddSurvey from './AddSurvey'
import UploadGif from './UploadGif'
import UploadImage from './UploadImage'

export default function TweetActions() {
  return (
    <section className={_.actions}>
      <UploadImage />
      <UploadGif />
      <AddEmoji />
      <AddSurvey />
    </section>
  )
}

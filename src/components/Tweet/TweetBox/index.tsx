import Avatar from '#components/Avatar'
import Button from '#components/Button'
import ContentInput from '#components/Input/ContentInput'
import { userMock } from '#mocks/user'
import TweetActions from '../TweetActions'
import _ from './TweetBox.module.scss'
import { MouseEvent } from 'react'

interface TweetBoxProps {
  handleSubmit?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function TweetBox({ handleSubmit }: TweetBoxProps) {
  const handleSubmitTweet = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleSubmit && handleSubmit(e)
  }
  return (
    <div className={_.tweetBox}>
      <div className={_.user}>
        <Avatar src={userMock.avatar} />
      </div>
      <div className={_.tweetArea}>
        <div className={_.input}>
          <ContentInput placeholder='Que estas pensando?' />
        </div>
        <div className={_.actions}>
          <TweetActions />
          <Button text='Twittear' onClick={handleSubmitTweet} primary />
        </div>
      </div>
    </div>
  )
}

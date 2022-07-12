import Button from '#components/Button'
import { CrossIcon, QuillIcon } from '#shared/icons'
import { useState } from 'react'
import TweetBox from '../TweetBox'
import _ from './TweetModal.module.scss'

export default function TweetModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button primary size='large' onClick={() => setIsOpen(true)}>
        <QuillIcon />
        <span className={_.text}>Twittear</span>
      </Button>
      {isOpen && (
        <div className={_.modal}>
          <div className={_.modalContent}>
            <div className={_.modalHead}>
              <button className={_.modalClose} onClick={() => setIsOpen(false)}>
                <CrossIcon />
              </button>
            </div>
            <TweetBox handleSubmit={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

import TextInput from '#components/Input/TextInput'
import Modal from '#components/Modal'
import { InputSurveyIcon } from '#shared/icons'
import { useState } from 'react'
import styles from '../TweetActions.module.scss'
import _ from './AddSurvey.module.scss'

export default function AddSurvey() {
  const [isOpen, setIsOpen] = useState(false)
  const onCloseHandler = () => setIsOpen(false)
  return (
    <>
      <div className={styles.action} onClick={() => setIsOpen(true)}>
        <InputSurveyIcon />
      </div>
      <Modal isOpen={isOpen} onClose={onCloseHandler}>
        <h1>Crear encuesta</h1>
        <form>
          <TextInput label='Titutlo de la encuesta' />
        </form>
      </Modal>
    </>
  )
}

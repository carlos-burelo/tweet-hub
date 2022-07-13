import { CrossIcon } from '#shared/icons'
import _ from './Modal.module.scss'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div className={_.modal}>
          <div className={_.modalContent}>
            <div className={_.modalHead}>
              <button className={_.modalClose} onClick={onClose}>
                <CrossIcon />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

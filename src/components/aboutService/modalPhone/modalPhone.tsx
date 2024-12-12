import { Modal } from '../../../ui/Modal/Modal'
import style from './modalPhone.module.css'

interface IModalPhone {
  id: number
  label: string
  path: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const modalArr: IModalPhone[] = [
  {
    id: 1,
    label: 'Что дает BOLZ',
    path: '#whatgive',
  },
  {
    id: 2,
    label: 'Что делаем мы',
    path: '#whatdo',
  },
  {
    id: 3,
    label: 'Что дает BOLZ',
    path: '#whatsuccess',
  },
  {
    id: 4,
    label: 'Что дает BOLZ',
    path: '#model',
  },
]

export const ModalPhone = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} lazy hiddenClose onClose={onClose}>
      <ul className={style.modal__list}>
        {modalArr.map((element) => (
          <li key={element.id}>
            <a
              onClick={onClose}
              className={style.modal__link}
              href={element.path}
            >
              {element.label}
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  )
}

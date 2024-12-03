import { Link } from 'react-router-dom'
import style from './footerService.module.css'

interface IFooter {
  id: number
  path: string
  label: string
}

const footerAboutArr: IFooter[] = [
  {
    id: 1,
    path: '#whatgive',
    label: 'что дает BOLZ',
  },
  {
    id: 2,
    path: '#whatdo',
    label: 'Что делаем мы',
  },
  {
    id: 3,
    path: '#whatsuccess',
    label: 'что Необходимо для успеха',
  },
  {
    id: 4,
    path: '#model',
    label: 'Интеграционная модель',
  },
]

export const FooterNav = () => {
  return (
    <ul className={style.footer__list}>
      {footerAboutArr.map((element) => (
        <li key={element.id}>
          <Link className={style.footer__link} to={element.path}>
            {element.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

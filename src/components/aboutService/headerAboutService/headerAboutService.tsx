import { Link } from 'react-router-dom'
import style from './headerAboutService.module.css'

interface IHeader {
  id: number
  path: string
  label: string
}

const headerAboutArr: IHeader[] = [
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

export const HeaderAboutService = () => {
  return (
    <header>
      <div className="container">
        <div className={style.header__section}>
          <Link className={style.header__back} to={'/'}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 7L5 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 17L5 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            На главную
          </Link>
          <nav>
            <ul className={style.header__list}>
              {headerAboutArr.map((element) => (
                <li key={element.id}>
                  <Link className={style.header__link} to={element.path}>
                    {element.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link className={style.header__about} to={'about-service'}>
            О нас
          </Link>
        </div>
      </div>
    </header>
  )
}

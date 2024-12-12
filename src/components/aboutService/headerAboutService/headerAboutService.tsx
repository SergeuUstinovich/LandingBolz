import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { BurgerSvg } from '../../../assets/svg/burgerSvg'
import { HeaderArrowSvg } from '../../../assets/svg/headerArrowSvg'
import { ModalPhone } from '../modalPhone/modalPhone'
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
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const mediaQuery = useMediaQuery({
    query: '(min-width: 1200px)',
  })
  const mediaPhoneQuery = useMediaQuery({
    query: '(max-width: 992px)',
  })
  return (
    <header>
      <div className={style.header__container}>
        <div className={style.header__section}>
          <Link className={style.header__back} to={'/'}>
            <HeaderArrowSvg />
            {mediaQuery && <span>На главную</span>}
          </Link>
          {mediaPhoneQuery ? (
            <button onClick={handleOpen} className={style.burger__btn}>
              <BurgerSvg className={style.burger} />
            </button>
          ) : (
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
          )}
          <Link className={style.header__about} to={'about-service'}>
            О нас
          </Link>
        </div>
      </div>
      <ModalPhone onClose={handleClose} isOpen={isOpen} />
    </header>
  )
}

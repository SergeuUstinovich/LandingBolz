import { ReactSVG } from 'react-svg'
import { Button } from '../../../button'
import styles from './header.module.css'

type TMenu = {
  href: string
  label: string
}[]

const menu: TMenu = [
  { href: 'about', label: 'О сервисе' },
  { href: 'how', label: 'Как это работает' },
  { href: 'loyalty', label: 'Программа лояльности' },
  { href: 'partners', label: 'Партнеры' },
  { href: 'faq', label: 'Faq' },
]

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <ReactSVG src={'assets/logoWithTech.svg'} className={styles.logo} />
        <ul className={styles.menu}>
          {menu.map(({ label, href }) => (
            <a href={'#'} key={href}>
              <li>{label}</li>
            </a>
          ))}
        </ul>
        <Button>Попробовать</Button>
      </div>
    </div>
  )
}

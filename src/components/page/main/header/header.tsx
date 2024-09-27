import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ReactSVG } from 'react-svg'
import { ButtonLink } from '../../../button-link'
import styles from './header.module.css'

type TMenu = {
  href: string
  label: string
}[]

const menu: TMenu = [
  { href: '#easy-use', label: 'О сервисе' },
  { href: '#how-to-get', label: 'Как это работает' },
  { href: '#feature', label: 'Партнеры' },
  { href: '#soon', label: 'Программа лояльности' },
  { href: '#form', label: 'Faq' },
]

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <a href="http://bolz.tech">
          <ReactSVG src={'assets/logoWithTech.svg'} className={styles.logo} />
        </a>
        <ul className={styles.menu}>
          {menu.map(({ label, href }) => (
            <AnchorLink href={href} key={href}>
              <li>{label}</li>
            </AnchorLink>
          ))}
        </ul>
        <ButtonLink href={'https://service.bolz.tech'} target={'_blank'}>
          Попробовать
        </ButtonLink>
      </div>
    </div>
  )
}

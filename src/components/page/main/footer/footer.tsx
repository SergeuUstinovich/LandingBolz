import { ReactSVG } from 'react-svg'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <ReactSVG src={'assets/BOLZ.svg'} className={styles.logo} />
        <div className={styles.topRight}>
          <div className={styles.menu}>
            <a href={'#'}>О сервисе</a>
            <a href={'#'}>Как это работает</a>
            <a href={'#'}>Программа лояльности</a>
            <a href={'#'}>Партнеры</a>
            <a href={'#'}>Faq</a>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactBox}>
              <ReactSVG src={'assets/mail.svg'} />
              <div className={styles.contact}>bolz@zaryad.ru</div>
            </div>
            <div className={styles.contactBox}>
              <ReactSVG src={'assets/telegram.svg'} />
              <div className={styles.contact}>@bolzbot</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomBox}>
          <div className={styles.bottomItem}>© Bolz, 2024</div>

          <div className={styles.bottomBoxRight}>
            <ReactSVG
              src={'assets/footer/union.svg'}
              className={styles.imgUnion}
            />
            <div className={styles.bottomItem}>
              <a href="#">Правовые договоры и соглашения</a>
            </div>
            <div className={styles.bottomItem}>
              <a href="#">Руководство пользователя</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

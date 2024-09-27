import { ReactSVG } from 'react-svg'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <a href="http://bolz.tech">
          <ReactSVG src={'assets/BOLZ.svg'} className={styles.logo} />
        </a>
        <div className={styles.topRight}>
          <div className={styles.menu}>
            <a href={'#easy-use'}>О сервисе</a>
            <a href={'#how-to-get'}>Как это работает</a>
            <a href={'#feature'}>Партнеры</a>
            <a href={'#soon'}>Программа лояльности</a>
            <a href={'#form'}>Faq</a>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactBox}>
              <ReactSVG src={'assets/mail.svg'} />
              <a href="mailto:info@bolz.tech">
                <div className={styles.contact}>info@bolz.tech</div>
              </a>
            </div>
            <div className={styles.contactBox}>
              <ReactSVG src={'assets/telegram.svg'} />
              <a href="https://t.me/BolzSupport_bot">
                <div className={styles.contact}>@BolzSupport_bot</div>
              </a>
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

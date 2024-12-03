import { FooterMainSvg } from '../../../assets/svg/footerMainSvg'
import { FooterSvg } from '../../../assets/svg/footerSvg'
import { FooterTmSvg } from '../../../assets/svg/footerTmSvg'
import { FooterNav } from './footerNav'
import style from './footerService.module.css'

export const FooterService = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.footer__upper}>
          <div className={style.footer__left}>
            <img
              width={263}
              height={87}
              src={'/assets/aboutservice/bolz__footer.png'}
              alt="bolz"
            />
            <p>
              ООО «ОШС» Москва, ул. Новинки, дом 31, пом. 2/1 ИНН: 9725164027
              ОГРН: 1247700493358
            </p>
          </div>
          <FooterNav />
          <address className={style.footer__address}>
            <a href="mailto:info@bolz.tech">
              <FooterMainSvg /> Info@bolz.tech
            </a>
            <a href="https://t.me/BolzSupport_bot">
              <FooterTmSvg />
              @bolzsupport_bot
            </a>
          </address>
        </div>
        <div className={style.footer__down}>
          <p className={style.footer__bolz}>© Bolz, 2024</p>
          <FooterSvg />
          <ul className={style.footer__right}>
            <li>Правовые договоры и соглашения</li>
            <li>Руководство пользователя</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

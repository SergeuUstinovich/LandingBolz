import { WhatGiveDown } from './whatGiveDown'
import { WhatGiveUpper } from './whatGiveUpper'
import style from './whatgive.module.css'

export const WhatGive = () => {
  return (
    <section id="whatgive" className={style.whatgive__section}>
      <div className={style.whatgive__container}>
        <h2 className={style.whatgive__title}>Что дает BOLZ</h2>
        <ul className={style.whatgive__list}>
          <li className={style.whatgive__item}>
            <WhatGiveUpper />
          </li>
          <li className={style.whatgive__item}>
            <WhatGiveDown />
          </li>
        </ul>
      </div>
    </section>
  )
}

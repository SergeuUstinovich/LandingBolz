import { WhatGiveProgram } from './whatGiveProgram'
import style from './whatgive.module.css'

export const WhatGiveDown = () => {
  return (
    <div>
      <h3>
        <img src={'/assets/aboutservice/what__down.png'} alt="иконка" />
        приложениям
      </h3>
      <ul className={style.whatgive__flex}>
        <li>
          <WhatGiveProgram />
        </li>
        <li>
          <img
            src={'/assets/aboutservice/whatgive__down.png'}
            alt="картинка с партнерами"
          />
        </li>
      </ul>
    </div>
  )
}

import { ReactNode } from 'react'
import { WhatsuccessFSvg } from '../../../assets/svg/whatsuccessFSvg'
import { WhatsuccessFoSvg } from '../../../assets/svg/whatsuccessFoSvg'
import { WhatsuccessSSvg } from '../../../assets/svg/whatsuccessSSvg'
import { WhatsuccessTSvg } from '../../../assets/svg/whatsuccessTSvg'
import style from './whatSuccess.module.css'

interface IWhatSuccess {
  id: number
  title: string
  label: string
  icon: ReactNode
}

const whatSuccessArr: IWhatSuccess[] = [
  {
    id: 1,
    icon: <WhatsuccessFSvg />,
    title: 'приложение',
    label: 'желательно на kotlin/java, swift',
  },
  {
    id: 2,
    icon: <WhatsuccessSSvg />,
    title: 'доступ К ДАННЫМ',
    label: 'только по уникальным идентификаторам ПОЛЬЗОВАТЕЛЕЙ',
  },
  {
    id: 3,
    icon: <WhatsuccessTSvg />,
    title: 'Конфиденциальные данные и информация',
    label: 'не требуются',
  },
  {
    id: 4,
    icon: <WhatsuccessFoSvg />,
    title: 'ресурс команды приложения минимален',
    label: 'для аудита и тестирования сервиса',
  },
]

export const WhatSuccess = () => {
  return (
    <section id="whatsuccess" className={style.whatsuccess__section}>
      <div className="container">
        <h2 className={style.whatsuccess__title}>Что Необходимо для успеха</h2>
        <ul className={style.whatsuccess__grid}>
          {whatSuccessArr.map((element) => (
            <li className={style.whatsuccess__item} key={element.id}>
              {element.icon}
              <h3>{element.title}</h3>
              <p>{element.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

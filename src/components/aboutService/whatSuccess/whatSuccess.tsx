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
    icon: <WhatsuccessFSvg className={style.whatsuccess__svg} />,
    title: 'приложение',
    label: 'желательно на kotlin/java, swift',
  },
  {
    id: 2,
    icon: <WhatsuccessSSvg className={style.whatsuccess__svg} />,
    title: 'доступ К ДАННЫМ',
    label: 'только по уникальным идентификаторам ПОЛЬЗОВАТЕЛЕЙ',
  },
  {
    id: 3,
    icon: <WhatsuccessTSvg className={style.whatsuccess__svg} />,
    title: 'Конфиденциальные данные и информация',
    label: 'не требуются',
  },
  {
    id: 4,
    icon: <WhatsuccessFoSvg className={style.whatsuccess__svg} />,
    title: 'ресурс команды приложения минимален',
    label: 'для аудита и тестирования сервиса',
  },
]

export const WhatSuccess = () => {
  return (
    <section id="whatsuccess" className={style.whatsuccess__section}>
      <div className={style.whatsuccess__container}>
        <h2 className={style.whatsuccess__title}>Что Необходимо для успеха</h2>
        <ul className={style.whatsuccess__grid}>
          {whatSuccessArr.map((element) => (
            <li className={style.whatsuccess__item} key={element.id}>
              {element.icon}
              <h3 className={style.whatsuccess__ititle}>{element.title}</h3>
              <p className={style.whatsuccess__ilabel}>{element.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

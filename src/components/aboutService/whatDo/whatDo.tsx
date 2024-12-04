import { ReactNode } from 'react'
import { WhatdoFSvg } from '../../../assets/svg/whatdoFSvg'
import { WhatdoFoSvg } from '../../../assets/svg/whatdoFoSvg'
import { WhatdoSSvg } from '../../../assets/svg/whatdoSSvg'
import { WhatdoTSvg } from '../../../assets/svg/whatdoTSvg'
import style from './whatDo.module.css'

interface IWhatDo {
  id: number
  title: string
  label: string
  icon: ReactNode
}

const whatDoArr: IWhatDo[] = [
  {
    id: 1,
    icon: <WhatdoFSvg className={style.whatdo__svg} />,
    title: 'Разработка ПО приложения',
    label: 'web-app сервиса',
  },
  {
    id: 2,
    icon: <WhatdoSSvg className={style.whatdo__svg} />,
    title: 'Внедрение ПО Bolz',
    label: 'URL ссылка в баннер главной страницы приложения',
  },
  {
    id: 3,
    icon: <WhatdoTSvg className={style.whatdo__svg} />,
    title: 'Подключение к экосистеме',
    label: 'терминальной сети зарядок партнеров ',
  },
  {
    id: 4,
    icon: <WhatdoFoSvg className={style.whatdo__svg} />,
    title: 'Монетизация',
    label: 'делимся до 40% полученного revenue',
  },
]

export const WhatDo = () => {
  return (
    <section id="whatdo" className={style.whatdo__section}>
      <div className={style.whatdo__container}>
        <h2 className={style.whatdo__title}>Что делаем мы</h2>
        <ul className={style.whatdo__grid}>
          {whatDoArr.map((element) => (
            <li className={style.whatdo__item} key={element.id}>
              {element.icon}
              <h3 className={style.whatdo__ititle}>{element.title}</h3>
              <p className={style.whatdo__ilabel}>{element.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

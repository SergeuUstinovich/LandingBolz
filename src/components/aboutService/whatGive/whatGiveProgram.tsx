import style from './whatgive.module.css'

interface IWhatGive {
  id: number
  title: string
  label: string
}

const whatGiveArr: IWhatGive[] = [
  {
    id: 1,
    title: 'Подарите своим пользователям новый уровень лояльности',
    label:
      'Наша витрина, идеально вписанная в ваш дизайн - повысит метрики NPS и CSI',
  },
  {
    id: 2,
    title:
      'Сделайте ваше приложение еще более полезным благодоря росту метрик  ER и SD',
    label:
      'Пользователь превратится в постоянного гостя, возвращающегося за новыми возможностями приложения, увеличив кол-во визитов до 5 раз',
  },
  {
    id: 3,
    title:
      'С нами вы получите не только инструменты удовлетворенности пользователей, но и монетизиацию',
    label: 'Мы делимся с вами доходом от 20% до 50% с нашего revenue sharing',
  },
]

export const WhatGiveProgram = () => {
  return (
    <ul className={style.whatgivedown__grid}>
      {whatGiveArr.map((element) => (
        <li key={element.id}>
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 1.24854L8.50809 13.7512L1 6.23775"
              stroke="#14D97B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4>{element.title}</h4>
          <p>{element.label}</p>
        </li>
      ))}
    </ul>
  )
}

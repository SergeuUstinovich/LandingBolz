import style from './whatgive.module.css'

interface IWhatGive {
  id: number
  title: string
  label: string
}

const whatGiveArr: IWhatGive[] = [
  {
    id: 1,
    title: 'Раскройте потенциал вашего бизнеса с BOLZ',
    label:
      'Увеличьте поток клиентов на 25-100%. Знаем, как сделать ваши услуги аренды целевыми',
  },
  {
    id: 2,
    title: 'Миллионы потенциальных клиентов уже ждут вас в сервисе BOLZ',
    label:
      'Превратите аудиторию в реальные аренды. Вместе мы увеличим конверсию в 1–5% от их числа',
  },
  {
    id: 3,
    title: 'Сделайте вашу бизнес-модель ещё прибыльнее',
    label:
      'BOLZ — надёжный партнёр для достижения положительной динамики вашей юнит-экономики',
  },
]

export const WhatGiveUpper = () => {
  return (
    <div>
      <h3>
        <img
          src={'/assets/aboutservice/what__upper.png'}
          alt="иконка с конструкцией"
        />
        шеринг сервисам
      </h3>
      <ul className={style.what__grid}>
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
    </div>
  )
}

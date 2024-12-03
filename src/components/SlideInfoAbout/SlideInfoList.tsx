import { useMediaQuery } from 'react-responsive'
import { ReactSVG } from 'react-svg'
import SlideInfoAbout from './SlideInfoAbout'
import style from './SlideInfoAbout.module.css'

const arr = [
  {
    id: '1',
    title: 'LOREM IPSUM',
    text: 'BOLZ как сервис, будет стимулировать пользователей к более сознательному потреблению и ведению образа жизни с минимальным воздействием на окружающую среду.',
  },
  {
    id: '2',
    title: 'LOREM IPSUM',
    text: 'Мы создаём сообщество, в котором взаимодействие и обмена опытом между пользователями способствует его социальному развитию.',
  },
  {
    id: '3',
    title: 'LOREM IPSUM',
    text: 'Наша экосистема учитывает интересы различных слоёв общества, в том числе помогая развивать экономику через поддержку глобальных и локальных шеринг-сервисов.',
  },
]

function SlideInfoList() {
  const is1920 = useMediaQuery({ query: '(min-width: 1920px)' })
  const is1440 = useMediaQuery({ query: '(min-width: 1440px)' })
  const is1024 = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <>
      <div className={style.boximg}>
        <img src="assets/aboutImg.png" alt="" />
      </div>
      <div className={style.boxInfo}>
        <div className={style.boxTitle}>
          {(is1920 || is1440 || is1024) && (
            <ReactSVG
              src={`assets/lineAboutOne.svg`}
              className={style.svgAbout}
            />
          )}
          <h3 className={style.title}>НАША МИССИЯ</h3>
        </div>
        <div className={style.boxDescr}>
          <p className={style.descr}>
            Строим будущее вместе. BOLZ — это ESG стартап, который объединяет
            людей и ресурсы для создания более удобного и устойчивого мира. Мы
            веримЮ что совместными усиоиями можем сделать нашу планету лучше.
          </p>
          <p className={style.descr}>
            Мы создаём экосистему, в которой основное внимание уделяется тому,
            чтобы каждый пользователь мог легко находить и использовать
            различные шеринг-сервисы, что не только облегчает доступ к нужным
            ресурсам, но и способствует гораздо более простому и рациональному
            использованию уже существующих вещей и услуг.
          </p>
        </div>
      </div>
      <div className={style.boxInfo}>
        <div className={style.boxTitle}>
          {(is1920 || is1440 || is1024) && (
            <ReactSVG
              src={`assets/lineAboutTwo.svg`}
              className={style.svgAbout}
            />
          )}
          <h3 className={style.title}>НАША ВИДЕНИЕ</h3>
        </div>
        <ul className={`${style.boxDescr} ${style.list}`}>
          {arr.map((item) => (
            <li key={item.id}>
              <SlideInfoAbout
                id={item.id}
                title={item.title}
                text={item.text}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SlideInfoList

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { ReactSVG } from 'react-svg'
import { Button } from '../../../button'
import { Service } from '../../../service'
import styles from './eco-system.module.css'

export const EcoSystem = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.textBox}>
          <div className={styles.tag}>#развитие</div>
          <p className={styles.text}>
            МЫ РаЗВИВАЕМ НАШУ ЭКОСИСТЕМУ сервисов и В ближайшее время предложим
            ещё больше шеринга от Партнёров
          </p>
          <Button className={'flex gap-[12px]'}>
            <ReactSVG src={'assets/union.svg'} className={'w-[13px]'} />
            <div>Попробовать</div>
          </Button>
        </div>

        <div className={styles.servicesBox}>
          <div>
            <a href="#">
              <Service
                iconName={'powerbank'}
                title={'Пауэрбанки'}
                isAvaliable
              />
            </a>
            <Service iconName={'bike'} title={'Велосипеды'} />
            <Service
              iconName={'chargingStations'}
              title={'ЗАРЯДНЫЕ СТАНЦИИ (ЭЗС)'}
            />
          </div>

          <div className={styles.servicesBoxRight}>
            <Service iconName={'scooter'} title={'Самокат'} />
            <Service iconName={'сarSharing'} title={'Каршеринг'} />
            <Service iconName={'coworking'} title={'Коворкинг'} />
          </div>
        </div>

        <Splide
          options={{
            autoWidth: true,
            wheel: true,
            gap: '16px',
            arrows: false,
            pagination: false,
          }}
          className={styles.splide}
        >
          <SplideSlide>
            <a href="#">
              <Service
                iconName={'powerbank'}
                title={'Пауэрбанки'}
                isAvaliable
              />
            </a>
          </SplideSlide>
          <SplideSlide>
            <Service iconName={'bike'} title={'Велосипеды'} />
          </SplideSlide>
          <SplideSlide>
            <Service
              iconName={'chargingStations'}
              title={'ЗАРЯДНЫЕ СТАНЦИИ (ЭЗС)'}
            />
          </SplideSlide>
          <SplideSlide>
            <Service iconName={'scooter'} title={'Самокат'} />
          </SplideSlide>
          <SplideSlide>
            <Service iconName={'сarSharing'} title={'Каршеринг'} />
          </SplideSlide>
          <SplideSlide>
            <Service iconName={'coworking'} title={'Коворкинг'} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'
import style from './SlideInfoAbout.module.css'

interface SlideInfoAboutProps {
  id: string
  title: string
  text: string
}

function SlideInfoAbout({ id, title, text }: SlideInfoAboutProps) {
  const [isOpen, setIsOpen] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleOpenAccord = (id: string) => {
    if (id === isOpen) {
      setIsOpen(null)
    } else {
      setIsOpen(id)
    }
  }

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen === id) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`
      } else {
        contentRef.current.style.maxHeight = '0px'
      }
    }
  }, [isOpen, id])

  return (
    <>
      <div className={style.boxSlide} onClick={() => handleOpenAccord(id)}>
        <h3 className={style.title_slide}>{title}</h3>
        <ReactSVG
          src={`assets/arowwAboutSlide.svg`}
          className={`${style.arrowUp} ${
            id === isOpen ? `${style.openUp}` : ''
          }`}
        />
      </div>
      <div
        ref={contentRef}
        className={`${style.accordion__content} ${id === isOpen ? `${style.open}` : ''}`}
      >
        <p
          
          className={style.descr}
        >
          {text}
        </p>
      </div>
    </>
  )
}

export default SlideInfoAbout

import React, { useEffect, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { ButtonLink } from '../../../button-link';
import styles from './header.module.css';

type TMenu = {
  href: string;
  label: string;
}[];

const menu: TMenu = [
  { href: '#easy-use', label: 'О сервисе' },
  { href: '#how-to-get', label: 'Как это работает' },
  { href: '#feature', label: 'Партнеры' },
  { href: '#soon', label: 'Программа лояльности' },
  { href: '#form', label: 'Faq' },
];

export const Header = () => {
  const mainNavLinksRef = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainNavLinksRef.current) {
        const fromTop = window.scrollY - 50;
        
        mainNavLinksRef.current.forEach((link) => {
          const href = link.getAttribute('href');
          if (href) {
            const section = document.querySelector(href) as HTMLElement;
            if (section) {
              if (
                section.offsetTop <= fromTop + 55 &&
                section.offsetTop + section.offsetHeight > fromTop + 55
              ) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            }
          }
        });
      }
    };

    mainNavLinksRef.current = document.querySelectorAll('.link');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <a href="http://bolz.tech">
          <ReactSVG src={'assets/logoWithTech.svg'} className={styles.logo} />
        </a>
        <div className={styles.menu}>
          {menu.map(({ label, href }) => (
            <a href={href} key={href} className={'link'}>
              {label}
            </a>
          ))}
        </div>
        <ButtonLink href={'https://service.bolz.tech'} target={'_blank'}>
          Попробовать
        </ButtonLink>
      </div>
    </div>
  );
};

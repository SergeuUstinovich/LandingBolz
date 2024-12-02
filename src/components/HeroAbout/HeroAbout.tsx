import React, { useRef, useEffect } from 'react';
import styles from './HeroAbout.module.css';
import { TextCanvas } from '../../helpers/TextCanvas';
import { useMediaQuery } from 'react-responsive';

const HeroAbout: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const is1920 = useMediaQuery({ query: '(min-width: 1920px)' })
  const is1440 = useMediaQuery({ query: '(min-width: 1440px)' })
  const is1024 = useMediaQuery({ query: '(min-width: 1024px)' })
  const is768 = useMediaQuery({ query: '(min-width: 768px)' })
  const is320 = useMediaQuery({ query: '(min-width: 320px)' })

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;

    if (canvas && box) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Получить размеры box и канваса
      const boxRect = box.getBoundingClientRect();
      canvas.width = boxRect.width;
      canvas.height = boxRect.height;

      // Отрисовать текст белым цветом
      TextCanvas(ctx, 'rgba(255, 255, 255, 0.1)', is1920, is1440, is1024, is768, is320)

      const handleMouseMove = (event: MouseEvent) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        TextCanvas(ctx, 'rgba(255, 255, 255, 0.1)', is1920, is1440, is1024, is768, is320)
        
        // Получить координаты мыши относительно box
        const x = event.clientX - boxRect.left;
        const y = event.clientY - boxRect.top;

        // Настроить область клипа для зеленого текста
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, 70, 0, 2 * Math.PI);
        ctx.clip();

        // Отрисовать текст зеленым цветом в области клипа
        TextCanvas(ctx, '#14d97b', is1920, is1440, is1024, is768, is320)
        // Восстановить состояние контекста
        ctx.restore();
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [is1920, is1440, is1024, is768]);

  return (
    <div ref={boxRef} className={styles.box}>
      <canvas ref={canvasRef} className={styles.canvas}></canvas>
    </div>
  );
};

export default HeroAbout;

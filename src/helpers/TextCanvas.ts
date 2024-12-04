export function TextCanvas(
    ctx: CanvasRenderingContext2D,
    color: string, 
    is1920: boolean,
    is1440: boolean,
    is1024: boolean,
    is768: boolean,
) 
{
    ctx.fillStyle = color;
    ctx.textBaseline = 'top';
    if(is1920) {
        ctx.font = '70px Unbounded';
        ctx.fillText('ГЛОБАЛЬНАЯ ЭКОСИСТЕМА', 0, 0); 
        ctx.fillText('ШЕРИНГА', 0, 80); 
        ctx.fillText('В ЛЮБИМОМ ПРИЛОЖЕНИИ', 640, 236);
        ctx.fillText('ТВОЕГО СМАРТФОНА', 0, 426);
    } else if (is1440) {
        ctx.font = '60px Unbounded';
        ctx.fillText('ГЛОБАЛЬНАЯ ЭКОСИСТЕМА', 0, 0); 
        ctx.fillText('ШЕРИНГА', 0, 80); 
        ctx.fillText('В ЛЮБИМОМ ПРИЛОЖЕНИИ', 340, 236); 
        ctx.fillText('ТВОЕГО СМАРТФОНА', 0, 426);
    } else if (is1024) {
        ctx.font = '40px Unbounded';
        ctx.fillText('ГЛОБАЛЬНАЯ ЭКОСИСТЕМА', 0, 0); 
        ctx.fillText('ШЕРИНГА', 0, 60); 
        ctx.fillText('В ЛЮБИМОМ ПРИЛОЖЕНИИ', 300, 156); 
        ctx.fillText('ТВОЕГО СМАРТФОНА', 0, 266);
    } else if (is768) {
        ctx.font = '40px Unbounded';
        ctx.fillText('ГЛОБАЛЬНАЯ ЭКОСИСТЕМА', 0, 0); 
        ctx.fillText('ШЕРИНГА', 0, 60); 
        ctx.fillText('В ЛЮБИМОМ', 650, 136); 
        ctx.fillText('ПРИЛОЖЕНИИ', 605, 186); 
        ctx.fillText('ТВОЕГО СМАРТФОНА', 0, 266);
    } else {
        ctx.font = '24px Unbounded';
        ctx.fillText('ГЛОБАЛЬНАЯ', 0, 0); 
        ctx.fillText('ЭКОСИСТЕМА', 0, 30);
        ctx.fillText('ШЕРИНГА', 0, 60); 
        ctx.fillText('В ЛЮБИМОМ', 540, 106); 
        ctx.fillText('ПРИЛОЖЕНИИ', 515, 136); 
        ctx.fillText('ТВОЕГО', 0, 216);
        ctx.fillText('СМАРТФОНА', 0, 246);
    } 
}
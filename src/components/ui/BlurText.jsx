import { useRef, useEffect, useState } from 'react';

export default function BlurText({
    text = '',
    delay = 1000,
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,
    easing = 'ease-out',
    onAnimationComplete,
    className = '',
}) {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
        direction === 'top'
            ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
            : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo = [
        {
            filter: 'blur(5px)',
            opacity: 0.5,
            transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
        },
        { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const api = {
        start: () => setInView(true),
    };

    return (
        <div ref={ref} className={`inline-block ${className}`}>
            {elements.map((element, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        transition: 'all .5s cubic-bezier(0.12, 0.4, 0.2, 1.2)',
                        transitionDelay: inView ? `${index * delay}ms` : '0ms',
                        ...(animationFrom || defaultFrom),
                        ...(inView ? (animationTo || defaultTo[1]) : {}),
                        marginRight: animateBy === 'words' ? '0.2em' : '0',
                    }}
                    onTransitionEnd={() => {
                        animatedCount.current += 1;
                        if (animatedCount.current === elements.length && onAnimationComplete) {
                            onAnimationComplete();
                        }
                    }}
                >
                    {element === ' ' ? '\u00A0' : element}
                </span>
            ))}
        </div>
    );
}

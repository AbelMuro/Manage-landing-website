import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import quotes from '../../data/quotes';
import styles from '../../styles/companyQuotes/MobileCompanyQuotes.module.css';

export default function MobileCompanyQuotes () {
    const [quote, setQuote] = useState(quotes[0]);
    const index = useRef(0);
    const carouselInterval = useRef()

    const handleDot = (e) => {
        if(!e.target.matches('.' + styles.dot)) return;

        clearInterval(carouselInterval.current);

        index.current = Number(e.target.getAttribute('data-dot'));
        setQuote(quotes[index.current])
    }

    useEffect(() => {
        const allDots = document.querySelectorAll('.' + styles.dot);

        allDots.forEach((dot) => {
            dot.style.backgroundColor = ''
        })

        allDots.forEach((dot) => {
            const currentDot = Number(dot.getAttribute('data-dot'))
            if(currentDot === index.current)
                dot.style.backgroundColor = '#F3603C'
        })

    }, [quote])

    useEffect(() => {
        carouselInterval.current = setInterval(() => {
            if(index.current >= 3) index.current = -1;

            index.current += 1;            
            setQuote(quotes[index.current])
        }, 2000)

        return () => {
            clearInterval(carouselInterval.current);
        }
        
    }, [])

    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                What they've said
            </h1>
            <div className={styles.quotebox}>
                <Image src={require(`../../public/images/${quote['photo url']}`)} 
                    width='0'height='0'
                    alt={`${quote.author} photo`}
                    className={styles.image}
                    unoptimized/>
                <h1 className={styles.name}>
                    {quote.author}
                </h1>
                <q className={styles.quote}>
                    {quote.quote}
                </q>
            </div>
            <div className={styles.dots} onClick={handleDot}>
                <div className={styles.dot} data-dot={0}></div>
                <div className={styles.dot} data-dot={1}></div>
                <div className={styles.dot} data-dot={2}></div>
                <div className={styles.dot} data-dot={3}></div>
            </div>
            <button className={styles.getStartedButton}>
                Get started
            </button>
        </section>
    )
}

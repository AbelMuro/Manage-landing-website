import {useRef, useEffect} from 'react';
import LeftArrowButton from './LeftArrowButton';
import RightArrowButton from './RightArrowButton';
import quotes from '../../data/quotes';
import Image from 'next/image';
import styles from '../../styles/companyQuotes/CompanyQuotes.module.css';

export default function CompanyQuotes() {
    const carouselRef = useRef();
    const interval = useRef(false);
    const windowRef = useRef();

    const slideToLeft = () => {
        if(interval.current) clearInterval(interval.current);

        interval.current = setInterval(() => {
            if(!carouselRef.current) return;

            let prevPosition = carouselRef.current.style.left;
            prevPosition = Number(prevPosition.replace('px', ''));
            if(prevPosition === 25) return;
            carouselRef.current.style.left = (prevPosition + 25) + 'px';                 
        }, 50)
    }

    const slideToRight = () => {
        if(interval.current) clearInterval(interval.current);

        interval.current = setInterval(() => {
            if(!carouselRef.current || !carouselRef.current || !windowRef.current) return;

            let prevPosition = carouselRef.current.style.left;
            prevPosition = Number(prevPosition.replace('px', ''));
            const windowWidth = windowRef.current.getBoundingClientRect().width; 
            const carouselWidth = carouselRef.current.getBoundingClientRect().width;
            if(Math.abs(prevPosition) + windowWidth >= carouselWidth) return;       
            carouselRef.current.style.left = (prevPosition - 25) + 'px';     
        }, 50)
    }
    
    const stopSliding = () => {
        clearInterval(interval.current);
    }

    useEffect(() => {
        const handleResize = () => {
            carouselRef.current.style.left = '25px';
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])


    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                What they've said
            </h1>
            <section className={styles.window} ref={windowRef}>
                <LeftArrowButton slideToLeft={slideToLeft} stopSliding={stopSliding}/>
                <section className={styles.quotesCarousel} ref={carouselRef} style={{left: '0px'}}>
                    {quotes.map((quote, i) => {
                        return(                
                        <div className={styles.quotebox} key={i}>
                            <Image src={`/images/${quote['photo url']}`} 
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
                        </div>)
                    })}
                </section>
                <RightArrowButton slideToRight={slideToRight} stopSliding={stopSliding}/>
            </section>    
            <button className={styles.getStartedButton}>
                Get Started
            </button>    
        </div>


    )
}
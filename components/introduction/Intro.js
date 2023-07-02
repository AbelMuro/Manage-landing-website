import {memo} from 'react';
import Image from 'next/image'
import styles from '../../styles/introduction/Intro.module.css';

const Intro = () => {
    return( 
        <section className={styles.container}>
            <div className={styles.textbox}>
                <h1 className={styles.title}>
                    Bring everyone
                    together to build
                    better products.
                </h1>
                <p className={styles.desc}>
                    Manage makes it simple for software teams to 
                    plan day-to-day tasks while keeping the larger 
                    team goals in view.
                </p>
                <button className={styles.getStartedButton}>
                    Get Started
                </button>
            </div>

            <Image src={'/images/illustration-intro.svg'}
                width='0' height='0'
                alt='illustation'
                className={styles.image}
                priority
            />

        </section>
    )
}

export default memo(Intro)
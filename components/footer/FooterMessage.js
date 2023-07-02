import Image from 'next/image';
import styles from '../../styles/footer/FooterMessage.module.css';

export default function FooterMessage(){
    return(
        <section className={styles.container}>
            <Image src={'/images/bg-tablet-pattern.svg'}
                width='0' height='0'
                alt='background image'
                className={styles.backgroundImageOne}
                />
            <Image src={'/images/bg-tablet-pattern.svg'}
                width='0' height='0'
                alt='background image'
                className={styles.backgroundImageTwo}
                />
            <div className={styles.content}>
                <h1 className={styles.message}>
                    Simplify how your team works today.
                </h1>
                <button className={styles.getStartedButton}>
                    Get Started
                </button>
            </div>
        </section>
    )
}
import {memo} from 'react';
import Image from 'next/image';
import styles from '../../styles/backgroundImages/backgroundImages.module.css';

const BackgroundImages = () => {
    return(
        <>  
            <Image src={'/images/bg-tablet-pattern.svg'}
                width='0' height='0'
                alt='background image'
                className={styles.imageOne}
                priority
                />
            <Image src={'/images/bg-tablet-pattern.svg'}
                width='0' height='0'
                alt='background image'
                className={styles.imageTwo}
                />
        </>
    )
}

export default memo(BackgroundImages);
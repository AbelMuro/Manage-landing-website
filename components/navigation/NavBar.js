import {memo} from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import MobileNavBar from './MobileNavBar';
import Image from 'next/image';
import styles from '../../styles/navigation/NavBar.module.css';

const NavBar = () => {
    const [mobile] = useMediaQuery('(max-width: 660px)');

    return mobile ? <MobileNavBar/> : 
        <nav className={styles.container}>
                <Image src={'/images/logo.svg'} 
                    width='0' height='0' 
                    alt='manage'
                    className={styles.logo}
                    priority
                    />
                <ul className={styles.links}>
                    <li className={styles.link}>
                        Pricing
                    </li>
                    <li className={styles.link}>
                        Product
                    </li>
                    <li className={styles.link}>
                        About Us
                    </li>
                    <li className={styles.link}>
                        Careers
                    </li>
                    <li className={styles.link}>
                        Community
                    </li>
                </ul>
                <button className={styles.getStartedButton}>
                    Get Started
                </button>
        </nav> 
}

export default memo(NavBar);
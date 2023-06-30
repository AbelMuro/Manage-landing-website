import Image from 'next/image';
import styles from '../../styles/navigation/NavBar.module.css';

export default function NavBar(){
    return (
        <nav className={styles.container}>
            <Image src={'/images/logo.svg'} 
                width='0' height='0' 
                alt='manage'
                className={styles.logo}/>
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
    )
}
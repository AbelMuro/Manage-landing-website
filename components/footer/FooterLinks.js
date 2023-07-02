import FooterInput from './FooterInput';
import Image from 'next/image';
import styles from '../../styles/footer/FooterLinks.module.css';

export default function FooterLinks() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <Image src={'/images/logo footer.svg'} 
                    width='0' height='0'
                    alt='manage'
                    className={styles.logo}
                    />

                <ul className={styles.groupOneLinks}>
                    <li className={styles.link}>
                        Home
                    </li>
                    <li className={styles.link}>
                        Pricing
                    </li>
                    <li className={styles.link}>
                        Products
                    </li>
                    <li className={styles.link}>
                        About Us
                    </li>
                </ul>
                <ul className={styles.groupTwoLinks}>
                    <li className={styles.link}>
                        Careers
                    </li>
                    <li className={styles.link}>
                        Community
                    </li>
                    <li className={styles.link}>
                        Privacy Policy
                    </li>
                </ul>
                <FooterInput/>
                <ul className={styles.socialLinks}>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                    <li className={styles.socialLink}></li>
                </ul>
                <small className={styles.copyright}>
                    Copyright 2020. All Rights Reserved
                </small>
            </div>
        </section>
    )
}
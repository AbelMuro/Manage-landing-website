import {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import styles from '../../styles/navigation/MobileNavBar.module.css';

export default function MobileNavBar(){
    const [menu, setMenu] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleMenu = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        if(menu){
            overlayRef.current.style.display = 'block';
            dialogRef.current.style.display = 'block';
            setTimeout(() => {
                overlayRef.current.style.opacity = '1';
            }, 10)
        }
        else {
            overlayRef.current.style.opacity = '';
            setTimeout(() => {
                overlayRef.current.style.display = '';
                dialogRef.current.style.display = '';
            }, 200)
        }
    }, [menu])

    useEffect(() => {
        const handleScroll = (e) => {
           window.scrollTo(-1,-1);
        }

        if(menu) 
            window.addEventListener('scroll', handleScroll);
        else
            window.removeEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [menu])

    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.matches('.' + styles.overlay))
                setMenu(false);
         }
 
         if(menu) 
             window.addEventListener('click', handleClick);
         else
             window.removeEventListener('click', handleClick);
         
         return () => {
             window.removeEventListener('click', handleClick)
         }
    }, [menu])

    useEffect(() => {
        if(menu)
            window.scrollTo(0, 0);
    }, [menu])

    return(
        <>
            <nav className={styles.container}>
                <Image src={'/images/logo.svg'} 
                    width='0' height='0' 
                    alt='manage' 
                    className={styles.logo}
                    priority
                    />

                {menu ? <Image src={'/icons/icon-close.svg'}
                    width='0' height='0'
                    alt='menu icon'
                    className={styles.closeIcon}
                    onClick={handleMenu}
                    priority
                /> :
                <Image src={'/icons/icon-hamburger.svg'}
                    width='0' height='0'
                    alt='menu icon'
                    className={styles.hamburgerIcon}
                    onClick={handleMenu}
                    priority
                />}
            </nav>      
            <div className={styles.overlay} ref={overlayRef}>
                <dialog className={styles.menu} ref={dialogRef}>
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
                </dialog>
            </div>  
        </>

    )
}
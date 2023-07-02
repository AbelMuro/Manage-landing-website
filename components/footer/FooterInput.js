import {useState, useRef} from 'react';
import styles from '../../styles/footer/FooterInput.module.css';

export default function FooterInput() {
    const [email, setEmail] = useState('');
    const errorMessageRef = useRef();
    const inputRef = useRef();

    const handleEmail = (e) => {
        e.target.setCustomValidity('');
        errorMessageRef.current.style.display = '';
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(!isValid){
            errorMessageRef.current.style.display = 'block';
            inputRef.current.style.border = '1px solid #F33C3C'
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'block';
        inputRef.current.style.border = '1px solid #F33C3C'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <input className={styles.input} 
                type='email'
                value={email}
                onBlur={handleBlur}
                onChange={handleEmail}
                onInvalid={handleInvalid}
                placeholder={'Updates in your inbox...'}
                ref={inputRef}
                required/>
            <input type='submit' value='Go' className={styles.submitButton}/>
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Please insert a valid email
            </div>
        </form> 
    )
}
import Navlinks from '../components/Navlinks';
import Arrow from '../components/Arrow';
import styles from "./pages-css-modules/Login.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function Login() {
    const [isFilledEmail, setIsFilledEmail] = useState(null)
    const [isFilledPass, setIsFilledPass] = useState(null)

    function handleFocusing() {
        setIsFilledEmail(styles.test)
    }
    function handleBluring() {
        setIsFilledEmail(null)
    }

    function handleFocusingp() {
        setIsFilledPass(styles.test)
    }
    function handleBluringp() {
        setIsFilledPass(null)
    }
    return <section className={`mainContainer ${styles.mainImg}`}>
    <Navlinks />
    <div className="overlay"></div>
    {/*  eslint-disable-next-line react/no-unescaped-entities */}
    <section className={styles.container}>
        <div>
            <span>
                <FontAwesomeIcon icon={faChevronLeft} size='xl' style={{color:"white"}}/>
            </span>
            <h3 className={styles.greeting}>Welcome<br></br>Back.</h3>
        </div>
        <form className={styles.form}>
            <label htmlFor='email' className={`${styles.emailLabel} ${isFilledEmail}`}>Email</label>
            <input type='text' onFocus={handleFocusing} onBlur={handleBluring}></input>
            <label htmlFor='pass' className={`${styles.passwordLabel} ${isFilledPass}`}>Password</label>
            <input type='password' onFocus={handleFocusingp} onBlur={handleBluringp}></input>
        </form>
        <div>
            <span>Sgin up</span>
            <span>Forgot Password</span>
        </div>
    </section>
    <Arrow direction="left" path="contact"/>
    </section>
}
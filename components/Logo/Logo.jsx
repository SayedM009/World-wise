import { Link } from "react-router-dom"
import styles from "./Logo.module.css"
export default function Logo() {
    return <Link to="/" className={`${styles.logo}`}>
    <div className={styles.logoContainer}>
        <img className={styles.logoImg} src="https://img.favpng.com/11/4/18/logo-information-technology-vector-graphics-royalty-free-png-favpng-jzTgU9r4k7UB6ceGtFum3sNuB.jpg" alt="Logo"></img>
        <h4 className={styles.logoText}>WorldWise</h4>
    </div>
</Link>
}
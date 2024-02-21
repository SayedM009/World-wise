import { NavLink, Link } from "react-router-dom";
import styles from "./NavLinks.module.css"
export default function Navlinks() {
    // eslint-disable-next-line react/no-unescaped-entities
    return <nav className={styles.navBarContainer}>
        <Link to="/" className={styles.links}>
            <div className={styles.logoContainer}>
                <img className={styles.logoImg} src="https://img.favpng.com/11/4/18/logo-information-technology-vector-graphics-royalty-free-png-favpng-jzTgU9r4k7UB6ceGtFum3sNuB.jpg" alt="Logo"></img>
                <h4 className={styles.logoText}>WorldWise</h4>
            </div>
        </Link>
        <ul className={styles.nav}>
            <li>
                <NavLink to="/pricing" className={styles.links}>pricing</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={styles.links}>contact</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={styles.links}>log in</NavLink>
            </li>
        </ul>
    </nav>
}
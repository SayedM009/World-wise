import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css"
import Logo from "../Logo/Logo";
export default function Navlinks() {
    // eslint-disable-next-line react/no-unescaped-entities
    return <nav className={styles.navBarContainer}>
        <Logo />
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
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css"
export default function Navlinks() {
    // eslint-disable-next-line react/no-unescaped-entities
    return <nav className={styles.navBarContainer}>
        <NavLink to="/" className={styles.links}>
            <div className={styles.logoContainer}>
                <img className={styles.logoImg} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d358ffa-5177-4b84-963f-9a1957b5a8d0/d9qcch8-e5bf34af-3420-441b-af22-f61ad8a1e6e2.png/v1/fill/w_894,h_894/earth___adobe_illustrator__hd__by_shaddow24_d9qcch8-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzZkMzU4ZmZhLTUxNzctNGI4NC05NjNmLTlhMTk1N2I1YThkMFwvZDlxY2NoOC1lNWJmMzRhZi0zNDIwLTQ0MWItYWYyMi1mNjFhZDhhMWU2ZTIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dOwKtsURC0QvtnPuc88xK4mwcFdoltrkXdHA6amziXk" alt="Logo"></img>
                <h4 className={styles.logoText}>WorldWise</h4>
            </div>
        </NavLink>
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
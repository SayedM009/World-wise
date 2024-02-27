import { Outlet } from "react-router-dom"
import Logo from "../Logo/Logo"
import styles from "./SideBar.module.css"
import AppNav from "../AppNav/AppNav"
export default function SideBar() {
    return <div className={styles.sideBar}>
        <Logo />
        <AppNav />
        <Outlet />
        {/* <p>List Of Countries</p> */}
        <footer className={styles.footer}>
            <p>
                &copy; Copright {new Date().getFullYear()} by WorldWise Inc.
            </p>
        </footer>
    </div>
}


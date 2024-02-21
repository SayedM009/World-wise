import Navlinks from "../components/Navlinks"
import styles from "./pages-css-modules/Homepage.module.css"
export default function Homepage() {
    return <section className={styles.mainPage}>
    <Navlinks />
    <div className={styles.overlay}></div>
    {/*  eslint-disable-next-line react/no-unescaped-entities */}
    <h1>I'm Home Page</h1>
    </section>
}
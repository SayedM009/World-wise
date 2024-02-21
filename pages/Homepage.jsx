import Navlinks from "../components/Navlinks"
import styles from "./pages-css-modules/Homepage.module.css"
export default function Homepage() {
    return <section className={styles.mainPage}>
    <Navlinks />
    <div className={styles.overlay}></div>
    {/*  eslint-disable-next-line react/no-unescaped-entities */}
    <section className={styles.text}>
        <div className={styles.visParent}>
            <p className={`${styles.paragraph} ${styles.up}`}>You travel the world.</p>
        </div>
        <div className={styles.visParent}>
            <p className={`${styles.paragraph} ${styles.left}`}>WorldWise keeps track of your adventures.</p>
        </div>
        <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit pariatur minima quibusdam fuga. Nesciunt reprehenderit, vel facere voluptatem laudantium qui reiciendis excepturi expedita ut unde culpa, cupiditate, possimus nobis.</p>
    </section>
    </section>
}
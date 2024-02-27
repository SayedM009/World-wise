import Navlinks from "../components/NavLinks/Navlinks"
import styles from "./pages-css-modules/Homepage.module.css"
import Arrow from "../components/Arrows/Arrow";
import { Link } from "react-router-dom";

export default function Homepage() {
    return <section className={`mainContainer ${styles.mainImg}`}>
    <Navlinks />
    <div className="overlay"></div>
    {/*  eslint-disable-next-line react/no-unescaped-entities */}
    <section className={styles.text}>
        <div className={styles.visParent}>
            <p className={`${styles.paragraph} ${styles.up}`}>You travel the world.</p>
        </div>
        <div className={styles.visParent}>
            <p className={`${styles.paragraph} ${styles.left}`}>WorldWise keeps track of your adventures.</p>
        </div>
        <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit pariatur minima quibusdam fuga. Nesciunt reprehenderit, vel facere voluptatem laudantium qui reiciendis excepturi expedita ut unde culpa, cupiditate, possimus nobis.</p>
        <Link to="/app/cities" className={styles.appBtnLink}>
            <button className={styles.appBtn}>start tracking now</button>
            <div className={styles.layerOne}></div>
            <div className={styles.layerTwo}></div>
        </Link>
    </section>
    <Arrow direction="right" path="pricing"/>
    </section>
}
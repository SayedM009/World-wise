import Navlinks from "../components/Navlinks"
import styles from "./pages-css-modules/Contact.module.css"
import Arrow from "../components/Arrow"
export default function Contact() {
    return <section className={`mainContainer ${styles.mainImg}`}>
    <Navlinks />
    <div className="overlay"></div>
    {/*  eslint-disable-next-line react/no-unescaped-entities */}
    <section className={styles.mainContent}>
        <div className={styles.info}>
            <h2 className={`${styles.heading} ${styles.headingOne}`}>Simple pricing.</h2>
            <h2 className={`${styles.heading} ${styles.headingTwo}`}> Just $90/month.</h2>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis modi molestiae, totam ipsum eligendi iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deleniti accusantium corporis debitis non voluptatum?</p>
        </div>
        <img className={styles.img} src="https://www.usatoday.com/gcdn/presto/2022/02/17/USAT/b436fc54-0d59-445b-8d4e-deedbedc359e-VPC_PETS_IN_SNOW_COMPLIATION.jpg?crop=1911,1075,x8,y0&width=1911&height=1075&format=pjpg&auto=webp" alt="contact"></img>
    </section>
    <Arrow direction="right" path="login"/>
    <Arrow direction="left" path="pricing"/>
    </section>
}
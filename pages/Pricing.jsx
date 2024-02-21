import Navlinks from "../components/Navlinks"
import Arrow from "../components/Arrow"
import styles from "./pages-css-modules/Pricing.module.css"
export default function Pricing() {
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
        <img className={styles.img} src="https://media.cnn.com/api/v1/images/stellar/prod/200310023921-dubai-buildings-skyline.jpg?q=w_3000,h_1688,x_0,y_0,c_fill" alt="pricing"></img>
    </section>
    <Arrow direction="right" path="contact"/>
    <Arrow direction="left" path=""/>
    </section>
}
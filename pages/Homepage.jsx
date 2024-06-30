import Navlinks from "../components/NavLinks/Navlinks";
import styles from "./pages-css-modules/Homepage.module.css";
import Arrow from "../components/Arrows/Arrow";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function Homepage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handlingLoggin() {
    if (isAuthenticated) {
      navigate("/app/cities");
    } else {
      navigate("/login");
    }
  }
  return (
    <section className={`mainContainer ${styles.mainImg}`}>
      <Navlinks />
      <div className="overlay"></div>
      {/*  eslint-disable-next-line react/no-unescaped-entities */}
      <section className={styles.text}>
        <div className={styles.visParent}>
          <p className={`${styles.paragraph} ${styles.up}`}>
            You travel the world.
          </p>
        </div>
        <div className={styles.visParent}>
          <p className={`${styles.paragraph} ${styles.left}`}>
            WorldWise keeps track of your adventures.
          </p>
        </div>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit
          pariatur minima quibusdam fuga. Nesciunt reprehenderit, vel facere
          voluptatem laudantium qui reiciendis excepturi expedita ut unde culpa,
          cupiditate, possimus nobis.
        </p>
        <div className={styles.appBtnLink}>
          <button className={styles.appBtn} onClick={handlingLoggin}>
            start tracking now
          </button>
          <div className={styles.layerOne}></div>
          <div className={styles.layerTwo}></div>
        </div>
      </section>
      <Arrow direction="right" path="pricing" />
    </section>
  );
}

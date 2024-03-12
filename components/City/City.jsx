import { Link, useNavigate, useParams } from "react-router-dom"
import {useCities} from "../../Contexts/CitiesContext"
import styles from "./City.module.css"


export default function City() {
    const {id} = useParams()
    const {currentCity, getCity} = useCities()
    const navigat = useNavigate()
    getCity(id)
    return <section className={styles.city}>
        <span>CITY NAME</span>
        <div>
            <img src={currentCity.emoji}></img>
            <span>{currentCity.cityName}</span>
        </div>
        <span>you went to {currentCity.cityName} on</span>
        <p>{String(new Date(currentCity.date)).split(" ").slice(0, 4).join(" ")}</p>
        {currentCity.notes && <span>your notes</span>}
        {currentCity.notes && <p>{currentCity.notes}</p>}
        <span>learn more</span>
        <br></br>
        <Link>Lorem ipsum dolor sit amet .</Link>
        <button onClick={() => navigat(-1)}><i className="ri-arrow-left-line"></i>back</button>
    </section>
}
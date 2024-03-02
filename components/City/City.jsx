import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import styles from "./City.module.css"

const country = {
    "cityName": "London",
            "country" : "United Kingdom",
            "emoji" : "https://flagcdn.com/w320/gb.png",
            "date" : "2027-10-31T15:59:59.138Z",
            "notes" : "I'm living there now.",
            "position" : {
                "lat" : 0,
                "lng" : 0
            },
            "id" : 23459752
}
export default function City() {
    // const {id} = useParams()
    // const [searchParams, setSearchParams] = useSearchParams()
    // const lat = searchParams.get('lat')
    // const lng = searchParams.get('lng')
    const navigat = useNavigate()
    return <section className={styles.city}>
        <span>CITY NAME</span>
        <div>
            <img src={country.emoji}></img>
            <span>{country.cityName}</span>
        </div>
        <span>you went to {country.cityName} on</span>
        <p>{String(new Date(country.date)).split(" ").slice(0, 4).join(" ")}</p>
        {country.notes && <span>your notes</span>}
        {country.notes && <p>{country.notes}</p>}
        <span>learn more</span>
        <br></br>
        <Link>Lorem ipsum dolor sit amet .</Link>
        <button onClick={() => navigat(-1)}><i className="ri-arrow-left-line"></i>back</button>
    </section>
}
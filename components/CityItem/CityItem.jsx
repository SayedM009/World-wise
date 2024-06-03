/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useCities } from "../../Contexts/CitiesContext";
import styles from "./CityItem.module.css"

export default function CityItem({city}) {
    const {currentCity} = useCities()
    const {cityName, id, position : {lat, lng}, emoji} = city;
    const date = String(new Date(city.date)).split(" ").slice(1, 4).join(",").replace(",", " ")

    return <li>
            <Link className={`${styles.city} ${id === currentCity.id && styles.selected}`} to={`${id}?lat=${lat}&lng=${lng}`}>
                <span style={{display:"flex", alignItems:"center"}}> 
                    {emoji ? <img style={{width:"30px", marginRight:"10px"}} src={emoji} alt={emoji.alt}></img>  : ""}
                    {cityName}
                </span>  
                ({date})
            </Link>
            </li>;
}
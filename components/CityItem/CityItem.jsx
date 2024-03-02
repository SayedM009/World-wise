/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./CityItem.module.css"
export default function CityItem({city, num, current,setCurrent}) {
    const [countryFlag, setCountryFlag] = useState(null)
    const date = String(new Date(city.date)).split(" ").slice(1, 4).join(",").replace(",", " ")
    const {cityName, id, position : {lat, lng}} = city;
    // Getting A Country Flag From Rest Countries API
    useEffect(function() {
        const flags = async function() {
            const reponse = await fetch(`https://restcountries.com/v3.1/name/${city.country}`)
            const data = await reponse.json()
            const [{flags}] = data
            setCountryFlag(flags)
        }
        flags()
    }, [city.country])
    return <li  onClick={() => setCurrent(num)}>
            <Link className={`${styles.city} ${num === current && styles.selected}`} to={`${id}?lat=${lat}&lng=${lng}`}>
                <span style={{display:"flex", alignItems:"center"}}> 
                    {countryFlag ? <img style={{width:"30px", marginRight:"10px"}} src={countryFlag.png} alt={countryFlag.alt}></img>  : ""}
                    {cityName}
                </span>  
                ({date})
            </Link>
        </li>;
}
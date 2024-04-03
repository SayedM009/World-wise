/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCities } from "../../Contexts/CitiesContext";
import styles from "./CityItem.module.css"

export default function CityItem({city, num, setCurrent}) {
    const [countryFlag, setCountryFlag] = useState(null)
    const date = String(new Date(city.date)).split(" ").slice(1, 4).join(",").replace(",", " ")
    const {cityName, id, country,position : {lat, lng}, } = city;
    const {currentCity} = useCities()
    // const {png, alt} = countryFlag

    // Getting A Country Flag From Rest Countries API
    useEffect(function() {
        const flags = async function() {
            const reponse = await fetch(`https://restcountries.com/v3.1/name/${country}`)
            const data = await reponse.json()
            const [{flags}] = data
            setCountryFlag(flags)
        }
        flags()
    }, [country])



    return <li  onClick={() => setCurrent(num)}>
                <Link className={`${styles.city} ${id === currentCity.id && styles.selected}`} to={`${id}?lat=${lat}&lng=${lng}`}>
                    <span style={{display:"flex", alignItems:"center"}}> 
                        {countryFlag ? <img style={{width:"30px", marginRight:"10px"}} src={countryFlag.png} alt={countryFlag.alt}></img>  : ""}
                        {cityName}
                    </span>  
                    ({date})
                </Link>
            </li>;
}
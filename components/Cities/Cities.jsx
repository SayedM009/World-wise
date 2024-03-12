/* eslint-disable no-unused-vars */

import { useState } from "react";
import CityItem from "../CityItem/CityItem";
import styles from "./Cities.module.css"
import { useCities } from "../../Contexts/CitiesContext";
/* eslint-disable react/prop-types */
export default function Cities() {
    const {cities, isLoading} = useCities()
    const [current, setCurrent] = useState()
    if (isLoading) return  <p>{isLoading}</p>;
    if (!cities.length) return <p>It will be awesome to try adding a country 👋</p>
    return <ul className={styles.list}>
        {cities.map((city, i) => <CityItem key={i} city={city} num={i} current= {current} setCurrent={setCurrent}/>)}
    </ul>
}
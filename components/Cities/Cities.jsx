/* eslint-disable no-unused-vars */

import CityItem from "../CityItem/CityItem";
import styles from "./Cities.module.css"
/* eslint-disable react/prop-types */
export default function Cities({ cities, isLoading }) {
    if (isLoading) return  <p>Loading...</p>;
    if (!cities.length) return <p>P</p>
    return <ul className={styles.list}>
        {cities.map((city, i) => <CityItem key={i} city={city} />)}
    </ul>
}
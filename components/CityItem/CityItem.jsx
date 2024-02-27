/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css"
export default function CityItem({city}) {
    return <li className={styles.city}><span>{city.flag} : {city.name}</span>  {city.time}</li>;
}
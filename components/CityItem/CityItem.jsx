/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css"
export default function CityItem({city, num, current,setCurrent}) {
    const date = city.date.slice(0, city.date.indexOf("T"));
    return <li className={`${styles.city} ${num === current && styles.selected}`} onClick={() => setCurrent(num)}>
        <span>{city.flag} : {city.cityName}</span>  {date}
        </li>;
}
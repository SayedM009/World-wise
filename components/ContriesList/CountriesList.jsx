/* eslint-disable react/prop-types */
import styles from './CountriesList.module.css'
function CountriesList({cities}) {
    const flags = [...new Set(cities.map(city => city.emoji))]
    const names = [...new Set(cities.map(city => city.country))]
    return <div className={styles.containerCountries}>
        {flags.map((flag, i) => <div className={styles.containerImg} key={i}> 
        <img className={styles.img} src={flag} ></img>
        <span>{names[i]}</span>
        </div>)}
    </div>
}

export default CountriesList

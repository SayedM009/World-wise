/* eslint-disable react/prop-types */
import styles from './CountriesList.module.css'
function CountriesList({cities}) {
    const flags = [...new Set(cities.map(city => city.emoji))]
    console.log(flags)
    return <div style={{display:"flex"}}>
        {flags.map((flag, i) => <span className={styles.containerImg} key={i}> <img className={styles.img} src={flag} ></img></span>)}
    </div>
}

export default CountriesList

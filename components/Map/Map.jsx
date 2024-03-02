import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
function Map() {
    const [searchParams, setSearchParams] = useSearchParams()
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    const navigate = useNavigate()
    return <div className={`${styles.map}`} onClick={() => navigate("form")}>
            map
            {lat}
            {lng}
        </div>
}

export default Map

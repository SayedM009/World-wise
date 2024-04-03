/* eslint-disable no-unused-vars */
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from './Map.module.css'
import { useState } from 'react'
import { useCities } from '../../Contexts/CitiesContext'
function Map() {
    const [searchParams] = useSearchParams()
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    const {cities} = useCities()
    const navigate = useNavigate()
    return <div className={`${styles.mapContainer}`} onClick={() => navigate("form")}>
            <MapContainer center={[lat || 0, lng ||0 ]} zoom={13} scrollWheelZoom={true} className={`${styles.map}`}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/>
                {cities.map(city => <>
                <Marker position={[city.position.lat, city.position.lng]} key={city.position.lat}>
                    <Popup>
                        <img src={city.emoji} style={{width:"30px", marginRight:"10px"}}></img>
                        {city.cityName}
                    </Popup>
                </Marker>
                </>)}
            </MapContainer>
        </div>
}

export default Map

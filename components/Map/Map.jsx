/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet'
import { useCities } from '../../Contexts/CitiesContext'
import styles from './Map.module.css'

function Map() {
    const {cities} = useCities()
    const [searchParams] = useSearchParams()
    const [mapPosition, setMapPosition] = useState([40, 44])
    const [currentLocation, setCurrentLocation] = useState(false)
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")

    useEffect(function() {
        if (lat && lng) setMapPosition([lat, lng])
    }, [lat, lng])

    


    return <div className={`${styles.mapContainer}`}>
            <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={`${styles.map}`}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"/>
                {cities.map((city, i) => <>
                <Marker position={[city.position.lat, city.position.lng]} key={i + 1 *70}>
                    <Popup>
                        <img src={city.emoji} style={{width:"30px", marginRight:"10px"}}></img>
                        {city.cityName}
                    </Popup>
                </Marker>
                </>)}
                <ChangeCenter position={mapPosition}/>
                <DetectClick />
            </MapContainer>
            <CurrentLocation currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} setMapPosition={setMapPosition}/>
        </div>
}

// Redirect the map to the current destination
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

// Detect the click on the map and redirect to the clicked city
function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

function CurrentLocation({currentLocation, setCurrentLocation,setMapPosition}) {

    const navigate = useNavigate()
    const [userLocation, setUserLocation] = useState([])
    // Get the current position
    useEffect(function() {
        if (!currentLocation) return
        const getCurrentLocation = async function() {
            try {
                const location = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject)
                })
                const {latitude, longitude} = location.coords;
                setMapPosition((coords) => coords = [latitude,longitude])
                setUserLocation((c) => c = [latitude,longitude])
            } catch (error) {
                console.error(error.message)
            } finally {
                setCurrentLocation(c => c = false)
            }
        }
        getCurrentLocation()
    }, [currentLocation,setMapPosition, setCurrentLocation])    

    useEffect(function () {
        if (!(userLocation.length > 0)) return
        console.log("ok")
        if (currentLocation) {
            navigate(`form?lat=${userLocation[0]}&lng=${userLocation[1]}`)
        } 

    }, [userLocation, navigate, currentLocation])
    
    // Hundle Getting Current Position & Open Form
    function handleLocationAndForm() {
        setCurrentLocation(true)
    }

    // return <div className={styles.currentLocation} onClick={() => handleLocationAndForm()}>
    return <div className={styles.currentLocation} onClick={() => handleLocationAndForm()}>
        <span></span>
        <span></span>
    </div>
  );
}

export default Map;

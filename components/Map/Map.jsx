/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCities } from "../../Contexts/CitiesContext";
import styles from "./Map.module.css";
import useUrlPosition from "../../hooks/useUrlPosition";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 44]);
  const [currentLocation, setCurrentLocation] = useState(false);
  // Custom hook to get position from url
  const [lat, lng] = useUrlPosition();

  // This use effect makes the lat and lng in sync with url
  useEffect(
    function () {
      if (lat && lng) setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  return (
    <div className={`${styles.mapContainer}`}>
      <MapContainer
        center={mapPosition}
        zoom={20}
        scrollWheelZoom={true}
        className={`${styles.map}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city, i) => (
          <>
            <Marker
              position={[city.position.lat, city.position.lng]}
              key={i + 1 * 70}
            >
              <Popup>
                <img
                  src={city.emoji}
                  style={{ width: "30px", marginRight: "10px" }}
                ></img>
                {city.cityName}
              </Popup>
            </Marker>
          </>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
      <CurrentLocation
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        mapPosition={setMapPosition}
      />
    </div>
  );
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

// Get Current user position
function CurrentLocation({ currentLocation, setCurrentLocation, mapPosition }) {
  // // Get the current position
  useEffect(
    function () {
      if (!currentLocation) return;
      const getCurrentLocation = async function () {
        try {
          const location = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          const { latitude: lat, longitude: lng } = location.coords;
          mapPosition([`${lat}`, `${lng}`]);
        } catch (error) {
          console.error(error.message);
        }
      };
      getCurrentLocation();
    },
    [currentLocation, setCurrentLocation, mapPosition]
  );

  return (
    <div
      className={styles.currentLocation}
      onClick={() => setCurrentLocation(true)}
    >
      <span></span>
      <span></span>
    </div>
  );
}

export default Map;

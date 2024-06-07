import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useCities } from "../../Contexts/CitiesContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import styles from "./Form.module.css";
import useUrlPosition from "../../hooks/useUrlPosition";

const initialState = {
  cityName: "",
  countryName: "",
  countryUnicode: "",
  countryFlag: "",
  date: new Date(),
  note: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeCityName":
      return { ...state, cityName: action.payload };
    case "changeCountryName":
      return { ...state, countryName: action.payload };
    case "changeCountryUnicode":
      return { ...state, countryUnicode: action.payload };
    case "countryFlag":
      return { ...state, countryFlag: action.payload };
    case "changeDate":
      return { ...state, date: action.payload };
    case "writeNote":
      return { ...state, note: action.payload };
  }
}

export default function Form() {
  const { createCity } = useCities();
  const [
    { cityName, countryName, countryUnicode, countryFlag, date, note },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();

  // Fetching Current CityName and Country from URL position
  useEffect(
    function () {
      if (!lat && !lng) return;
      const fetchinCityName = async function () {
        try {
          const res1 = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          const data = await res1.json();

          dispatch({ type: "changeCityName", payload: data.city });
          dispatch({ type: "changeCountryName", payload: data.countryName });
          dispatch({ type: "changeCountryUnicode", payload: data.countryCode });

          // Fetching Country Flag
          const res2 = await fetch(
            `https://countriesnow.space/api/v0.1/countries/flag/images`
          );
          const data2 = await res2.json();
          data2.data.filter((country) =>
            country.iso2 === countryUnicode
              ? dispatch({ type: "countryFlag", payload: country.flag })
              : ""
          );
        } catch {
          console.error("Error");
        }
      };

      fetchinCityName();
    },
    [lat, lng, countryName, countryUnicode]
  );

  // Handle Back Button
  function handleBack(e) {
    e.preventDefault();
    navigate("/app/cities");
  }

  function handleAddingCity(e) {
    e.preventDefault();
    const newCity = {
      cityName: cityName,
      country: countryName,
      emoji: countryFlag,
      date: date,
      notes: note,
      position: {
        lat: lat,
        lng: lng,
      },
    };
    createCity(newCity);
    navigate("/app/cities");
  }

  if (!lat && !lng)
    return <p>You have to click some where on the map to get the form</p>;

  return (
    <form className={styles.form}>
      {/* City name & Flag */}
      <label htmlFor="cityname">city name</label>
      <div className={styles.cityWrapper}>
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "changeCityName", payload: e.target.value })
          }
          id="cityname"
          value={cityName}
        ></input>
        <img
          src={countryFlag}
          alt={countryName}
          style={{ width: "40px", position: "absolute", right: "10px" }}
        ></img>
      </div>

      {/* Date */}
      <div className={styles.dateWrapper}>
        <label htmlFor="time">when did you go to ?</label>
        <br></br>
        <DatePicker
          selected={date}
          onChange={(date) => dispatch({ type: "changeDate", payload: date })}
          dateFormat="dd/MM/yy"
          className={styles.datePicker}
        />
      </div>

      {/* Text Area */}
      <label htmlFor="text">Notes about your trip to</label>
      <textarea
        id="text"
        value={note}
        onChange={(e) =>
          dispatch({ type: "writeNote", payload: e.target.value })
        }
      ></textarea>
      <div className={styles.btns}>
        <button onClick={(e) => handleAddingCity(e)} className={styles.add}>
          add
        </button>
        <button className={styles.back} onClick={handleBack}>
          Back
        </button>
      </div>
    </form>
  );
}

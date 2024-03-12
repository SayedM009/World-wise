/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({children}) {

    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState("")
    const [currentCity, setCurrentCity] = useState({})
    useEffect(function() {
        async function fetching() {
        try {
            setIsLoading("is Loading....")
            const cities = await fetch("http://localhost:9000/cities")
            const  data= await cities.json();
            setCities(data);
            setIsLoading("")
        } catch  (error) {
            console.log(error)
            setIsLoading("Something Went Wrong Try Again! ⛔")
        }
        }
        fetching()
    }, [])

    async function getCity(id) {
        try {
            setIsLoading("is Loading....")
            const cities = await fetch(`http://localhost:9000/cities/${id}`)
            const  data= await cities.json();
            setCurrentCity(data)
            setIsLoading("")
        } catch  (error) {
            console.log(error)
            setIsLoading("Something Went Wrong Try Again! ⛔")
        }
    }
    

    return <CitiesContext.Provider value={{cities, isLoading, currentCity, getCity}}>
        {children}
    </CitiesContext.Provider>
}

function useCities() {
    const context = useContext(CitiesContext)
    if (context === 'undefind') throw new Error("Can not  be used outside of the Cities Provider")
    return context;
}

export {CitiesProvider, useCities}
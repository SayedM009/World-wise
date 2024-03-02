import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import AppLayout from "../pages/AppLayout";
import Cities from "../components/Cities/Cities";
import CountriesList from "../components/ContriesList/CountriesList";
import City from "../components/City/City"
import Form from "../components/Form/Form";
export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState("")
  useEffect(function() {
    async function fetching() {
      try {
        setIsLoading("is Loading....")
        const cities = await fetch("http://localhost:9000/Countries")
        const  data= await cities.json();
        console.log(data)
        setCities(data);
        setIsLoading("")
      } catch  (error) {
        console.log(error)
        setIsLoading("Something Went Wrong Try Again! ⛔")
      }
    }
    fetching()
  }, [])
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="pricing" element={<Pricing />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Cities />} />
        <Route path="cities" element={<Cities cities={cities} isLoading={isLoading}/>}/>
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountriesList cities={cities}/>}/>
        <Route path="form" element={<Form />}/>
      </Route>
      {/* <Route path="*" element={}/> */}
    </Routes>
  </BrowserRouter>
}
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import AppLayout from "../pages/AppLayout";
import { useEffect, useState } from "react";
import Cities from "../components/Cities/Cities";
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
  }, [setIsLoading])
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="pricing" element={<Pricing />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<Cities />} />
        <Route path="cities" element={<Cities cities={cities} isLoading={isLoading}/>}/>
        <Route path="countries" element={<p>Countries</p>}/>
        <Route path="form" element={<p>Form</p>}/>
      </Route>
      {/* <Route path="*" element={}/> */}
    </Routes>
  </BrowserRouter>
}
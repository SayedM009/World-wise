import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import AppLayout from "../pages/AppLayout";
export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="pricing" element={<Pricing />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<p>Cities</p>} />
        <Route path="cities" element={<p>Cities</p>}/>
        <Route path="countries" element={<p>Countries</p>}/>
        <Route path="form" element={<p>Form</p>}/>
      </Route>
      {/* <Route path="*" element={}/> */}
    </Routes>
  </BrowserRouter>
}
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact"
import Login from "../pages/Login"
export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="pricing" element={<Pricing />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
}
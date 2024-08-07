import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CitiesProvider } from "../Contexts/CitiesContext";
import { Authprovider } from "../Contexts/AuthContext";
import Homepage from "../pages/Homepage";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import AppLayout from "../pages/AppLayout";
import Cities from "../components/Cities/Cities";
import CountriesList from "../components/ContriesList/CountriesList";
import City from "../components/City/City";
import Form from "../components/Form/Form";
import PageNotFound from "../pages/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
export default function App() {
  return (
    <CitiesProvider>
      <Authprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Cities />} />
              <Route path="cities" element={<Cities />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountriesList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Authprovider>
    </CitiesProvider>
  );
}

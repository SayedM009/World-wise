/* eslint-disable react/prop-types */
import {
  createContext,
  useReducer,
  useEffect,
  useContext,
  // useReducer,
} from "react";

const initialSate = {
  cities: [],
  isLoading: "",
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "addingCities":
      return { ...state, cities: action.payload, isLoading: "" };
    case "addingCity":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: "",
      };
    case "deletingCity":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: "",
      };
    case "changeCurrentCity":
      return { ...state, currentCity: action.payload, isLoading: "" };
    case "changeIsLoading":
      return { ...state, isLoading: "is Loading...." };
    case "rejected":
      return { ...state, isLoading: "Something Went Wrong Try Again! ⛔" };
  }
}

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialSate
  );

  useEffect(function () {
    async function fetching() {
      dispatch({ type: "changeIsLoading" });
      try {
        const cities = await fetch("http://localhost:9000/cities");
        const data = await cities.json();
        dispatch({ type: "addingCities", payload: data });
      } catch (error) {
        dispatch({ type: "rejected" });
      }
    }
    fetching();
  }, []);

  async function getCity(id) {
    dispatch({ type: "changeIsLoading" });
    try {
      const cities = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await cities.json();
      dispatch({ type: "changeCurrentCity", payload: data });
    } catch (error) {
      dispatch({ type: "rejected" });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "changeIsLoading" });
    try {
      const cities = await fetch(`http://localhost:9000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await cities.json();
      dispatch({ type: "addingCity", payload: data });
    } catch (error) {
      dispatch({ type: "rejected" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "changeIsLoading" });
    try {
      await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "deletingCity", payload: id });
      // setCities((cities) => );
    } catch (error) {
      dispatch({ type: "rejected" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === "undefind")
    throw new Error("Can not  be used outside of the Cities Provider");
  return context;
}

export { CitiesProvider, useCities };

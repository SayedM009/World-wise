/* eslint-disable react/prop-types */
import { useReducer, useContext, createContext } from "react";

const FAKE_USER = {
  userName: "Sayed",
  email: "sayed@s.com",
  password: "0000",
  image:
    "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
};

const Authcontext = createContext();

const intialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
  }
}

function Authprovider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    intialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <Authcontext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}

function useAuth() {
  const context = useContext(Authcontext);
  if (context === undefined)
    throw new Error("You have used Context in not correct place");
  return context;
}

export { Authprovider, useAuth };

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

import Navlinks from "../components/NavLinks/Navlinks";
import Arrow from "../components/Arrows/Arrow";
import styles from "./pages-css-modules/Login.module.css";

const initSate = {
  email: null,
  password: null,
  emailBorder: styles.null,
  emailStatus: null,
  passwordBorder: null,
  passwordStatus: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "emailValue":
      return { ...state, email: action.payload };
    case "passwordValue":
      return { ...state, password: action.payload };
    case "emailFocus":
      return {
        ...state,
        emailStatus: styles.up,
        emailBorder: styles.focusedOrFilled,
      };
    case "emailBlur":
      return {
        ...state,
        emailStatus: action.peyload.length > 0 ? styles.up : null,
        emailBorder: action.peyload.length > 0 ? styles.focusedOrFilled : null,
      };
    case "passwordFocus":
      return {
        ...state,
        passwordStatus: styles.up,
        passwordBorder: styles.focusedOrFilled,
      };
    case "passwordBlur":
      return {
        ...state,
        passwordStatus: action.peyload.length > 0 ? styles.up : null,
        passwordBorder:
          action.peyload.length > 0 ? styles.focusedOrFilled : null,
      };
  }
}
export default function Login() {
  const [
    {
      email,
      password,
      emailStatus,
      emailBorder,
      passwordBorder,
      passwordStatus,
    },
    dispatch,
  ] = useReducer(reducer, initSate);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(function () {
    if (!isAuthenticated) return;
    console.log("ok");
    navigate("/app/cities");
  });

  function handleClickToLogin(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <section className={`mainContainer ${styles.mainImg}`}>
      <Navlinks />
      <div className="overlay"></div>
      {/*  eslint-disable-next-line react/no-unescaped-entities */}
      <section className={styles.container}>
        <div>
          <Link to={"/"}>
            <span className={styles.arrowBack}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="xl"
                style={{ color: "white" }}
              />
            </span>
          </Link>
          <h3 className={styles.greeting}>
            <span>
              Welcome<br></br>Back.
            </span>
          </h3>
        </div>
        <form className={styles.form}>
          <label
            htmlFor="email"
            className={`${styles.emailLabel} ${emailStatus}`}
          >
            Email
          </label>
          <input
            type="text"
            className={emailBorder}
            onFocus={() => dispatch({ type: "emailFocus" })}
            onBlur={(e) =>
              dispatch({ type: "emailBlur", peyload: e.target.value })
            }
            onChange={(e) =>
              dispatch({ type: "emailValue", payload: e.target.value })
            }
          ></input>
          <label
            htmlFor="pass"
            className={`${styles.passwordLabel} ${passwordStatus}`}
          >
            Password
          </label>
          <input
            type="password"
            className={passwordBorder}
            onFocus={() => dispatch({ type: "passwordFocus" })}
            onBlur={(e) =>
              dispatch({ type: "passwordBlur", peyload: e.target.value })
            }
            onChange={(e) =>
              dispatch({ type: "passwordValue", payload: e.target.value })
            }
          ></input>
          <div className={styles.loginSection}>
            <span>Login</span>
            <button onClick={handleClickToLogin}>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </form>
        <div className={styles.actions}>
          <span>Sgin up</span>
          <span>Forgot Password</span>
        </div>
      </section>
      <Arrow direction="left" path="contact" />
    </section>
  );
}

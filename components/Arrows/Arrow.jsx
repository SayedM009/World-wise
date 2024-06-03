/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./ArrowStyle.module.css"

export default function Arrow({ direction = "right", path="" }) {
    const next = useRef(null)
    useEffect(function() {
        const callBack = (e) => {
            if (direction === "right") {
                e.code === "ArrowRight" && next.current?.click()
            } else if (direction  === "left") {
                e.code === "ArrowLeft" && next.current?.click()
            }
        }
        document.addEventListener("keydown", callBack)
        return () => document.addEventListener("keydown", callBack)
    }, [direction])
    return  <NavLink to={`/${path}`}  ref={next}>
                <button className={direction === "right" ? styles.arrowRight : styles.arrowLeft} >
                    <FontAwesomeIcon icon={direction === "right" ? faChevronRight : faChevronLeft} className={styles.rightArrow}/>
                </button>
            </NavLink>
}
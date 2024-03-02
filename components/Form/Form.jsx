import { useNavigate } from "react-router-dom"
import styles from "./Form.module.css"
export default function Form() {
    const navigate = useNavigate()
    function handleBack(e) {
        e.preventDefault()
        navigate("/app/cities")
    }
    return <form className={styles.form}>
        <p>city name</p>
        <input type="text"></input>
        <p>when did you go to ?</p>
        <input type="text"></input>
        <p>Notes about your trip to</p>
        <textarea>

        </textarea>
        <div>
            <button className={styles.add}>add</button>
            <button className={styles.back} onClick={handleBack}>Back</button>
        </div>
    </form>
}
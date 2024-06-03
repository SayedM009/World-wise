import { Link } from "react-router-dom"
import styles from "./pages-css-modules/PageNotFound.module.css"
function PageNotFound() {
    return <div className={styles.pageNotFound}>
            <div>
                <h1>Page not found</h1>
                <button className={styles.btn}>
                    <Link to="/">Home Page</Link>
                </button>
            </div>
        </div>
}

export default PageNotFound

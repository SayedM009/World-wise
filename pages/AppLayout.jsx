import SideBar from "../components/SideBar/SideBar"
import Map from "../components/Map/Map"
import styles from './pages-css-modules/AppLayout.module.css'
export default function AppLayout() {
    return <section className={`mainContainer ${styles.app}`}>
        <SideBar />
        <Map />
    </section>
}
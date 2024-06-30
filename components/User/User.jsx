import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <div className={styles.user}>
      <img src={user.image} alt={user.userName}></img>
      <p>Welcome, {user.userName}</p>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default User;

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlices";

import styles from "./User.module.css";

function User() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  function handleClick() {
    dispatch(logout());
    navigate("/");
  }

  // Tambahkan pengecekan kondisi sebelum mengakses properti user
  if (!user) {
    // Misalnya, Anda bisa menampilkan pesan atau tindakan lain jika user tidak tersedia
    return <div>User not available</div>;
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

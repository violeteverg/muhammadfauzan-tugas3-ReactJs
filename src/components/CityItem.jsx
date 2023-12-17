import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { flagEmojiToPNG, deleteCity } from "../redux/slices/CitiesSlices";

import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("id", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const dispatch = useDispatch();
  const currentCity = useSelector((state) => state.cities.currentCity);
  const { cityName, emoji, date, id, position } = city;

  function deleteBtn(e) {
    e.preventDefault();
    dispatch(deleteCity(id));
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          <img src={flagEmojiToPNG(emoji)} alt="flag" />
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={deleteBtn}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../redux/slices/CitiesSlices";

import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList() {
  const dispatch = useDispatch();
  const { cities, isLoading } = useSelector((state) => state.cities);
  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

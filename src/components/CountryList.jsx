import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, flagEmojiToPNG } from "../redux/slices/CitiesSlices";

import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList() {
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

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((e) => e.country === city.country)) {
      arr.push({
        country: city.country,
        emoji: <img src={flagEmojiToPNG(city.emoji)} alt="flag" />,
      });
    }
    return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;

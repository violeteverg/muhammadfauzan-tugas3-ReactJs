import { useCities } from "../contexts/CitiesContext";

import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList() {
  const { cities, isLoading, flagemojiToPNG } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.some((e) => e.country === city.country)) {
      arr.push({ country: city.country, emoji: flagemojiToPNG(city.emoji) });
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

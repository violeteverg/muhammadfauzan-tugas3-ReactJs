import { configureStore } from "@reduxjs/toolkit";
import authSlices from "./slices/AuthSlices";
import citiesSlices from "./slices/CitiesSlices";
const store = configureStore({
  reducer: {
    auth: authSlices,
    cities: citiesSlices,
  },
});

export default store;

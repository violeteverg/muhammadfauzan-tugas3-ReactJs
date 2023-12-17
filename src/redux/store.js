import { configureStore } from "@reduxjs/toolkit";

import AuthSlices from "./slices/AuthSlices";
import CitiesSlices from "./slices/CitiesSlices";
const store = configureStore({
  reducer: {
    auth: AuthSlices,
    cities: CitiesSlices,
  },
});

export default store;

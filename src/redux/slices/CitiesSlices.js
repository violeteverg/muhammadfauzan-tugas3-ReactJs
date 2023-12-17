import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:9000";
const intialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

export const fetchCities = createAsyncThunk("cities/fetch", async () => {
  const res = await fetch(`${BASE_URL}/cities`);
  const data = await res.json();
  return data;
});

export const getCity = createAsyncThunk("cities/fetchById", async (id) => {
  const res = await fetch(`${BASE_URL}/cities/${id}`);
  const data = await res.json();
  return data;
});

export const createCity = createAsyncThunk("city/created", async (newCity) => {
  const res = await fetch(`${BASE_URL}/cities`, {
    method: "POST",
    body: JSON.stringify(newCity),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
});

export const deleteCity = createAsyncThunk("city/deleted", async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return id;
});

export function flagEmojiToPNG(flag) {
  let countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return `https://flagcdn.com/24x18/${countryCode}.png`;
}
// export function flagEmojiToPNG(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

const CitiesSlices = createSlice({
  name: "cities",
  initialState: { ...intialState },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCities.rejected, (state) => {
        state.isLoading = false;
        state.error = "An error loading fetchcities";
      })
      .addCase(getCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        (state.isLoading = false), (state.currentCity = action.payload);
      })
      .addCase(getCity.rejected, (state) => {
        (state.isLoading = false), (state.error = "An error on getcity");
      })
      .addCase(createCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = [...state.cities, action.payload];
        state.currentCity = action.payload;
      })
      .addCase(createCity.rejected, (state) => {
        (state.isLoading = false), (state.error = "An error on createCity");
      })
      .addCase(deleteCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCity.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.cities = state.cities.filter(
            (city) => city.id !== action.payload
          )),
          (state.currentCity = {});
      })
      .addCase(deleteCity.rejected, (state) => {
        (state.isLoading = false), (state.error = "error on deletecity");
      });
  },
});

export default CitiesSlices.reducer;

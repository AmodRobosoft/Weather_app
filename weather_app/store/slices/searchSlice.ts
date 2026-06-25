
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

export type City = {
  city: string;
  contry: string;
  gradientColors: string[];
  tempature: number;
  weather: string;
  isFav: boolean;
};

type FavoritesState = {
  recentSearch: string[];
  favCities: City[];
  trendingCities: City[];
};

const initialState: FavoritesState = {
  recentSearch: ["New York", "Paris", "Tokyo"],

  favCities: [
    {
      city: "Tokyo",
      contry: "Japan",
      gradientColors: ["#F4A8FF99", "#FFD6A899"],
      tempature: 31,
      weather: "Clear",
      isFav: true,
    },
    {
      city: "Reykjavík",
      contry: "Iceland",
      gradientColors: ["#FEE685CC", "#FFA1AD80"],
      tempature: 22,
      weather: "Sunny",
      isFav: true,
    },
  ],

  trendingCities: [
    {
      city: "New York",
      contry: "USA",
      gradientColors: ["#BEDBFF99", "#74D4FF80"],
      tempature: 27,
      weather: "Cloudy",
      isFav: false,
    },
    {
      city: "London",
      contry: "United Kingdom",
      gradientColors: ["#E5E7EBB2", "#CAD5E280"],
      tempature: 19,
      weather: "Rainy",
      isFav: false,
    },
    {
      city: "Paris",
      contry: "France",
      gradientColors: ["#FFCCD399", "#FFD6A880"],
      tempature: 24,
      weather: "Partly Cloudy",
      isFav: false,
    },
    {
      city: "Sydney",
      contry: "Australia",
      gradientColors: ["#B8E6FEB2", "#5EE9B580"],
      tempature: 29,
      weather: "Clear",
      isFav: false,
    },
  ],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const favIndex = state.favCities.findIndex(
        (c) => c.city === action.payload,
      );

      if (favIndex !== -1) {
        const [city] = state.favCities.splice(favIndex, 1);
        state.trendingCities.push({ ...city, isFav: false });
      } else {
        const trendingIndex = state.trendingCities.findIndex(
          (c) => c.city === action.payload,
        );
        if (trendingIndex !== -1) {
          const [city] = state.trendingCities.splice(trendingIndex, 1);
          state.favCities.push({ ...city, isFav: true });
        }
      }
    },

    addRecentSearch: (state, action: PayloadAction<string>) => {
      if (!state.recentSearch.includes(action.payload)) {
        state.recentSearch.unshift(action.payload);
        if (state.recentSearch.length > 5) {
          state.recentSearch.pop();
        }
      }
    },

    clearRecentSearch: (state) => {
      state.recentSearch = [];
    },
  },
});


export const {
  toggleFavorite,
  addFavorite,
  removeFavorite,
  addRecentSearch,
  clearRecentSearch,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
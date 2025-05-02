// src/redux/weather/weatherSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  searchHistory: string[];
}

const initialState: WeatherState = {
  city: '',
  searchHistory: typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('weather_history') || '[]')
    : [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      if (!state.searchHistory.includes(action.payload)) {
        state.searchHistory.unshift(action.payload);
        state.searchHistory = state.searchHistory.slice(0, 5);
        localStorage.setItem('weather_history', JSON.stringify(state.searchHistory));
      }
    },
    clearHistory: (state) => {
      state.searchHistory = [];
      localStorage.removeItem('weather_history');
    },
  },
});

export const { setCity, clearHistory } = weatherSlice.actions;
export default weatherSlice.reducer;

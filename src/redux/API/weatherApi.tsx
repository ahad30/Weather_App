import baseApi from "./baseApi";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const weatherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city: string) => ({
        method: "GET",
        url: `/weather?q=${city}&units=metric&appid=${API_KEY}`,
      }),
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
export default weatherApi;

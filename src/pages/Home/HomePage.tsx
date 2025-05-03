import { useAppSelector } from "@/redux/store/hooks";
import { useGetWeatherByCityQuery } from "@/redux/API/weatherApi";
import clear_icon from "@/assets/icons/clear.png";
import weatherIcons from "@/lib/weatherIcons";
import SearchBox from "@/components/SearchBox";
import ToggleButton from "@/components/ToggleButton";

const HomePage = () => {
  const city = useAppSelector((state) => state.weather.city);
  const { data, isLoading, isError } = useGetWeatherByCityQuery(city, {
    skip: city === "",
  });
  const getWeatherIcon = (iconCode: string) => {
    return weatherIcons[iconCode] || clear_icon;
  };

  return (
    <div className="p-6 mb-10 max-w-lg mx-auto mt-10 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-2xl rounded-2xl transition-all duration-300">

      {/* Heading Start*/}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg lg:text-2xl font-bold text-center text-blue-700 dark:text-white">
          Weather Finder
        </h1>
        <ToggleButton />
      </div>

      {/* Heading End*/}


      {/* Searching Start*/}
      
      <SearchBox />

      {/* Searching End*/}

      {/* Loading Start*/}
      {isLoading && (
        <p className="mt-4 text-center text-blue-600 dark:text-blue-300 animate-pulse">
          Loading...
        </p>
      )}
      {/* Loading End*/}


      {/* Weather Info Start*/}
    
      {!isLoading && (
        <div className="mt-6 bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-700 rounded-xl p-6 shadow-inner transition-all duration-300">
          {isError ? (
            <p className="text-center text-red-500 dark:text-red-400 font-bold">
              No City Found
            </p>
          ) : data ? (
            <div className="flex flex-col items-center">
              <div className="mb-4 animate-pulse">
                <img
                  src={getWeatherIcon(data.weather[0].icon)}
                  alt={data.weather[0].main}
                  className="w-24 h-24"
                />
              </div>
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-1">
                {data.name}, {data.sys?.country}
              </h2>
              <p className="text-5xl font-bold text-blue-500 dark:text-blue-200 my-3">
                {Math.round(data.main.temp)}°C
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 capitalize mb-4">
                {data.weather[0].description}
              </p>
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                {[
                  { label: "Humidity", value: `${data.main.humidity}%` },
                  { label: "Wind", value: `${data.wind.speed} m/s` },
                  {
                    label: "Feels Like",
                    value: `${Math.round(data.main.feels_like)}°C`,
                  },
                  { label: "Pressure", value: `${data.main.pressure} hPa` },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 dark:bg-gray-800 p-3 rounded-lg text-center"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.label}
                    </p>
                    <p className="font-semibold text-blue-700 dark:text-blue-300">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Start by typing a city name above to see the current weather.
            </p>
          )}
        </div>
      )}

      {/* Weather Info End*/}

    </div>
  );
};

export default HomePage;

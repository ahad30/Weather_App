import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { clearHistory, setCity } from "@/redux/weather/weatherSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";


const SearchBox = () => {
      const dispatch = useAppDispatch();
      const [input, setInput] = useState("");
      const [showHistory, setShowHistory] = useState(false);
      const history = useAppSelector((state) => state.weather.searchHistory);

    const handleSearch = () => {
        if (input.trim()) {
          dispatch(setCity(input.trim()));
          setShowHistory(false);
        } else {
          toast.error("Please enter a city name");
        }
      };
    
      const handleHistoryClick = (city: string) => {
        dispatch(setCity(city));
        setInput(city);
        setShowHistory(false);
      };

  return (
    <div>
         <div className="relative w-full flex gap-2 items-center">
         <input
          type="text"
          value={input}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setTimeout(() => setShowHistory(false), 200)}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city name"
          className="border border-blue-300  outline-none py-1.5 px-2 w-full rounded-lg rounded-r-none transition-all duration-300 dark:text-black"
         />
          <button
        onClick={handleSearch}
        className=" bg-blue-600 hover:bg-blue-700 text-white font-semibold  rounded-r-lg  p-2 -ml-2  transition duration-300"
      >
       <CiSearch className="text-[20px] lg:text-[22px]"  />
      </button>


      </div>
      { showHistory && history.length > 0 && (
          <div className="w-full bg-white border border-blue-200 mt-3 rounded-lg shadow-lg max-h-48 overflow-y-auto transition-all duration-200">
            <div className="flex justify-between items-center px-3 pt-2">
              <span className="text-sm font-medium text-gray-700">
                Recent Searches
              </span>
              <button
                onClick={() => dispatch(clearHistory())}
                className="text-xs text-red-500 hover:underline"
              >
                Clear
              </button>
            </div>
            <ul className="mt-1">
              {history.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleHistoryClick(item)}
                  className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm text-blue-700 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
         )}

     
    </div>
  )
}

export default SearchBox
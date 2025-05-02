import clear_icon from "@/assets/icons/clear.png";
import cloud_icon from "@/assets/icons/cloud.png";
import drizzle_icon from "@/assets/icons/drizzle.png";
import rain_icon from "@/assets/icons/rain.png";
import snow_icon from "@/assets/icons/snow.png";


const weatherIcons: Record<string, string> = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
};

export default weatherIcons;
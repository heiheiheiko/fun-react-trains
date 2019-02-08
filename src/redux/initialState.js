import { cities } from "../config/cities";

export default {
  trains: [],
  trainFilterString: "",
  mapZoom: 5,
  mapCenter: cities.find((city) => city.id === "helsinki" ).coordinates,
}
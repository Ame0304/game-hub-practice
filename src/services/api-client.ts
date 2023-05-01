import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7375605bdf1341ab88967dd5767c1275",
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4172b492a69a497c853aaa23a74f5d05",
  },
});

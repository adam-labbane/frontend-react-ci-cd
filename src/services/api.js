import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-fast-api-sigma.vercel.app"
});

export default API;

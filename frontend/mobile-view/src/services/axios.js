import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:8000/api`;

const instance = axios.create({ baseURL });

export default instance;

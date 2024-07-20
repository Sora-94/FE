import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7104/",
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("token"),
    "Content-Type": "application/json",
  },
});

export default instance;
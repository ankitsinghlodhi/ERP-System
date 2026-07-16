import axios from "axios";

export const facultyAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/faculty`,
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

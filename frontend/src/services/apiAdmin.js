import axios from "axios";

export const adminAPI = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/admin`,
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});


// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true, // 🔥 IMPORTANT
// });

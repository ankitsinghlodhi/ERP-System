import axios from "axios";

export const facultyAPI = axios.create({
  baseURL: "http://localhost:5000/api/faculty",
  withCredentials: true,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

// import axios from "axios";

// /* =======================
//    AUTH / PUBLIC API
//    ======================= */
// const API = axios.create({
//   baseURL: "http://localhost:5000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // ADMIN signup
// export const signupAdmin = (data) => {
//   return API.post("/auth/signup", data);
// };

// // LOGIN (Admin / Faculty / Student)
// export const loginUser = (data) => {
//   return API.post("/auth/login", data);
// };


// /* =======================
//    ADMIN PROTECTED API
//    ======================= */
// const ADMIN_API = axios.create({
//   baseURL: "http://localhost:5000/api/auth",
// });

// // attach token automatically
// ADMIN_API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // -------- CREATE FACULTY --------
// export const createFaculty = async (data) => {
//   const res = await ADMIN_API.post("/create-faculty", data);
//   return res.data;
// };


// // -------- CREATE STUDENT --------
// export const createStudent = (data) => {
//   return ADMIN_API.post("/create-student", data);
// };


import api from "./api";

/* =======================
   AUTH / PUBLIC API
   ======================= */

// ADMIN signup
export const signupAdmin = (data) => {
  return api.post("/auth/signup", data);
};

// LOGIN (Admin / Faculty / Student)
// export const loginUser = (data) => {
//   return api.post("/auth/login", data);
// };
export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

/* =======================
   ADMIN PROTECTED API
   ======================= */

// -------- CREATE FACULTY --------
export const createFaculty = async (data) => {
  const res = await api.post("/auth/create-faculty", data);
  return res.data;
};

// -------- CREATE STUDENT --------
export const createStudent = (data) => {
  return api.post("/auth/create-student", data);
};
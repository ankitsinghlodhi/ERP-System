// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api/admin",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

// import { facultyAPI } from "./apiFaculty";

// export const fetchStudentDepartments = () => API.get("/student/departments");

// export const fetchStudentsByDepartment = (departmentId) =>
//   API.get(`/student?departmentId=${departmentId}`);

// export const getFacultyStudentsByDepartment = () => {
//   return facultyAPI.get("/students");
// };


import api from "./api";
import { facultyAPI } from "./apiFaculty"; // keep this if it's already used elsewhere

export const fetchStudentDepartments = () =>
  api.get("/admin/student/departments");

export const fetchStudentsByDepartment = (departmentId) =>
  api.get(`/admin/student?departmentId=${departmentId}`);

export const getFacultyStudentsByDepartment = () => {
  return facultyAPI.get("/students");
};

export const getDashboardSummary = () =>
  api.get("/student/dashboard-summary");
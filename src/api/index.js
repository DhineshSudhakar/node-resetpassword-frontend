import axios from "axios";

// const baseURL = "http://localhost:4000/"
const baseURL = "https://reset-password-backend-node.herokuapp.com/";

const API = axios.create({ baseURL });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

export const signupAction = (data) => API.post("user/signup", data);
export const loginAction = (data) => API.post("user/login", data);
export const fpAction = (data) => API.put("user/forgot-password", data);
export const rpAction = (data) => API.put("user/reset-password", data);
export const cpAction = (data) => API.put("user/change-password", data);

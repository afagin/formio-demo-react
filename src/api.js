import axios from "axios";
export const FORMIO_URL = "https://formio.form.io";
export const PROJECT_URL = "https://ylxtymbgyalymly.form.io";

axios.interceptors.request.use(
  req => {
    const token = localStorage.getItem("token");
    if (token) {
      return { ...req, headers: { 'x-jwt-token': token } };
    }

    return req;
  },
  error => Promise.reject(error)
);

export const getCurrentUser = () => axios.get(`${FORMIO_URL}/current`);
export const getForm = url => axios.get(url);
export const login = data => axios.post(`${FORMIO_URL}/user/login`, data);
export const createForm = data => axios.post(`${PROJECT_URL}/form`, data);
export const submitForm = data => axios.post(`/api/submit`, data);
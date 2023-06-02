import axios from 'axios';
const apiURL = 'https://loginbackend-xmyu.onrender.com/' || 'http://localhost:5000';
const API = axios.create({baseURL: apiURL});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("Profile")).token
      }`;
    }
    return req;
  });

export const logIn = (authData) => API.post('/user/login',authData);
export const signUp = (authData) => API.post('/user/signup',authData);

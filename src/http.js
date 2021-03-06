import axios from "axios"
const http = axios.create({
    baseURL:"http://localhost:7001/api"
})

http.interceptors.request.use(config =>{
  if (localStorage.token) config.headers.Authorization = localStorage.token;
  return config;
},err=>{
  return Promise.reject(err)
})

export default http;

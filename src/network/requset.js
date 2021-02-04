import axios from "axios";
import Vue from 'vue'


function request(config) {

  const request = axios.create({
    baseURL: "http://123.207.32.32:8000/api/h8/",
    timeout: 50000
  });

  //请求拦截器
  request.interceptors.request.use(config => {
    // console.log('request succeed', config);
    return config;
  }, error => {
    // console.log('request error', error);
    throw error;
  });
  //响应拦截器
  request.interceptors.response.use(value => {
    // console.log('response succeed', value);
    return value.data;
  }, error => {
    // console.log('response error', error);
    throw error;
  });


  return request(config);
}



export default request;










































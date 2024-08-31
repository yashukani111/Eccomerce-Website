import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
   
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
        
    });
   
}

// import axios from 'axios';
// // config
// const BASE_URL = process.env.BASE_URL
// // ----------------------------------------------------------------------
// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
// });
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );
// export const axiosMockInstance = axios.create({
//   baseURL: 'https://minimal-assets-api-dev.vercel.app',
// });
// axiosMockInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );
// export default axiosInstance;

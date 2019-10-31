import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `http://192.168.172.122:8000`,
});

export default AxiosInstance;
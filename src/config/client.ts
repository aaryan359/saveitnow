import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../config/api';
import axios from 'axios';

//for creating instance of axios. makes a default prefix for each api request
const apiClient = axios.create({
  baseURL: API_URL,
});

//setting up header, making sure for authenticated api calls through token checking
apiClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('Token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default apiClient;
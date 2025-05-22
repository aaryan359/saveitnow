import {Platform} from 'react-native';

export const API_URL = Platform.select({
  ios: 'https://onrender.com',
  android: 'https://onrender.com',
  default: 'https://onrender.com',
});


//https://onrender.com -for render backend
// http://192.168.0.104:3000  -for android
//http://192.168.39.222:3000  -for physical android phone
//http://localhost:3000  -for ios 

//http://192.168.39.222:3000
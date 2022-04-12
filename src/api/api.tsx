import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginData } from '../interfaces/appInterfaces';

const baseURL = 'https://ayudat-backend.herokuapp.com/api';

const Api = axios.create({ baseURL });

Api.interceptors.request.use(
    
    async(config) => {
        const token = await AsyncStorage.getItem('clave');
        if ( typeof token === 'string') {
            // config.headers['refresh'] = token;
        }
        return config;
    }
)



export default Api;
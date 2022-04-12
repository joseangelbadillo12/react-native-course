
import Api from "../api/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { ProfessionalResponse } from "../interfaces/appInterfaces";

export const loadProfessionals = async () => {

    // const [professional, setProfessional] = useState<Pro[]>([]);

    const token = await AsyncStorage.getItem('clave');
    return Api.get('/professional/', {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    }).then(response => {  
        return response.data; 
    }).catch(error => {
        console.log(error);
    }); 
}

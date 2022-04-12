import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Api from '../api/api';

import { LoginResponse, LoginData, RegisterData, RegisterResponse, User } from '../interfaces/appInterfaces';
import { AuthState, authReducer1, AuthState1 } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    data: RegisterData | null;
    token: User | null;
    data1: User | null;
    userType: number;
    email: string | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: ( registerData: RegisterData ) => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    email: null,
    userType: 0    ,
    errorMessage: '',
    data: null,
}

const authInitialState1: AuthState1 = {
    status: 'checking',
    token: null,
    errorMessage: '',
    data: null,
    data1: null,
    email: null,
    userType: 0,

}



export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any)=> {

    // const [ state, dispatch ] = useReducer( authReducer, authInitialState);
    const [ state1, dispatch1 ] = useReducer ( authReducer1, authInitialState1);

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('clave');
        
        // No token, no autenticado
        if ( !token ) return dispatch1({ type: 'notAuthenticatedLogin' });

        // Hay token
        const resp = await Api.post('/auth/login/refresh/', { token });
        if ( resp.status !== 200 ) {
            return dispatch1({ type: 'notAuthenticated' });
        }
        dispatch1({ 
            type: 'signIn',
            payload: {
                userType: resp.data.userType,
                email: resp.data.email,
                data1: resp.data.data,
            }
        });
    }

    
    const signIn = async({ email, password }: LoginData ) => {

        try {
         
            const { data } = await Api.post<LoginResponse>('/auth/login/', { email, password } );
            console.log(data);
            dispatch1({ 
                type: 'signIn',
                payload: {
                    email: data.email,
                    userType: data.userType,
                    data1: data.data,
               } 
            });

            await AsyncStorage.setItem('clave', data.data.access);

        } catch (e) {
            console.log(e);
            dispatch1({ 
                type: 'addError', 
                payload: String(e) || 'Usuario no autenticado'
            });
            
        }
    };
    
    const signUp = async( {  email, password, fname, lname, phone, description,  }: RegisterData ) => {

        try {
         
            const { data } = await Api.post<RegisterResponse>('/patient/create/', { email, password, fname, lname, phone, description } );
            dispatch1({ 
                type: 'signUp',
                payload: {
                    token: data.token,
                    data: data.data,
                    
                }
            });

            await AsyncStorage.mergeItem('clave', data.token.access);

        } catch (error) {
            dispatch1({ 
                type: 'addError', 
                payload: String(error) || 'Revise la información'
            });
        }

    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch1({ type: 'logout' });
    };

    const removeError = () => {
        dispatch1({ type: 'removeError' });
    };


    useEffect(() => {
        const acceso = checkToken();
        AsyncStorage.getItem('clave').then(clave => {
            console.log('clave', clave);
        }).catch(error => {
            console.log({ error });
        });
        console.log({ acceso });
    }, []);

    return (
        <AuthContext.Provider value={{
            ...state1,
            signIn,
            signUp,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}
import { RegisterData, User } from '../interfaces/appInterfaces';

export interface AuthState {
    status: 'authenticated' | 'checking' | 'not-authenticated';
    email: string | null;
    userType: number
    errorMessage: string;
    data: User | null;
}

export interface AuthState1 {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    data: RegisterData | null;
    token: User | null;
    errorMessage: string;
    data1 : User | null;
    email: string | null;
    userType: number;

}
    
type AuthAction1 = (

    | { type: 'signUp', payload: { 
        data : RegisterData,
        token: User
        
    } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }
    | { type: 'signIn', payload: { email: string, userType: number, data1: User} }
    | { type: 'notAuthenticatedLogin'}

)

export const authReducer1 = ( state: AuthState1 , action: AuthAction1 ): AuthState1 => {

    switch (action.type) {
        case 'addError':
            return {
                ...state,
                status: 'not-authenticated',
                data: null,
                token: null,
                errorMessage: action.payload
            }
    
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            };

        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                data: action.payload.data,
                token: action.payload.token,

            }
        case 'removeError':
            return {
                ...state,
            }
        case 'logout':

        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage: '',
                data: null,
                token: null,

            }
            case 'signIn':
                return {
                    ...state,
                    errorMessage: '',
                    status: 'authenticated',
                    email: action.payload.email,
                    userType: action.payload.userType,
                    data1: action.payload.data1
                }
            default:
            return state;
}

}
// export const authReducer = ( state: AuthState , action: AuthAction ): AuthState => {

//     switch (action.type) {
//         case 'addError':
//             return {
//                 ...state,
//                 status: 'not-authenticated',
//                 data: null,
//                 errorMessage: action.payload
//             }
    
//         case 'removeError':
//             return {
//                 ...state,
//                 errorMessage: ''
//             };

//         case 'signIn':
//             return {
//                 ...state,
//                 errorMessage: '',
//                 status: 'authenticated',
//                 email: action.payload.email,
//                 userType: action.payload.userType,
//                 data: action.payload.data
//             }

//         case 'logout':
//         case 'notAuthenticated':
//             return {
//                 ...state,
//                 status: 'not-authenticated',
//                 data: null,
//                 errorMessage: ''
//             }

//         default:
//             return state;
//     }


// }


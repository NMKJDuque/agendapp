import {requestHttp, HTTP_VERBS} from "../../utils/HttpRequest";
import {FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, AUTOLOGIN_SUCCESS, AUTOLOGIN_FAILURE} from "./userTypes";
import { USERS } from "../../constants/HttpEndpoints";
import { getToken, setToken } from "../../utils/LocalStorageToken";

export const fetchLogin = (credentials = {}) => {
    return (dispatch) => {
        dispatch(fetchLoginRequest());
        const callHttp = async (credentials) =>{
                try{
                    const response = await requestHttp(
                        {
                            method: HTTP_VERBS.POST,
                            endpoint: USERS.login,
                            data: credentials
                        }
                    );
                    //localStorage.setItem(TOKEN,response.data.token)
                    setToken(response.data.token)
                    dispatch(fetchLoginSuccess());
                }catch(error){
                    const messageError = error.response.statusText || 'error';
                    dispatch(fetchLoginFailure(messageError));
                }
            }
            callHttp(credentials);
        };
        
        
}


export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}

export const fetchLoginSuccess = (tasks) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        
    }
}

export const fetchLoginFailure = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}

export const autoLoginFailure = ()=> {
    return{
        type: AUTOLOGIN_FAILURE
    }
}
export const autoLoginSuccess = ()=> {
    return {
        type: AUTOLOGIN_SUCCESS
    }
}

export const autologin = () => {
    return (dispatch) => {
        
        
        const callHttp = async () =>{
            try{
                const token = getToken();
                const response = await requestHttp(
                    {
                        method: HTTP_VERBS.POST,
                        endpoint: USERS.check,
                        token
                    }
                );
                dispatch(autoLoginSuccess());
            }catch(error){
                //const messageError = error.response.statusText || 'error';
                dispatch(autoLoginFailure());
            }
        }
        callHttp();
        

       // if (token) dispatch(autologinSuccess());
        //if (!token) dispatch(autologinFailure());
    }
}





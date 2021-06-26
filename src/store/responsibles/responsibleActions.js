import {requestHttp, HTTP_VERBS} from "../../utils/HttpRequest";
import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./responsibleTypes";
import { TOKEN } from "../../constants/Auth";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = (responsible)=> {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: responsible
    }
}
export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        const token = localStorage.getItem(TOKEN);
        const callHttp = async () =>{
                try{
                    const response = await requestHttp(
                        {
                            method: HTTP_VERBS.GET,
                            token,
                            endpoint: 'users'
                        }
                    );
                    //localStorage.setItem(TOKEN,response.data.token)
                    //console.log(response.data);
                    dispatch(fetchUserSuccess(response.data));
                }catch(error){
                    const messageError = error.response.statusText || 'error';
                    dispatch(fetchUserFailure(messageError));
                }
            }
            callHttp();
        };
        
        
}

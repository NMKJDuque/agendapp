import {FETCH_TASK_FAILURE, FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS} from './taskTypes';
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { TASK } from '../../constants/HttpEndpoints';
import { getToken } from '../../utils/LocalStorageToken';

export const fetchTasks = (filter = {}) => {
    return (dispatch) => {
        dispatch(fetchTaskRequest());

        //const token = localStorage.getItem(TOKEN);
        const callHttp = async (filter) =>{
                try{
                    const token = getToken();
                    const response = await requestHttp(
                        {
                            method: HTTP_VERBS.GET,
                            token,
                            endpoint: TASK.getTask,
                            params: filter
                        }
                    );
                    dispatch(fetchTaskSuccess(response.data));
                }catch(error){
                    dispatch(fetchTaskFailure(error.response.statusText));
                }
            }
            callHttp(filter);
        };
        
        
}

export const fetchTaskRequest = () => {
    return {
        type: FETCH_TASK_REQUEST
    }
}

export const fetchTaskSuccess = (tasks) => {
    return {
        type: FETCH_TASK_SUCCESS,
        payload: tasks
    }
}

export const fetchTaskFailure = (error) => {
    return {
        type: FETCH_TASK_FAILURE,
        payload: error
    }
}



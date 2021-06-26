import {CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE} from './createTaskTypes';
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";
import { TASK } from '../../constants/HttpEndpoints';
import { getToken } from '../../utils/LocalStorageToken';
import { redirect } from '../index';

export const createTasks = (dataTask = {}) => {
    return (dispatch) => {
        dispatch(createTaskRequest());

        //const token = localStorage.getItem(TOKEN);
        const token = getToken();

        const callHttp = async (dataTask) =>{
                try{
                    let stringCollaborators = [];

                    dataTask.collaborators.map( (value, key) =>{
                        stringCollaborators.push(value.value);
                    }); 
                    
                    let newData = {
                        "title": dataTask.title,
                        "description": dataTask.description,
                        "due_date": dataTask.due_date,
                        "responsible": dataTask.responsible.value,
                        "collaborators": stringCollaborators
                    };
                    const response = await requestHttp(
                        {
                            method: HTTP_VERBS.POST,
                            token,
                            endpoint: TASK.createTask,
                            data: newData
                        }
                    );
                    dispatch(createTaskSuccess(response.data));
                    alert('Task created successfully');
                    dispatch(redirect('/'));
                }catch(error){
                    alert('Error creating task');
                    dispatch(createTaskFailure(error.response.statusText));
                }
            }
            callHttp(dataTask);
        };
        
        
}

export const createTaskRequest = () => {
    return {
        type: CREATE_TASK_REQUEST
    }
}

export const createTaskSuccess = (tasks) => {
    return {
        type: CREATE_TASK_SUCCESS,
        payload: tasks
    }
}

export const createTaskFailure = (error) => {
    return {
        type: CREATE_TASK_FAILURE,
        payload: error
    }
}

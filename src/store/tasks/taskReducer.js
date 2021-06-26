import { FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE, FETCH_TASK_REQUEST} from "./taskTypes";

const initialState = {
    loading: false,
    tasks: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TASK_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_TASK_SUCCESS:
            return{
                loading: false,
                error: "",
                tasks: action.payload
            }
        case FETCH_TASK_FAILURE:
            return{
                loading: false,
                error: action.payload,
                tasks: []
            }
        default:
            return state;
    }
};

export default reducer;

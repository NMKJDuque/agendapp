import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./responsibleTypes";

const initialState = {
    loading: false,
    responsibles: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            const arreglo = action.payload;
            let datos=[];
            //todo for
            for(var i=0; i<arreglo.length; i++){
                datos.push({value: arreglo[i]._id, label: arreglo[i].name});
            }
            

            return{
                loading: false,
                error: "",
                responsibles: datos
            }
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                error: action.payload,
                responsibles: []
            }
        default:
            return state;
    }
};

export default reducer;

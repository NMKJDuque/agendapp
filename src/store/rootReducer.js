import { combineReducers } from "redux";
import taskReducer from "./tasks/taskReducer";
import createTaskReducer from "./createTask/createTaskReducer";
import userReducer from "./user/userReducer"
import responsibleReducer from "./responsibles/responsibleReducer";
import redirectReducer  from "./redirect/redirectReducer";
const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer,
    responsibles: responsibleReducer,
    createTask: createTaskReducer,
    redirect: redirectReducer
});

export default rootReducer;

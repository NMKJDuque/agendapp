import { TASK_STATUS } from "../../../constants/TaskStatus";
import { useFilterStatus } from "../../../contexts/FilterStatusContext";
import { FilterStatusTaskWrapper, TaskFilterWrapper } from "./styles";

const FilterStatusTask = ({statusName, statusId, active, onPress}) => (
    <FilterStatusTaskWrapper onClick={() => onPress(statusId)} active={active} >{statusName}</FilterStatusTaskWrapper>
) 

export const TaskFilter = () => {
    const {currentTaskFilter, setCurrentTaskFilter} = useFilterStatus();

    return (
    <TaskFilterWrapper>
        <FilterStatusTask/>   
        {
            TASK_STATUS.map((item, key)=>(
                <FilterStatusTask onPress={ (newStatusId) => setCurrentTaskFilter(newStatusId) } statusId={item.id} active={item.id === currentTaskFilter} key={key} statusName={item.name}/>
                ))
        }
    </TaskFilterWrapper>
    );
}

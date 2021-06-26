import React, { Fragment } from "react";
import {getStatusById} from "../../constants/TaskStatus";
import { useHistory, useParams } from "react-router-dom"
import { TaskDescription, TaskDueDate, TaskFooter, TaskResponsable, TaskStatusLabel, TaskTitle } from "./styles";
import { Topbar } from "../../components/Topbar";
 const TaskDetail = ({title}) => {
    const history = useHistory();
    const {id} = useParams();

    const renderStatus = (id) => {
        const status = getStatusById(id);
        return <TaskStatusLabel color={status.color}>{status.name}</TaskStatusLabel>
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <Topbar isBackVisible={true} onPress={goBack} title={title} />
            {renderStatus(2)}
            <TaskStatusLabel>
            in progress: {id}
            </TaskStatusLabel>
            <TaskTitle>Titulo</TaskTitle>
            <TaskDescription>Lorem ......</TaskDescription>
            <TaskFooter>
                <TaskDueDate>Due date</TaskDueDate>
                <TaskResponsable>Responsable</TaskResponsable>
            </TaskFooter>
        </Fragment>
    )
}
export default TaskDetail;

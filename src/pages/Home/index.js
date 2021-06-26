import { useEffect } from "react";
import { Taks } from "../../components/Task";
import { TaskFilter } from "./components/TaskFilter";
import { STATUS_FILTER } from "./../../constants/TaskFilterStatus";
import { useFilterStatus } from "../../contexts/FilterStatusContext";
import { Topbar } from "./../../components/Topbar";
import { connect } from 'react-redux';
import { fetchTasks } from "../../store";



const Home = ({title, tasksData, fetchTasksAction}) => {
  //const {currentTaskFilter, seCurrentTaskFilter} = useFilterStatus();
  const {currentTaskFilter} = useFilterStatus();

  useEffect(()=>{

      console.log('texto tarea', tasksData);      

  }, [tasksData]);

  useEffect(() => {
    fetchTasksAction();
  }, []);

 useEffect(() => {
    if(currentTaskFilter === STATUS_FILTER.ALL){
      fetchTasksAction();
    }else{
      fetchTasksAction({status: currentTaskFilter});
    }
  }, [currentTaskFilter]);


  return(
    <>
      <Topbar isBackVisible={false} title={title} />
        <TaskFilter />
        {
          tasksData.loading && <p>Loading...</p>
        }
        {
          tasksData.error && <p>{tasksData.error}</p>
        }
        <div>
          {tasksData.tasks.map((item, key) => (
            <Taks key={key} {...item} />
          ))}
        </div>
      
    </>
  )
};

const mapStateToProps = state => {
  return{
    tasksData: state.task
  }
}

const mapDispatchToProps = dispatch => {
  return{
    fetchTasksAction: (filter) => dispatch(fetchTasks(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

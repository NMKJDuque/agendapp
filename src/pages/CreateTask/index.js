import { Fragment,useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Topbar } from "../../components/Topbar";
import  Select  from "react-select";
import DatePicker  from "react-date-picker";
import { useForm, Controller } from "react-hook-form";
import { TextArea, LabelError } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, createTasks } from "../../store";
import { TOKEN } from "../../constants/Auth";
import { Redirect } from "react-router-dom";


 const CreateTask = ({title}) => {
    const redirectData = useSelector(state => state.redirect) 
    const dispatch = useDispatch();
    const respData = useSelector(state => state.responsibles);

   //const [dueDateTask, setDueDateTask] = useState(new Date());
    //const [description, setDescription] = useState('hola');
    //onChange={ (e) => setDescription(e.target.value)} value={description} 

    const {register,control, handleSubmit, formState: {errors, isValid}} = useForm({mode: 'onChange'});
    const onSubmitCreate = (data) =>{
        console.log('data form', data);
        dispatch(createTasks(data));
        //console.log('datos create btn', respData);

    };

    useEffect(()=>{
        dispatch(fetchUsers(TOKEN));
    }, []);

    if(redirectData.path !== ''){
        return <Redirect to={{pathname: redirectData.path}} />
    }

    return(
    <Fragment>
        <Topbar isBackVisible={false} title={title}></Topbar>
        <form onSubmit={handleSubmit(onSubmitCreate)}>
        {/*<Controller 
            name="taskTitle"
            control={control}
            render={({field})=>(
                <Input {...field}  label="Task title" type="text" placeholder="Enter task title" />
            )}
        /> 
        */}
      
        <Input register={register} rules={{required: true, minLength: 6}} name="title" label="Task title" type="text" placeholder="Enter task title" /> 
        {
            errors.taskTitle?.type==='required' && <LabelError>Field required</LabelError>   
        }
        {
            errors.taskTitle?.type==='minLength' && <LabelError>Min Length 6 characters</LabelError>   
        }

        <div>
            <label>Responsible </label>
            <Controller 
                name="responsible"
                control={control}
                rules={{required: true}}
                render={({field})=>(
                    <Select
                        {...field}
                        placeholder="Select responsible" 
                        options={respData.responsibles}
                    />  
                )}
            />
            {
                errors.responsible && <LabelError>Field required</LabelError>   
            }
        </div>
        <div>
            <label>Collaborators </label>
            <Controller 
                name="collaborators"
                control={control}
                rules={{required: true}}
                render={({field})=>(
                    
                    <Select {...field} isMulti placeholder="select" options={respData.responsibles} />
                )}
            />
            {
                errors.collaborators && <LabelError>Field required</LabelError>
            }
        </div>
        <div>
            <Controller
                name="due_date"
                control={control}
                defaultValue={ new Date()}
                rules={{required: true}}
                render={({field})=>(
                    <DatePicker 
                        {...field}
                        format="y-MM-dd"
                        locale="en-En"
                    />
                )}
            />
            {
                errors.dueDateTask && <LabelError>Field required</LabelError>
            }
        </div>
        <div>
        <label>Description</label>
        <div>
        
            <TextArea {...register("description", {required: true})} rows="3" errors={errors.description}>

            </TextArea>
        </div>
        <LabelError> {errors.description && 'Field required'}</LabelError>
        </div>
        <div>
            <Button disabled={!isValid} type="submit"  text="Create"/>
        </div>
        
        </form>
    </Fragment>
    )
    }
export default CreateTask;

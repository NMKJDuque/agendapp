import React, { Fragment, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Splash } from "./Splash";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { NotFound } from "./NotFound";
//import  Home  from "./Home";
//import { Schedule } from "./Schedule";
//import { CreateTask } from "./CreateTask";
//import { TaskDetail } from "./TaskDetail";
import { Menu } from "../components/Menu";
import { PageWrapperMenu } from "../globalStyles";
import { useSelector, useDispatch } from "react-redux";
import { autologin } from "../store";
import { Loading } from "../components/Loading";
import { redirectDone } from "./../store";

const Home = React.lazy(() => import('./Home'));
const Schedule = React.lazy(() => import('./Schedule'));
const CreateTask = React.lazy(() => import('./CreateTask'));
const TaskDetail = React.lazy(() => import('./TaskDetail'));
export const AutenticatedUser = ({children}) => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        console.log('pathname',pathname);
        dispatch(redirectDone());
    },[pathname])
    
    return ( 
        <Fragment>
            
            <PageWrapperMenu>
                {children}
            </PageWrapperMenu>
            <Menu pathname={pathname}/>
        </Fragment>
    )
}
export const NotAutenticatedUser = ({children}) => {
    return children;
}

 export const NavigationApp = () => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    //const [auth, setAuth] = useState(false);
    //const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            dispatch(autologin());
        },1000);
    },[]);

    if(userData.splash){
        return <Splash />
    }

     return(
        <Router>
            {
                !userData.isAuth && (
                    <NotAutenticatedUser>
                        <Switch>
                            <Route exact path="/" component={Signin} />
                            <Route path="/signup" component={Signup} />
                            <Route path="*" component={NotFound} />
                            
                        </Switch>
                    </NotAutenticatedUser>
                )
            }
            {
                userData.isAuth && (
                    <AutenticatedUser>
                        <Switch>

                            <Route exact path="/" >
                                <Suspense fallback={<Loading/>}>
                                    <Home 
                                        title="Tasks"
                                    />
                                </Suspense>  
                            </Route>
                            <Route path="/schedule" >
                                <Suspense fallback={<Loading/>}>
                                    <Schedule 
                                        title="Schedules"
                                    />
                                </Suspense>
                            </Route>
                            <Route path="/create">
                                <Suspense fallback={<Loading/>}>
                                    <CreateTask title="Create new task" />
                                </Suspense>
                            </Route>
                            <Route path="/detail/:id" >
                                <Suspense fallback={<Loading/>}>
                                    <TaskDetail title="Task Detail"/>
                                </Suspense>
                            </Route>
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </AutenticatedUser>
                )
            }
            
        </Router>
     );
 }

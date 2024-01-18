import { useGlobalContext } from "../../context/TaskContext"
import Task from "../task/Task";
const Tasks = () => {

    const{tasks} = useGlobalContext();
    console.log(tasks)
    return(
        <>
            <div className="container">
                <h2 className="m-5 text-center">Task List</h2>
                <div className="m-3 text-center">
                    <button className="btn btn-primary ">Add Task</button>
                </div>
                <ul className="list-group ">
                    {tasks.map(task=>(<Task key={task.id} task={task}/>))}
                </ul>
            </div>
        </>
    )
}

export default Tasks
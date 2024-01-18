import { useGlobalContext } from "../../context/TaskContext"
import AddTask from '../addTask/AddTask';
import Task from "../task/Task";
const Tasks = () => {

    const { tasks, isOpen, handleForm } = useGlobalContext();
    console.log(tasks)
    console.log(isOpen)
    return(
        <>
            <div className="container">
                <h2 className="m-5 text-center">Task List</h2>
                <div className="m-3 text-center">
                    {!isOpen && <button className="btn btn-primary" onClick={()=>{handleForm(true)}}>Add Task</button>}
                </div>
                {isOpen?(<AddTask/>):(
                <ul className="list-group ">
                    {tasks.length && tasks.map((tasks,i)=>
                    <Task
                    key={i}
                    id={tasks.id}
                    title={tasks.title}
                    desc={tasks.description}
                    />)}
                </ul>
                )}
            </div>
        </>
    )
}

export default Tasks
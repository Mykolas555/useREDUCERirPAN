import { useGlobalContext } from "../../context/TaskContext"

const Task = (props) => {

    const { removeTask } =useGlobalContext();
    return(
        <>
            <li className="list-group-item d-flex justify-content-between">{props.title}: {props.desc}<button className="btn btn-danger" onClick={()=>{removeTask(props.id)}}>trinti</button></li>
        </>
    )
}

export default Task
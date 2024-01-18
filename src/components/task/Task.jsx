const Task = ({task}) => {
    return(
        <>
            <li className="list-group-item d-flex justify-content-between">{task.title}: {task.desc}<button className="btn btn-danger">trinti</button></li>
        </>
    )
}

export default Task
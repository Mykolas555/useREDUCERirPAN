import { useGlobalContext } from "../../context/TaskContext";
import { useState } from "react";

const AddTask = () => {
    const { addTask, handleForm } = useGlobalContext();

    const [newTask, setNewTask] = useState({
        id: '',
        title: '',
        desc: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        handleForm(false)
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="title"
                        name="title" value={newTask.title} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <textarea placeholder="description" className="form-control"
                        name="desc" value={newTask.desc} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </>
    );
};

export default AddTask;

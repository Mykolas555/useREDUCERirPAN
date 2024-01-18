const AddTask = () => {
    return(
        <>
            <form className="form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="title"/>
                </div>
                <div className="form-group">
                    <textarea placeholder="description" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </>
    )
}

export default AddTask
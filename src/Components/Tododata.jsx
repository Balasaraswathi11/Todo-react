import React, { useState } from 'react';

const Tododata = ({ data, todos, setTodos, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...data });

    const handleDelete = () => {
        const newTodos = todos.filter((_, ind) => ind !== index);
        setTodos(newTodos);
    }

    const handleEdit = () => {
        setIsEditing(true);
        setEditedData({ ...data });
    }

    const handleSave = () => {
        const newTodos = [...todos];
        newTodos[index] = editedData;
        setTodos(newTodos);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    }

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        const newTodos = todos.map((todo, ind) => {
            if (ind === index) {
                return { ...todo, status: newStatus };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    return (
        <div className="col-md-4 mb-3 mt-5">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={editedData.name}
                                onChange={handleInputChange}
                                className="form-control mb-2"
                            />
                            <textarea
                                name="description"
                                value={editedData.description}
                                onChange={handleInputChange}
                                className="form-control mb-2"
                            ></textarea>
                            <button className="btn btn-success mt-2 mr-2" onClick={handleSave}>Save</button>
                            <button className="btn btn-secondary mt-2" onClick={handleCancel}>Cancel</button>
                        </>
                    ) : (
                        <>
                        <div className="carddiv">
                            <h6 className="card-title p-2">Name: {data.name}</h6>
                            <h6 className="card-subtitle mb-2 text-muted p-2"><b>Description:</b> {data.description}</h6>
                            <div className='d-flex justify-content-start align-items-center '>
                        <label><h6 className='p-2'>Status:</h6> </label>
                        <select
                            name="status"
                            value={data.status}
                            onChange={handleStatusChange}
                            className=" select "
                        style={{backgroundColor:data.status==="Completed"?"green":"red", color:"white", textAlign:"center"}}>
                            <option value="Completed">Completed</option>
                            <option value="Not Completed">Not Completed</option>
                        </select>
                    </div> 
                    <div className="buttons">
                            <button className="btn btn-success mt-2 mr-2 buttonn" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-danger mt-2 buttonn" onClick={handleDelete}>Delete</button></div>
                            </div> </>
                    )}
                 
                </div>
            </div>
        </div>
    );
}

export default Tododata;

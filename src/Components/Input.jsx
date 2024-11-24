import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Input.css";
import { Port } from '../App';
import Todolists from './Todolists';
import axios from 'axios';

const Input = () => {
    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [todos, setTodos] = useState([]);

  
    const handleNameChange = (event) => {
        setInputName(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setInputDescription(event.target.value);
    }

    const handleButton = async(event) => {
        event.preventDefault();
        if(inputName.trim()&&inputDescription.trim()!==''){

            try {
                const response=await axios.post(`${Port}/app/create`,{
                    name:inputName,
                    description: inputDescription,
                    status: "Not Completed"
                })

                setTodos([...todos,response.data.newtodo])
                setInputName('');
                setInputDescription('');
            } catch (error) {
                console.error('Error creating todo:', error);
            }
        // setTodos([...todos, { name: inputName, description: inputDescription, status: "Not Completed" }]);
        // setInputName('');
        // setInputDescription('');
    }}

    return (
        <div className="container mt-5 ">
            <h2 className="text-center mb-4 text-success">My Todo</h2>
            <form onSubmit={handleButton} className="row justify-content-between">
                <div className="col-md-4 mb-3 inputname">
                    <input
                        type="text"
                        className="form-control inputone"
                        placeholder="Todo Name"
                        value={inputName}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="col-md-4 mb-3 inputdes">
                    <input
                        type="text"
                        className="form-control inputtwo"
                        placeholder="Todo Description"
                        value={inputDescription}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div className="col-md-2 mb-3 button">
                    <button type="submit" className="btn btn-success">Add Todo</button>
                </div>
            </form>
            <Todolists todos={todos} setTodos={setTodos} />
        </div>
    );
}


export default Input;

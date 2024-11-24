import React, { useEffect, useState } from 'react';
import Tododata from './Tododata';
import axios from 'axios';
import { Port } from '../App';

const Todolists = ({ todos, setTodos }) => {
    const [filter, setFilter] = useState("All");

    useEffect(()=>{
const fetchtodos=async()=>{
    try {
        const response=await axios.get(`${Port}/app/getalltodos`)
        setTodos(response.data.alltodo);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}
   fetchtodos()
},[setTodos])

    const filteredTodos = todos.filter(todo => {
        if (filter === "All") return true;
        return todo.status === filter;
    });
 
    return (
        <div>
            <div className='d-flex ' style={{justifyContent:"space-between"}}>
                <div>
            <h4 className="mt-5">My Todos</h4></div>
            <div className="mt-5">
                <label>Status Filter: </label>
                <select className="filtersel"  onChange={(e) => setFilter(e.target.value)}  style={{backgroundColor:filter==="Completed"?"green":"red", color:"white"}}>
                   
                    <option value="All" >All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                    
                </select>
            </div>
            </div>
            <div className="row">
                {filteredTodos.map((todo, ind) => (
                    <Tododata data={todo} key={ind} todos={todos} setTodos={setTodos} index={ind} />
                ))}
            </div>
        </div>
    )
}

export default Todolists;

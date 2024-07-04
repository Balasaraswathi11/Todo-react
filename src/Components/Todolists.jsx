import React, { useState } from 'react';
import Tododata from './Tododata';

const Todolists = ({ todos, setTodos }) => {
    const [filter, setFilter] = useState("All");

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
                <select  onChange={(e) => setFilter(e.target.value)} className="filtersel" style={{backgroundColor:filter==="Completed"?"green":"red", color:"white"}}>
                   
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

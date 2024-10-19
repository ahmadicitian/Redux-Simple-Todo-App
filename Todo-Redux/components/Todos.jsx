import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodoItem } from "../features/todoSlice.js";

const Todos = ({ onEditHandler }) => {
    const todoList = useSelector(state => state.todoItems);
    const dispatch = useDispatch();

    const onDeleteHandler = (id) => {
        dispatch(removeTodoItem(id));
    };

    return (
        <div id="todoList">
            {todoList.length > 0 ?
                todoList.map(todo => (
                    <li key={todo.id}>
                        {todo.text} <br />
                        Date -  {todo.addingDate}
                        <br />
                        <span>
                            <button onClick={() => onDeleteHandler(todo.id)}>X</button>
                            {/* Pass entire todo for editing */}
                            <button onClick={() => onEditHandler(todo)}>E</button>
                        </span>
                    </li>
                ))
                : <p>No Task Added Yet!</p>}
        </div>
    );
};

export default Todos;

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodoItem, updateTodoItem } from "../features/todoSlice.js";

const AddTodo = ({ editTodo, setEditTodo }) => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        if (editTodo) {
            setValue(editTodo.text);
        }
    }, [editTodo]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (editTodo) {
            dispatch(updateTodoItem({ id: editTodo.id, text: value }));
            setEditTodo(null); // Clear edit state after update
        } else {
            dispatch(addTodoItem(value));
        }
        setValue("");
    };


    return (
        <form id='addTodoForm' onSubmit={onSubmitHandler}>
            <span>
                <input placeholder='What would you do today ?' type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button>{editTodo ? "Update Task" : "Add Task"}</button>
            </span>
        </form>
    )
}

export default AddTodo
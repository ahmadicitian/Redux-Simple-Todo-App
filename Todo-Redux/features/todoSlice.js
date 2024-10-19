import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoItems: [{ id: 1, text: "Default Added Todo", addingDate: Date.now().toLocaleString() }]
}



export const todoSlice = createSlice({
    name: "Todo-App",
    initialState,
    reducers: {
        addTodoItem: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                addingDate: new Date().toDateString()
            }
            state.todoItems.push(todo);
        },
        removeTodoItem: (state, action) => {
            state.todoItems = state.todoItems.filter(todo => todo.id !== action.payload);
        },
        updateTodoItem: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todoItems.find((todoItem) => todoItem.id === id);
            if (todo) {
                todo.text = text
                todo.addingDate = new Date().toLocaleString();
            }
        }
    }
});

export const { addTodoItem, removeTodoItem, updateTodoItem } = todoSlice.actions;
export default todoSlice.reducer;

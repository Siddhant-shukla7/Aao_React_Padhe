import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

// function sayHello() {
//     console.log("Hello World");
// }
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        //we can write the function seperately also and here also 
        // here we get the access of two things in these function, it is the syntax here 
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
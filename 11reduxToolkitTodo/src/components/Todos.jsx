import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    <ul className='list-none'>
    {todos.map((todo) => (
        <li 
        className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
        key={todo.id}
        >
            <div className='text-white'>{todo.text}</div>
             <button 
             onClick={() => dispatch(removeTodo(todo.id))}
             className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-500 roubded text-md'
            >
                <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
                >
                    <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16'
                    />
                </svg>
            </button>
        </li>
    ))}
    </ul>
    </>
  )
}

export default Todos
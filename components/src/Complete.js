import React from 'react'
import AddTodo from '../AddTodo'

function Complete({allTodos, setAsComplete, deleteTodo}) {
    return (
        <>
            <button>Delete All</button>
            {allTodos.filter(todo => todo.isCompleted).map(todo =>             
                <div className='todo-item' key={todo.id+todo.length+1}>
                <label>
                    <input type='checkbox' checked={todo.isCompleted} onChange={() => setAsComplete(todo.id)} />
                    <span onClick={() => setAsComplete(todo.id)}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </label>
            </div>)}
        </>
    )
}

export default Complete
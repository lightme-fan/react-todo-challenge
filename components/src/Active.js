import React from 'react'

function ActiveTodo({ allTodos, setAsComplete }) {
    return (
        <>
            {allTodos.filter(todo => !todo.isCompleted).map(todo => 
                <div className='todo-item' key={todo.id+todo.length+1}>
                    <label>
                        <input type='checkbox' checked={todo.isCompleted} onChange={() => setAsComplete(todo.id)} />
                        <span onClick={() => setAsComplete(todo.id)}>{todo.text}</span>
                    </label>
                </div>)
            }
        </>
    )
}

export default ActiveTodo

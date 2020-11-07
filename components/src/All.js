import React from 'react'

function All({allTodos, setAsComplete}) {
    return (
        <> 
            {allTodos.map(todo => 
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

export default All
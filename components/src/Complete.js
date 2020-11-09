import React from 'react'
import AddTodo from '../AddTodo'

function Complete({isCompleted, id, text, setAsComplete, deleteTodo}) {
    return (
        <>
            {isCompleted ?             
                <div className='todo-item'>
                        <input type='checkbox' onClick={() => setAsComplete(id)} />
                        <label className={isCompleted ? 'completed' : undefined}>{text}</label>
                        <button onClick={() => deleteTodo(id)}>Delete</button>
                </div>
            : null}
        </>
    )
}

export default Complete
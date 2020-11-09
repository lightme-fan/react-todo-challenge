import React from 'react'

function ActiveTodo({ isCompleted, id, text, setAsComplete }) {
    return (
        <>
            {!isCompleted ? 
                <div className='todo-item'>
                    <input type='checkbox' onClick={() => setAsComplete(id)} />
                    <label className={isCompleted ? 'completed' : undefined}>{text}</label>
                </div>
                : null
            }
        </>
    )
}

export default ActiveTodo

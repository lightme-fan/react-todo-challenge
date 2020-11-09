import React from 'react'

function All({id, text, isCompleted, setAsComplete}) {
    return (
        <>  
            <div className='todo-item'>
                <input type='checkbox' onClick={() => setAsComplete(id)} />
                <label className={isCompleted ? 'completed' : undefined}>{text}</label>
            </div>
        </>
    )
}

export default All
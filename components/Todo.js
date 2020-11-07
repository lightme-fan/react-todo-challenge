import React, { useState } from 'react'

function Todo({id, text, checkBoxOnClick, deleteOnClick}) {

    return (
        <li className='todo-item'>
            <label>
                <input type='checkbox' onClick={checkBoxOnClick}/>
                <span onClick={checkBoxOnClick}>{text}</span>
                <button onClick={deleteOnClick}>Delete</button>
            </label>
        </li>
    )    
}

export default Todo
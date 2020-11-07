import React from 'react'

function AddTodo(props) {
    return (
        <>
            <p>Add a Todo</p>
            <label className='add-label'>
                <input type='text' onChange={props.onChange} required/>
                <button type='submit' onClick={props.onClick}>Add</button>
            </label>
        </>
    )
}

export default AddTodo
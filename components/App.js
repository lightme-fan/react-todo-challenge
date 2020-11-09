import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import AddTodo from './AddTodo'
import Header from './Header'
import ActiveTodo from './src/Active'
import All from './src/All'
import Complete from './src/Complete'
import useTodo from './useTodo'

function App() {
    const [todo, allTodos, handleChange, handleSubmit, deleteTodo, setAsComplete] = useTodo()
   

    
    return (
        <article className='container'>
            <h1>Todo App</h1>
            <AddTodo  value={todo} onChange={handleChange} onClick={handleSubmit}/>
        
            <Header/>
            {allTodos.map(todo => 
                <div key={todo.id+todo.length+1}>
                    <Switch>
                        <Route path='/src/all'>
                            <All {...todo} setAsComplete={setAsComplete}/> 
                        </Route>

                        <Route path='/src/active'>
                                <ActiveTodo {...todo} setAsComplete={setAsComplete}/>                   
                        </Route>
                        <Route path='/src/complete'>
                                <Complete {...todo} setAsComplete={setAsComplete} deleteTodo={deleteTodo}/>
                        </Route>
                    </Switch>
                </div>
            )}

        </article>
    )    
}

export default App
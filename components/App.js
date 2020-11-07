import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import AddTodo from './AddTodo'
import Header from './Header'
import ActiveTodo from './src/Active'
import All from './src/All'
import Complete from './src/Complete'
import useTodo from './useTodo'

function App() {
    const [todo, allTodos, handleChange, handleSubmit, deleteTodo, setAsComplete, activeTodo, activeTodos] = useTodo()
   
    
    return (
        <article className='container'>
            <h1>Todo App</h1>
            <AddTodo  value={todo} onChange={handleChange} onClick={handleSubmit}/>
        
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <All allTodos={allTodos} setAsComplete={setAsComplete}/> 
                </Route>

                <Route path='/active'>
                        <ActiveTodo allTodos={allTodos} setAsComplete={setAsComplete}/>                   
                </Route>
                <Route path='/complete'>
                        <Complete allTodos={allTodos} setAsComplete={setAsComplete} deleteTodo={deleteTodo}/>
                </Route>
            </Switch>
        </article>
    )    
}

export default App
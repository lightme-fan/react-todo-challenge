import React, { useState } from 'react'
import { Route, Switch } from 'react-router'
import AddTodo from './AddTodo'
import Header from './Header'
import ActiveTodo from './src/Active'
import All from './src/All'
import Complete from './src/Complete'
import Todo from './Todo'
import useTodo from './useTodo'

function App() {
    const [todo, allTodos, handleChange, handleSubmit, deleteTodo, setAsComplete, setAllTodos] = useTodo()

    // function activeTodo() {
    //     const notCmplete = allTodos.filter(todo => todo.isCompleted === false);
    //     setAllTodos(notCmplete);
    //     console.log(allTodos);
    // }

    // activeTodo()

    return (
        <article className='container'>
            <h1>Todo App</h1>
            <AddTodo  value={todo} onChange={handleChange} onClick={handleSubmit}/>
        
            <Header/>
            <Switch>
                <Route path='/all'><All/></Route>
                <Route path='/active'><ActiveTodo/></Route>
                <Route path='/complete'><Complete /></Route>
            </Switch>
            <ul className='todo-list'>
                {/* {activeTodos ? 
                    activeTodos.map(todo => 
                        <Todo key={todo.id+todo.length+1} 
                            {...todo} 
                            checkBoxOnClick={() => setAsComplete(todo.id)}
                            deleteOnClick={() => deleteTodo(todo.id)}
                        />)
                     */}
                {    allTodos.map(todo => 
                        <Todo key={todo.id+todo.length+1} 
                            {...todo} 
                            checkBoxOnClick={() => setAsComplete(todo.id)}
                            deleteOnClick={() => deleteTodo(todo.id)}
                        />)
                }
            </ul>
        </article>
    )    
}

export default App
import { useState } from 'react'

function useTodo() {
    const [todo, setTodo ] = useState('')
    const [allTodos, setAllTodos ] = useState([])
    const [activeTodo, sectActiveTodo] = useState([])
    
    // Handle Change
    function handleChange(e) {
        setTodo(e.target.value);
    }

    // Add a todo and push it to the empty array of all todos
    function addNewTodos() {
        const newTodo = {
            text: todo,
            isCompleted: false,
            id: new Date()
        }

        setAllTodos([...allTodos, newTodo])
    }

    //  Handle submit
    function handleSubmit(e) {
        e.preventDefault()
        if (!todo) return;
        addNewTodos()
        setTodo('')
    }

    // Set a Todo as complete
    function setAsComplete(id) {
        const completedTodo = allTodos.filter(todo => todo.id === id ? {...todo, isCompleted: !todo.complete} : todo)
        setAllTodos(completedTodo)
    }

    // Remove a Todo
    function deleteTodo(id) {
        const removeDTodo = allTodos.filter(todo => todo.id !== id)
        setAllTodos(removeDTodo)
    }

    function activeTodos() {
        const active = allTodos.filter(todo => todo.iscompleted === false)
        sectActiveTodo(active)
        console.log(active);
    }

    return [todo, allTodos, handleChange, handleSubmit, deleteTodo, setAsComplete, setAllTodos]
}

export default useTodo
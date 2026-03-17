import { useEffect, useState } from 'react'
import TodoList from '../components/TodoList'
import TodoWriteForm from '../components/TodoWriteForm'

function Main() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => {
                setTodos(res.todos)
            })
    }, [])

    return (
        <>
            <TodoWriteForm />
            <TodoList todos={todos} />
        </>
    )
}

export default Main

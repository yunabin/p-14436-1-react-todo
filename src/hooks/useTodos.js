import { useRef, useState } from 'react'

export function useTodos() {
    const lastId = useRef(4)

    const [todos, setTodos] = useState([
        { id: 3, text: '공부하기', checked: true },
        { id: 2, text: '야구보기', checked: false },
        { id: 1, text: '저녁먹기', checked: true },
    ])
    const addTodo = (text) => {
        const todo = { id: lastId.current, text, checked: false }
        setTodos([todo, ...todos])
        lastId.current++
    }

    // ["","",""]
    // {text: "할일" , checked: false} ... ...

    const removeTodo = (selectedId) => {
        const filterTodos = todos.filter((todo) => todo.id !== selectedId)
        setTodos(filterTodos)
    }
    const toggleTodo = (selectedId) => {
        const updateTodos = todos.map((todo) => (todo.id === selectedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
        // 뒤에서 입력된 게 덮어짐 = !todo.checked가 역전된 것으로 덮어짐
    }
    return { todos, addTodo, removeTodo, toggleTodo }
}

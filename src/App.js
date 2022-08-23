import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from "uuid/package.json"

const LOCAL_STORAGE_KEY ='todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem
  //     (LOCAL_STORAGE_KEY))
  //  if (storedTodos) setTodos(storedTodos)
  // }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function  handledAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handledAddTodo}>Add Todo </button>
    <button>Clear Completed </button>
    <div>0 Left to do</div>
    </>
  )
}

export default App;


// create another todo list as this one not working cant find error as no repo for the challenge
// found another to do list challenege with repo start working from that

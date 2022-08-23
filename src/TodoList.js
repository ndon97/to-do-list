import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })
  )
}

// need to find out what is different and make another todo list as there is no repo to check with

import './App.css'
import React, { useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App () {
  // State to hold todos
  const [todos, setTodos] = useState([])

  // Function to add a new todo
  const addTodo = todo => {
    setTodos(prevTodos => [{ id: Date.now(), ...todo }, ...prevTodos])
  }

  // Function to update an existing todo
  const updateTodo = (id, todo) => {
    setTodos(prevTodos =>
      prevTodos.map(prevTodo =>
        prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    )
  }
  // Function to remove a todo
  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  // Function to toggle the completion status of a todo
  const toggleComplete = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Pull the todos from localStorage on initial load
  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos)
    }
  }, [])

  // Save todos to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, toggleComplete }}
    >
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>
            Manage Your Todos
          </h1>
          <div className='mb-4'>
            <TodoForm />
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {todos.map(todo => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

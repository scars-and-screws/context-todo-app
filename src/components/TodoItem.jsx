import { useEffect, useRef, useState } from 'react'
import { useTodo } from '../contexts'
function TodoItem ({ todo }) {
  const { updateTodo, toggleComplete, removeTodo } = useTodo()

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const inputRef = useRef(null)

  const containerClasses = [
    'flex items-center border border-black/5 rounded-xl px-3 py-2 gap-x-3 shadow-sm duration-200 text-black',
    todo.completed ? 'bg-[#dbeed1]' : 'bg-[#e6dbf0]',
    isTodoEditable ? 'bg-[#f5f0e6] ring-1 ring-amber-200 shadow-md' : 'ring-0'
  ]
    .filter(Boolean)
    .join(' ')

  const inputClasses = [
    'flex-1 w-full rounded-lg transition-colors text-base outline-none bg-transparent border border-transparent px-1 py-1 text-gray-800',
    isTodoEditable
      ? 'caret-amber-500 focus:ring-0 focus:border-transparent'
      : 'cursor-default',
    todo.completed ? 'line-through text-gray-500' : ''
  ]
    .filter(Boolean)
    .join(' ')

  const editTodo = () => {
    if (todoMsg.trim() === '') return // Prevent saving empty todos
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false) // Exit edit mode after saving
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && isTodoEditable && !todo.completed) {
      e.preventDefault()
      editTodo()
    }
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
    setIsTodoEditable(false) // Exit edit mode if toggling completion
  }

  const deleteTodo = id => {
    removeTodo(id)
    setIsTodoEditable(false) // Exit edit mode if deleting the todo
  }

  useEffect(() => {
    if (isTodoEditable && !todo.completed && inputRef.current) {
      const inputEl = inputRef.current
      inputEl.focus()
      const valueLength = inputEl.value.length
      inputEl.setSelectionRange(valueLength, valueLength) // Move caret to end
    }
  }, [isTodoEditable, todo.completed])

  return (
    <div className={containerClasses}>
      {!isTodoEditable && (
        <input
          type='checkbox'
          className='cursor-pointer hover:scale-105 duration-150 size-4 accent-green-600'
          checked={todo.completed}
          onChange={toggleCompleted}
        />
      )}
      <input
        type='text'
        ref={inputRef}
        className={inputClasses}
        value={todoMsg}
        onChange={e => setTodoMsg(e.target.value)}
        onKeyDown={handleKeyDown}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 hover:cursor-pointer hover:scale-105 duration-150  '
        onClick={() => {
          if (todo.completed) return

          if (isTodoEditable) {
            editTodo()
          } else setIsTodoEditable(prev => !prev)
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? '📁' : '✏️'}
      </button>
      {/* Delete Todo Button */}
      {!isTodoEditable && (
        <button
          className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 hover:cursor-pointer hover:scale-105 duration-150'
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      )}
    </div>
  )
}

export default TodoItem

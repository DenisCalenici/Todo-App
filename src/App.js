import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodoActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'text',
      isCompleted: false,
      id: 1,
    },
  ])
  console.log(' pula todos', todos)

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const deleteTodoHendler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const deleteComtletedHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true))
  }


  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoActions
        deleteComtletedHandler={deleteComtletedHandler}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHendler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  )
}

export default App

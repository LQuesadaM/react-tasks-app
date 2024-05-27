import { useState, useContext } from 'react'
import { TaskContext } from '../context/Context.jsx'

export const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description,
    })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Descripcion de la tarea"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  )
}

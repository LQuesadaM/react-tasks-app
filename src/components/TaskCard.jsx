import { useContext } from 'react'
import { TaskContext } from '../context/Context.jsx'

export const TaskCard = ({ task, deleteTask }) => {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  )
}

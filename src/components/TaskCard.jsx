import { useContext } from 'react'
import { TaskContext } from '../context/Context.jsx'

export const TaskCard = ({ task, deleteTask }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-blue-500 px-2 py-1 mt-4 rounded-md hover:bg-blue-600 active:bg-blue-700"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  )
}

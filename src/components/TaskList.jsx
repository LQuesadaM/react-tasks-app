import { useContext } from 'react'
import { TaskCard } from './TaskCard.jsx'
import { TaskContext } from '../context/Context.jsx'

export const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  )
}

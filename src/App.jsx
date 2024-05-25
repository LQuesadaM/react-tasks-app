import { TaskList } from './TaskList'
import { TaskForm } from './TaskForm'
import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'
import './App.css'

export const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  const createTask = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        description: 'mueva tarea',
      },
    ])
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

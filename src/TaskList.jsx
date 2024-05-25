import PropTypes from 'prop-types'

export const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>
  }

  return (
    <div>
      {tasks.map(({ id, title, description }) => (
        <div key={id}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array,
}

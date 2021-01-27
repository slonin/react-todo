import React from 'react'

const TaskFilter = () => {
  return (
    <ul className="filters">
      <li>
        <button className="selected">All</button>
        <button>Active</button>
        <button>Completed</button>
      </li>
    </ul>
  )
}

export default TaskFilter;
import React from 'react';

const TaskFilter = ({filter, onToggleFilter}) => {

  return (
    <ul className="filters">
      <li>
        <button 
          name="all" 
          className={filter === 'all' ? 'selected' : ''} 
          onClick={(e) => onToggleFilter(e.target.name)}
        >
          All
        </button>
      </li>
      <li>
        <button 
          name="active" 
          className={filter === 'active' ? 'selected' : '' } 
          onClick={(e) => onToggleFilter(e.target.name)}
        >
          Active
        </button>
      </li>
      <li>
        <button 
          name="completed" 
          className={filter === 'completed' ? 'selected' : ''} 
          onClick={(e) => onToggleFilter(e.target.name)}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TaskFilter;
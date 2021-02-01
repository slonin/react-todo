import React from 'react';
import PropTypes from 'prop-types';
import './task-filter.css';

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

TaskFilter.defaultProps = {
  filter: 'all',
  onToggleFilter: () => {},
}

TaskFilter.propTypes = {
  filter: PropTypes.string,
  onToggleFilter: PropTypes.func,
}

export default TaskFilter;
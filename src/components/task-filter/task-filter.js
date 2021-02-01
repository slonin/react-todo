import React from 'react';
import PropTypes from 'prop-types';
import './task-filter.css';

const TaskFilter = ({ filter, onToggleFilter }) => (
  <ul className="filters">
    <li>
      <button
        type="button"
        name="all"
        className={filter === 'all' ? 'selected' : ''}
        onClick={(event) => onToggleFilter(event.target.name)}
      >
        All
      </button>
    </li>
    <li>
      <button
        type="button"
        name="active"
        className={filter === 'active' ? 'selected' : ''}
        onClick={(event) => onToggleFilter(event.target.name)}
      >
        Active
      </button>
    </li>
    <li>
      <button
        type="button"
        name="completed"
        className={filter === 'completed' ? 'selected' : ''}
        onClick={(event) => onToggleFilter(event.target.name)}
      >
        Completed
      </button>
    </li>
  </ul>
);

TaskFilter.defaultProps = {
  filter: 'all',
  onToggleFilter: () => {},
};

TaskFilter.propTypes = {
  filter: PropTypes.string,
  onToggleFilter: PropTypes.func,
};

export default TaskFilter;

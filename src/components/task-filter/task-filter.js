import React from 'react';
import PropTypes from 'prop-types';
import './task-filter.css';

const TaskFilter = ({ currentFilter, onToggleFilter }) => (
  <ul className="filters">
    <li>
      <button
        type="button"
        name="all"
        className={currentFilter === 'all' ? 'selected' : ''}
        onClick={(event) => onToggleFilter(event.target.name)}
      >
        All
      </button>
    </li>
    <li>
      <button
        type="button"
        name="active"
        className={currentFilter === 'active' ? 'selected' : ''}
        onClick={(event) => onToggleFilter(event.target.name)}
      >
        Active
      </button>
    </li>
    <li>
      <button
        type="button"
        name="completed"
        className={currentFilter === 'completed' ? 'selected' : ''}
        onClick={(event) => onToggleFilter(event.target.name)}
      >
        Completed
      </button>
    </li>
  </ul>
);

TaskFilter.defaultProps = {
  currentFilter: 'all',
  onToggleFilter: () => {},
};

TaskFilter.propTypes = {
  currentFilter: PropTypes.string,
  onToggleFilter: PropTypes.func,
};

export default TaskFilter;

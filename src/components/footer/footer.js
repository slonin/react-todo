import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../task-filter';
import './footer.css';

const Footer = ({ tasks, onDeleteCompletedTasks, onToggleFilter, currentFilter }) => {
  const taskCount = tasks.filter(({ isActive }) => isActive !== false).length;

  return (
    <footer className="footer">
      <span className="todo-count">{taskCount} items left</span>
      <TaskFilter currentFilter={currentFilter} onToggleFilter={onToggleFilter} />
      <button type="button" className="clear-completed" onClick={onDeleteCompletedTasks}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  tasks: [],
  currentFilter: 'all',
  onDeleteCompletedTasks: () => {},
  onToggleFilter: () => {},
};

Footer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDeleteCompletedTasks: PropTypes.func,
  onToggleFilter: PropTypes.func,
  currentFilter: PropTypes.string,
};

export default Footer;

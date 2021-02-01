import React from 'react'
import TaskFilter from '../task-filter';
import PropTypes from 'prop-types';
import './footer.css';

const Footer = ({tasks, onDeleteCompletedTasks, onToggleFilter, filter}) => {

  const taskCount = tasks.filter(({active}) => active !== false).length;

  return (
    <footer className="footer">
      <span className="todo-count">{taskCount} items left</span>
      <TaskFilter 
        filter={filter} 
        onToggleFilter={onToggleFilter}
      />
      <button className="clear-completed" onClick={onDeleteCompletedTasks}>Clear completed</button>
    </footer>
  )
}

Footer.defaultProps = {
  filter: 'all',
  onDeleteCompletedTasks: () => {},
  onToggleFilter: () => {},
}

Footer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDeleteCompletedTasks: PropTypes.func,
  onToggleFilter: PropTypes.func,
  filter: PropTypes.string,
}

export default Footer;
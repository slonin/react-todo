import React from 'react'
import TaskFilter from '../task-filter';

const Footer = ({tasks, onDeleteCompletedTasks, onToggleFilter, filter}) => {

  const taskCount = tasks.filter(({active}) => active !== false).length;

  return (
    <footer className="footer">
      <span className="todo-count">{taskCount} items left</span>
      <TaskFilter 
        tasks={tasks}
        filter={filter} 
        onToggleFilter={onToggleFilter}
      />
      <button className="clear-completed" onClick={onDeleteCompletedTasks}>Clear completed</button>
    </footer>
  )
}

export default Footer;
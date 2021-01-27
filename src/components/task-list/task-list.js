import React from 'react';
import Task from '../task';

const TaskList = ({tasks, id}) => {

  const taskList = tasks.map(({text, id}) => <Task text={text} key={id}/>);

  return (
    <ul className="todo-list">
      {taskList}
    </ul>
  )
}

export default TaskList;
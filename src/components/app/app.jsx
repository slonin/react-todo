import React, { useState } from 'react';
import NewTaskForm from '../new-task-form/index';
import TaskList from '../task-list/index';
import Footer from '../footer/index';

const App = () => {

  const [tasks, setTasks] = useState(
    [
      { text: 'Task #1', id: 1, isActive: true, isEditing: false, created: Date.now(), timerValue: [0, 0] },
      { text: 'Task #2', id: 2, isActive: true, isEditing: false, created: Date.now(), timerValue: [0, 0] },
      { text: 'Task #3', id: 3, isActive: true, isEditing: false, created: Date.now(), timerValue: [0, 0] },
    ]
  );

  const [currentFilter, setCurrentFilter] = useState('all');

  function handleCreateTask(text, minutes, seconds) {
    setTasks([
        ...tasks,
        { text, id: Math.random() * 10000, isActive: true, isEditing: false, created: Date.now(), timerValue: [minutes, seconds] },
      ])
  };

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(task => taskId !== task.id));
  };

  function handleDeleteCompletedTasks() {
    setTasks(tasks.filter(task => task.isActive ? task : null));
  }

  function handleToggleStatus(taskId) {
    setTasks(tasks.map(task => {
        if (taskId === task.id) {
          task.isActive = !task.isActive;
        }

        return task;
      })
    )
  }

  function handleToggleEditInput(taskId) {
    setTasks(tasks.map(task => {
        if (taskId === task.id) {
          task.isEditing = !task.isEditing;
        }

        return task;
      }))
  };

  function handleEditTask(text, taskId) {
    setTasks(tasks.map((task) => {
      if (taskId === task.id) {
        task.text = text;
        task.isEditing = !task.isEditing;
      }

      return task;
    }))
  };

  return (
    <section className="todoapp">
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onCreateTask={handleCreateTask} />
    </header>
    <section className="main">
      <TaskList
        tasks={tasks}
        onChangeStatus={handleToggleStatus}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        currentFilter={currentFilter}
        onToggleEditInput={handleToggleEditInput}
      />
      <Footer
        tasks={tasks}
        onDeleteCompletedTasks={handleDeleteCompletedTasks}
        onToggleFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />
    </section>
  </section>
  )
}

export default App;
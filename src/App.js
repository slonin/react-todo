import React from 'react';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';



const App = () => {
  
  const tasks = [
    {text: 'Task #1', id: 1},
    {text: 'Task #2', id: 2},
    {text: 'Task #3', id: 3},
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks={tasks} />
        <Footer />
      </section>
    </section>
  )
}

export default App;
import React, { Component } from 'react';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';


export default class App extends Component {
  
  state = {
    tasks: [
      {text: 'Task #1', id: 1, active: true, created: new Date()},
      {text: 'Task #2', id: 2, active: true, created: new Date()},
      {text: 'Task #3', id: 3, active: true, created: new Date()},
    ],
    filter: 'all',
  }

  handleToggleStatus= (taskId) => {
    this.setState(({tasks}) => {
      const newState = tasks.map(task => {
        if (taskId === task.id) {
          task.active = !task.active
        }

        return task;
      })
      return {tasks: newState};
    })
  }

  handleCreateTask = (text) => {
    this.setState(({tasks}) => {
      return {
        tasks: [...tasks, { text: text, id: Math.random() * 10000, active: true, created: new Date()}]
      }
    })
  }

  handleDeleteTask = (taskId) => {
    this.setState(({tasks}) => {
      const newState = tasks.filter(task => taskId !== task.id);
      
      return {tasks: newState}
    })
  }

  handleDeleteCompletedTask = () => {
    this.setState(({tasks}) => {
      const newState = tasks.filter(({text, id, active}) => {
        if (active) {
          return ({text, id, active})
        }

        return null;
      })

      return {tasks: newState}
    })
  }

  handleToggleFilter = (name) => {
    this.setState({
      filter: name
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <NewTaskForm onCreateTask={this.handleCreateTask} />
        </header>
        <section className="main">
          <TaskList 
            tasks={this.state.tasks}
            onChangeStatus={this.handleToggleStatus}
            onDeleteTask={this.handleDeleteTask}
            filter={this.state.filter}
          />
          <Footer  
            tasks={this.state.tasks}
            onDeleteCompletedTasks={this.handleDeleteCompletedTask}
            onToggleFilter={this.handleToggleFilter}
            filter={this.state.filter}
          />
        </section>
      </section>
    )
  }
    
}

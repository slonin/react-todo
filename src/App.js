import React, { Component } from 'react';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';



export default class App extends Component {
  
  state = {
    tasks: [
      {text: 'Task #1', id: 1, active: false},
      {text: 'Task #2', id: 2, active: false},
      {text: 'Task #3', id: 3, active: false},
    ]
  }

  handleStatusChange = (taskId) => {
    this.setState(({tasks}) => {
      const newState = tasks.map(({text, id, active}) => {
        if (taskId === id) {
          active = !active
        }

        return ({text, id, active})
      })
      return {tasks: newState};
    })
  }

  handleDeleteTask = (taskId) => {
    this.setState(({tasks}) => {
      const newState = tasks.filter(({text, id, active}) => {
        if (taskId !== id) {
          return ({text, id, active})
        }

        return null;
      })

      return {tasks: newState}
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList 
            tasks={this.state.tasks}
            onChangeStatus={this.handleStatusChange}
            onDeleteTask={this.handleDeleteTask}
          />
          <Footer />
        </section>
      </section>
    )
  }
    
}

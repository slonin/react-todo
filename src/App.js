import React, { Component } from 'react';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';


export default class App extends Component {
  
  state = {
    tasks: [
      {text: 'Task #1', id: 1, active: true, editing: false, created: new Date()},
      {text: 'Task #2', id: 2, active: true, editing: false, created: new Date()},
      {text: 'Task #3', id: 3, active: true, editing: false, created: new Date()},
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
      const newState = tasks.filter((task) => task.active ? task : null)

      return {tasks: newState}
    })
  }

  handleEditTask = (taskId) => {
    this.setState(({tasks}) => {
      const newState = tasks.map(task => {
        if (taskId === task.id) {
          task.editing = !task.editing;
        }

        return task;
      })

      return {tasks: newState};
    })
  }

  handleEditTextTask = (text, taskId) => {
    this.setState(({tasks}) => {
      const newState = tasks.map(task => {
        if (taskId === task.id) {
          task.text = text;
          task.editing = !task.editing;
        }

        return task;
      })

      return {tasks: newState};
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
          <h1>todos</h1>
          <NewTaskForm onCreateTask={this.handleCreateTask} />
        </header>
        <section className="main">
          <TaskList 
            tasks={this.state.tasks}
            onChangeStatus={this.handleToggleStatus}
            onDeleteTask={this.handleDeleteTask}
            onEditTask={this.handleEditTask}
            filter={this.state.filter}
            onEditTextTask={this.handleEditTextTask}
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
import React, { Component } from 'react';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { text: 'Task #1', id: 1, isActive: true, isEditing: false, created: Date.now() },
        { text: 'Task #2', id: 2, isActive: true, isEditing: false, created: Date.now() },
        { text: 'Task #3', id: 3, isActive: true, isEditing: false, created: Date.now() },
      ],
      currentFilter: 'all',
    };

    this.handleToggleStatus = (taskId) => {
      this.setState(({ tasks }) => {
        const newState = tasks.map((task) => {
          if (taskId === task.id) {
            task.isActive = !task.isActive;
          }

          return task;
        });
        return { tasks: newState };
      });
    };

    this.handleCreateTask = (text) => {
      this.setState(({ tasks }) => ({
        tasks: [...tasks, { text, id: Math.random() * 10000, isActive: true, isEditing: false, created: Date.now() }],
      }));
    };

    this.handleDeleteTask = (taskId) => {
      this.setState(({ tasks }) => {
        const newState = tasks.filter((task) => taskId !== task.id);

        return { tasks: newState };
      });
    };

    this.handleDeleteCompletedTasks = () => {
      this.setState(({ tasks }) => {
        const newState = tasks.filter((task) => (task.isActive ? task : null));

        return { tasks: newState };
      });
    };

    this.handleToggleEditInput = (taskId) => {
      this.setState(({ tasks }) => {
        const newState = tasks.map((task) => {
          if (taskId === task.id) {
            task.isEditing = !task.isEditing;
          }

          return task;
        });

        return { tasks: newState };
      });
    };

    this.handleEditTask = (text, taskId) => {
      this.setState(({ tasks }) => {
        const newState = tasks.map((task) => {
          if (taskId === task.id) {
            task.text = text;
            task.isEditing = !task.isEditing;
          }

          return task;
        });

        return { tasks: newState };
      });
    };

    this.handleToggleFilter = (name) => {
      this.setState({
        currentFilter: name,
      });
    };
  }

  render() {
    const { tasks, currentFilter } = this.state;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onCreateTask={this.handleCreateTask} />
        </header>
        <section className="main">
          <TaskList
            tasks={tasks}
            onChangeStatus={this.handleToggleStatus}
            onDeleteTask={this.handleDeleteTask}
            onEditTask={this.handleEditTask}
            currentFilter={currentFilter}
            onToggleEditInput={this.handleToggleEditInput}
          />
          <Footer
            tasks={tasks}
            onDeleteCompletedTasks={this.handleDeleteCompletedTasks}
            onToggleFilter={this.handleToggleFilter}
            currentFilter={currentFilter}
          />
        </section>
      </section>
    );
  }
}

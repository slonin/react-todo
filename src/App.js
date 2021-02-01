import React, { Component } from 'react';
import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';

export default class App extends Component {
  state = {
    tasks: [
      { text: 'Task #1', id: 1, active: true, editing: false, created: Date.now() },
      { text: 'Task #2', id: 2, active: true, editing: false, created: Date.now() },
      { text: 'Task #3', id: 3, active: true, editing: false, created: Date.now() },
    ],
    filter: 'all',
  };

  handleToggleStatus = (taskId) => {
    this.setState(({ tasks }) => {
      const newState = tasks.map((task) => {
        if (taskId === task.id) {
          task.active = !task.active;
        }

        return task;
      });
      return { tasks: newState };
    });
  };

  handleCreateTask = (text) => {
    this.setState(({ tasks }) => ({
      tasks: [...tasks, { text, id: Math.random() * 10000, active: true, created: Date.now() }],
    }));
  };

  handleDeleteTask = (taskId) => {
    this.setState(({ tasks }) => {
      const newState = tasks.filter((task) => taskId !== task.id);

      return { tasks: newState };
    });
  };

  handleDeleteCompletedTask = () => {
    this.setState(({ tasks }) => {
      const newState = tasks.filter((task) => (task.active ? task : null));

      return { tasks: newState };
    });
  };

  handleToggleEditInput = (taskId) => {
    this.setState(({ tasks }) => {
      const newState = tasks.map((task) => {
        if (taskId === task.id) {
          task.editing = !task.editing;
        }

        return task;
      });

      return { tasks: newState };
    });
  };

  handleEditTask = (text, taskId) => {
    this.setState(({ tasks }) => {
      const newState = tasks.map((task) => {
        if (taskId === task.id) {
          task.text = text;
          task.editing = !task.editing;
        }

        return task;
      });

      return { tasks: newState };
    });
  };

  handleToggleFilter = (name) => {
    this.setState({
      filter: name,
    });
  };

  render() {
    const { tasks, filter } = this.state;

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
            filter={filter}
            onToggleEditInput={this.handleToggleEditInput}
          />
          <Footer
            tasks={tasks}
            onDeleteCompletedTasks={this.handleDeleteCompletedTask}
            onToggleFilter={this.handleToggleFilter}
            filter={filter}
          />
        </section>
      </section>
    );
  }
}

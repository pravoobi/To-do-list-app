import React, { Component } from 'react';
import './App.css';
import Addtodo from './Addtodo';
import Header from './Header';
import Todolist from './Todolist';


class App extends Component {
  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    //getinitialstate
    this.state = {
      taskstate: {}
    };
  }

  addTask(task) {
    //Take a copy of our state 
    const taskstate = {...this.state.taskstate};
    //update or add to our state 
    const timestamp = Date.now();
    taskstate[`task-${timestamp}`] = task;
    //set state
    this.setState({ taskstate });
  }

  removeTask(key) {
    //Take a copy of our state
    const taskstate = {...this.state.taskstate};
    delete taskstate[key];
    this.setState({ taskstate });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Addtodo addTask={this.addTask} />
         <ul className="to-do-list">
        {
          Object.keys(this.state.taskstate).map(key => <Todolist key={key} index={key} details={this.state.taskstate[key]} removeTask={this.removeTask} />)
        }
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskItem from './task-item';



const tasks = [
  {name : "Task 1"},
  {name : "Task 2"}
];
localStorage.setItem('tasks', JSON.stringify(tasks));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: JSON.parse(localStorage.getItem('tasks'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    }

  componentWillMount(){
    const tasks = this.getTasks();
    this.setState({ tasks });
  }

  getTasks(){
    return this.state.tasks
  }

  onAdd(name){
    const tasks = this.getTasks();
    tasks.push({
      name
    });
    this.setState({ tasks });
  }
  onDelete(name){
   const tasks = this.getTasks();
   const filteredTasks = tasks.filter(task => {
     return task.name !==name;
   });

   this.setState({ tasks: filteredTasks });
  }
  onEditSubmit(name, originalName){
    let tasks = this.getTasks();

    tasks = tasks.map(task =>{
      if (task.name === originalName) {
        task.name = name;
      }
      return task;
    });
    this.setState({ tasks });

  }
  render() {

    return (
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask 
        onAdd = {this.onAdd}/>
<hr />
        {
          this.state.tasks.map(task => {
          return( 
            <TaskItem 
            key ={task.name}
            {...task}
            onDelete = {this.onDelete}
            onEditSubmit = {this.onEditSubmit}
            />
            
          );
        })}
      </div>
    );
  }
}

export default App;

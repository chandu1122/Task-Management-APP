import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class AddTask extends Component {
 constructor(props){
     super(props);

     this.onSubmit =this.onSubmit.bind(this);
 }
 onSubmit(event){
     event.preventDefault();
    this.props.onAdd(this.nameInput.value);

    this.nameInput.value = '';

 }
  render() {
      
    return (
        <form onSubmit={this.onSubmit}>
        <h3> Add a Task </h3>
        <input placeholder="Enter a task" ref={nameInput => this.nameInput = nameInput}/>
        {'   '}
        <Button bsStyle="success">Add</Button>
        </form>
    );
  }
}

export default AddTask;

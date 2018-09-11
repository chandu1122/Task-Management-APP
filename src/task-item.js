import React, { Component } from 'react';
import { Button, Jumbotron, Grid } from 'react-bootstrap';
import './task-item.css';

class TaskItem extends Component {
 constructor(props){
     super(props);
     
     this.state = {
         isEdit : false
     };

     this.onDelete = this.onDelete.bind(this);
     this.onEdit = this.onEdit.bind(this);
     this.onEditSubmit = this.onEditSubmit.bind(this);
    
 }
 onDelete(){
     const { onDelete, name } = this.props;
     onDelete(name);
 }
 onEdit(){
     this.setState({ isEdit: true});
 }
 onEditSubmit(event){
     event.preventDefault();
     this.props.onEditSubmit(this.nameInput.value, this.props.name);

     this.setState({ isEdit: false });
 }
  render() {
      const { name } = this.props;

    return (
        <Grid>
        <Jumbotron>
        <div className = "Taskholder">
        {
            this.state.isEdit ? (
                <form onSubmit={this.onEditSubmit}>
                <input placeholder="Enter a task" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                <Button bsStyle="primary">save</Button>
                </form>

            ) : (
                <div>
                <span> {name}</span>
                
                <Button bsStyle="info" onClick={this.onEdit}>Edit</Button>
                {'    '}
                <Button bsStyle = "danger" onClick={this.onDelete}>Delete</Button>
                </div>
            )
        }
        </div>
        </Jumbotron>
        </Grid>
    );
  }
}

export default TaskItem;

import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Todo extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  
  render() {
    let TodoItems;
    if(this.props.todos){
    TodoItem = this.props.projects.map(todo => {
      return (
    <ProjectItem onDelete={this.deleteProject.bind(this)}key={todo.title} todo={todo} />
      );
    });
  }
    return (
      <div className="Todo">
        <h3>Latest Project</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array,
}

export default Todos;

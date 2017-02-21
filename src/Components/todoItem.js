import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        {this.props.Todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  project: React.PropTypes.object,
}

export default TodoItem;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoItem extends Component {
   constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
   }
  render() {
        return (
          <li>
            <div className="todo-item">
                <span className="item-name">{this.props.item}</span>
                <span className="item-delete" onClick={this.handleDelete}> x</span>
            </div>
          </li>
        );
  }

  handleDelete(){
    this.props.onDelete(this.props.item);
  }
}

export default TodoItem;


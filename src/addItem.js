import React, { Component } from 'react';
import TodoItem from './todoItem';
import logo from './logo.svg';
import './App.css';

class AddItem extends Component {
    constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    }
   render() {
        return (
          <form id="add-todo" onSubmit={this.handleSubmit}>
            <input type="text" required ref="newItem"/>
            <input type="submit" value="hit me" />
          </form>
        );
   }

   handleSubmit(e) {
    e.preventDefault();
     this.props.onAdd(this.refs.newItem.value);
   }

}

export default AddItem;

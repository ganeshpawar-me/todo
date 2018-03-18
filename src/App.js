import React, { Component } from 'react';
import TodoItem from './todoItem';
import AddItem from './addItem';
import logo from './logo.svg';
import './App.css';

class TodoComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
        todos: ['eat', 'sleep', 'study'],
      }
   }

   render() {
        var todos = this.state.todos;
        todos = todos.map(function (item, index) {
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete.bind(this)} />
            )
        }.bind(this))

        return (
          <div id="tod-list">
          <h1>Todos for today</h1>
            <div>
                <p>
                <ul>{todos}</ul>
                </p>
            </div>
            <AddItem onAdd={this.onAdd.bind(this)}/>
          </div>
        );
   }
    onDelete(item){
        var updatedTodos = this.state.todos.filter(function (value, index) {
            return item !== value
        });
        this.setState({
            todos: updatedTodos
        });
   }

   onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
   }
}

export default TodoComponent;

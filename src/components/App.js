import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { TodosListComponent } from './todos/todos-list.component';
import  EntryComponent   from './todos/todo-entry.component';

class App extends Component {
  render() {
    return (
      <div>
        <TodosListComponent/>
      </div>
    );
  }
}

export default App;

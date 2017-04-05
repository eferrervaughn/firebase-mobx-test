import React from 'react';
import {map} from 'lodash';
import { observer } from 'mobx-react';
import {todos} from '../../store/todos/todos';

@observer
export class TodosListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      todos.add(this.input.value)
    event.preventDefault();
  }

  del = (id) => {
    todos.del(id)
  };

  add = (name) => {
    todos.add(name)
  };

  increment = (id) => {
    todos.increment(id)
  };

  render() {
    // This makes it delete when its clicked on
    return (
      <div>
      <ul>
        {map(todos.json, (it, key) => (
          <li>{it[0]+" "+it[2]}
          <input type="button" onClick={this.del.bind(this, key)} key={key} value="delete"/>
          <input type="button" onClick={ () => {this.increment(key)}} value="+"/>
          </li>
          )
        )}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Pray" />
      </form>
      </div>
    )
  }
}

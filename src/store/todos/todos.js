import {observable, computed} from 'mobx';
import {Fb} from '../../firebase/firebase-store';
import {map, toJS} from 'mobx';

class Todos {
  // Creating a map for Todos, reacts to changes, additions and removals
  @observable todos = map({});

  constructor() {
    // the local Todos will be updated on creation and all changes
    Fb.todos.on('value', (snapshot) => {
      this.todos = snapshot.val();
    });
  }
  // If any change happend to the todos, this will automatically update the JSON
  @computed get json() {
    return toJS(this.todos);
  }
  // Takes in a name, gets a key and updates name name at child
  add = (name) => {
    const id = Fb.todos.push().key;
    this.update(id, name);
  };
  // Searches for id, then updates value
  update = (id,name) => {
    Fb.todos.update({[id]: {name}})
  };
  // deletes child at path of given ID
  del = (id) => {
    Fb.todos.child(id).remove();
  };
}

//Exports database ref that points at todos
const todos = new Todos();
export {todos};

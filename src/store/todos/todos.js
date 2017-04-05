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
  // Takes in arrays, gets a key and updates array at child
  add = (name, age) => {
    var postData = [
       name,
       age,
       0
    ];
    const id = Fb.todos.push().key;

    this.update(id, postData);
  };
  // Searches for id, then updates value, if you give update multiple places
  update = (id,postData) => {
    Fb.todos.update({[id]: postData});

  };
  // deletes child at path of given ID
  del = (id) => {
    Fb.todos.child(id).remove();
  };

  increment = (id) => {
    var childRef = Fb.todos.child(id);

    childRef.transaction((prays) => {
      if (prays[2]==0) {
        prays[2]++;
      }
      else {
        prays[2]++;
      }
      return prays;
    })

    childRef.once('value',(snapshot) => {
      console.log(snapshot.val()[2]);
    });
  }
}

//Exports database ref that points at todos
const todos = new Todos();
export {todos};

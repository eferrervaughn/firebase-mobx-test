import {todos} from './todos/todos';

const store = {
  todos
};

//makes a local copy of the database in the browser
window.store = store;

export {store};

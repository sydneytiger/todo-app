import { v4 as uuidv4} from 'uuid';
import { todoApi } from '../startup';
import actionVerbs from '../actionVerbs';

const updateTodoItem = (todo, cb) => dispatch => {
  const newTodo = {
    id: todo.id,
    title: todo.title,
    completed: !todo.completed
  }

  todoApi.put(`/todos/${todo.id}`, newTodo)
  .then(resp => {_toggleComplete(newTodo, dispatch); cb();},
  err => {_toggleComplete(newTodo, dispatch); cb();});
}

const _toggleComplete = (todo, dispatch) => {
  dispatch({
    type: actionVerbs.todos.update,
    payload: todo
  });
}

const deleteTodoItem = id => dispatch => {
  todoApi.delete(`/todos/${id}`)
    .then(resp => {
      _removeTodo(id, dispatch);
    }, err => {
      _removeTodo(id, dispatch);
    });
}

const _removeTodo = (id, dispatch) => {
  dispatch({
    type: actionVerbs.todos.delete,
    payload: id
  });
}

const addTodoItem = (title, clearInputCb, hideLoaderCb) => dispatch => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed:false
  };

  todoApi.post('/todos', newTodo)
  .then(
    resp => {
      dispatch({
        type: actionVerbs.todos.addSingle,
        payload: newTodo
      });
      clearInputCb();
      hideLoaderCb();
    }
  );
}

const loadTodoItems = cb => dispatch => {
  todoApi.get('/todos')
    .then(resp => {
      dispatch({
        type:actionVerbs.todos.addMulti,
        payload: resp.data
      });
      cb();
    },
    err => {
      console.log(err);
      cb();
    });
}

export {
  updateTodoItem,
  deleteTodoItem,
  addTodoItem,
  loadTodoItems
}
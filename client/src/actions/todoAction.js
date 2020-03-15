import { v4 as uuidv4} from 'uuid';
import { todoApi } from '../startup';
import actionVerbs from '../actionVerbs';
import { updateInputTitle, toggleLoader } from './addTodoAction';

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

const addTodoItem = title => dispatch => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed:false
  };
  dispatch(toggleLoader(true));
  todoApi.post('/todos', newTodo)
  .then(
    resp => {
      dispatch({
        type: actionVerbs.todos.addSingle,
        payload: newTodo
      });
      dispatch(toggleLoader(false));
      dispatch(updateInputTitle(''));
    }
  );
}

const loadTodoItems = () => dispatch => {
  dispatch({
    type:actionVerbs.loading.enable
  });
  todoApi.get('/todos')
    .then(resp => {
      dispatch({
        type:actionVerbs.todos.addMulti,
        payload: resp.data
      })
      dispatch({
        type:actionVerbs.loading.disable
      });
    },
    err => {
      console.log(err);
      dispatch({
        type:actionVerbs.loading.disable
      });
    });
}

export {
  updateTodoItem,
  deleteTodoItem,
  addTodoItem,
  loadTodoItems
}
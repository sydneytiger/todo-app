import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import todoReducer from './reducers/todoReducer';
import loadingReducer from './reducers/loadingReducer';
import addTodoReducer from './reducers/addTodoReducer';
import todoItemReducer from './reducers/todoItemReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  loading: loadingReducer,
  addTodo: addTodoReducer,
  todoItem: todoItemReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
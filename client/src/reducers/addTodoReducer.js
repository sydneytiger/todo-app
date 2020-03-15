import actionVerbs from '../actionVerbs';

const initalState = {
  inputedTitle: '',
  showLoader: false
}

const addTodoReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionVerbs.addTodo.input:
      return {...state, inputedTitle: action.payload};
    case actionVerbs.addTodo.showLoader:
      return {...state, showLoader: action.payload};
    default:
      return state;
  }
}

export default addTodoReducer;
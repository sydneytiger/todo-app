import actionVerbs from '../actionVerbs';

const todoItemReducer = (state, action) => {
  switch (action.type) {
    case actionVerbs.todoItem.showLoader:
      return { showLoader: action.payload };
    default:
      return { showLoader: false };
  }
}

export default todoItemReducer;
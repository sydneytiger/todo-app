import actionVerbs from '../actionVerbs'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionVerbs.todos.addSingle:
      return [action.payload, ...state];
    case actionVerbs.todos.addMulti:
        return [...action.payload, ...state];
    case actionVerbs.todos.delete:
      return [...state.filter(item => item.id !== action.payload )];
    case actionVerbs.todos.update:
      return [...state.map(m => {
        if(m.id === action.payload.id) {
          m.completed = action.payload.completed;
        }
        return m;
      })]; 
    default:
      return state;
  }
}

export default todosReducer;
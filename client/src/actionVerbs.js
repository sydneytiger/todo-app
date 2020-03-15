const actionVerbs = {
  todos: {
    addSingle: 'ADD_SINGAL_TODO_ITEM',
    addMulti: 'ADD_MULTI_TODO_ITEM',
    delete: 'DELETE_TODO_ITEM',
    update: 'UPDATE_TODO_ITEM'
  },
  loading: {
    enable: 'ENABLE_LOADING',
    disable: 'DISABLE_LOADING'
  },
  addTodo: {
    input: 'INPUT_TITLE',
    showLoader: 'SHOW_ADDTODO_LOADER',
  },
  todoItem: {
    showLoader: 'SHOW_TODOITEM_LOADER',
  }
}

export default actionVerbs;
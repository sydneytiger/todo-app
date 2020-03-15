import actionVerbs from '../actionVerbs';

const updateInputTitle = title => {
  return {
    type: actionVerbs.addTodo.input,
    payload: title
  }
}

const toggleLoader = isShow => {
  return {
    type: actionVerbs.addTodo.showLoader,
    payload: isShow
  }
}

export { updateInputTitle, toggleLoader}
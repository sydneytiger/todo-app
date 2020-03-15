import actionVerbs from '../actionVerbs';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionVerbs.loading.enable:
      return true;
    default:
      return false;
  }
}

export default loadingReducer;
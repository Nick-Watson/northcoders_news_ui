import * as types from '../actions/types';

// good template for data fetching
const initialState = {
  list: [],
  loading: false,
  error: null
};

function articlesReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    newState.list = action.data;
    newState.loading = false;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}

export default articlesReducer;

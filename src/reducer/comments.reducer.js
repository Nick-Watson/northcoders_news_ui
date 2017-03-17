import * as types from '../actions/types';

const initialState = {
  comments: [],
  loading: false,
  error: null
};

function commentsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);

  if (action.type === types.FETCH_COMMENTS_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_COMMENTS_SUCCESS) {
    newState.comments = normaliseData(action.data);
    newState.loading = false;
  }

  if (action.type === types.FETCH_COMMENTS_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  return newState;
}

function normaliseData (data) {
  return data.reduce((acc,item) => {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getTopComments (state) {
  return Object.keys(state.comments.comments).reduce(function (acc, commentId) {
    return acc.concat(state.comments.comments[commentId]);
  }, []).sort(function (a, b) {
    return b.votes - a.votes;
  });
}

export default commentsReducer;
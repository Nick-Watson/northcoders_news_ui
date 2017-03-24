import * as types from '../actions/types';

const initialState = {
  comments: {},
  textInput: '',
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

  if (action.type === types.SEND_COMMENT_VOTE_SUCCESS) {
    const direction = action.data.direction;
    const comment = action.data.commentId;
    
    newState.comments[comment] = Object.assign({}, newState.comments[comment]);
    if (direction === 'up') newState.comments[comment].votes++;
    if (direction === 'down') newState.comments[comment].votes--;
    newState.loading = false;
  }

  if (action.type === types.UPDATE_TEXT_INPUT) {
    newState.textInput = action.data;
  }

  if (action.type === types.POST_COMMENT_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.POST_COMMENT_SUCCESS) {
    console.log(action.data);
    newState.comments = Object.assign({}, newState.comments);
    newState.comments[action.data._id] = action.data;
    newState.loading = false;
  }

  if (action.type === types.DELETE_COMMENT_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.DELETE_COMMENT_SUCCESS) {
    newState.comments = Object.assign({}, newState.comments);
    delete newState.comments[action.data];
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
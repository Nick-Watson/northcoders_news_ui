import * as types from '../actions/types';

// good template for data fetching
const initialState = {
  list: [],
  byId: {},
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
    newState.byId = normaliseData(action.data);
    newState.loading = false;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }

  if (action.type === types.SEND_VOTE_SUCCESS) {
    const id = action.data._id;
    const newArticle = action.data;
    
    newState.byId[id] = Object.assign({}, newState.byId[id]);
    newState.byId[id] = newArticle;
    newState.loading = false;
  }

  if (action.type === types.SEND_VOTE_ERROR) {
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

export function getTopArticles (state, num) {
  return Object.keys(state.articles.byId).reduce(function (acc, id) {
    return acc.concat(state.articles.byId[id]);
  }, []).sort(function (a, b) {
    return b.votes - a.votes;
  }).slice(0, num);
}

export default articlesReducer;

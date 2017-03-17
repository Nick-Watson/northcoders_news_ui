import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

// action creator for fetching articles
export function fetchArticles (topic) {
  let url = `${ROOT}`;
  if (topic) url += `/topics/${topic}/articles`;
  else url += '/articles';

  return function (dispatch) {
    // thunk action
      // wraps async function
    dispatch(fetchArticlesRequest());
    axios
      // 3 stages of API request
        // 1: make request - need spinner while waiting?
        // 2: succcessful response
        // 3: error
      .get(url)
      .then(res => {
        // do something with response
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        // do something when error
        dispatch(fetchArticlesError(err));
      });
  };
}
// keep object keys the same name for consistency
export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError (err) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    data: err
  };
}

export function fetchTopics () {
  return function (dispatch) {
    // thunk action
      // wraps async function
    dispatch(fetchTopicsRequest());
    axios
      // 3 stages of API request
        // 1: make request - need spinner while waiting?
        // 2: succcessful response
        // 3: error
      .get(`${ROOT}/topics`)
      .then(res => {
        // do something with response
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(err => {
        // do something when error
        dispatch(fetchTopicsError(err));
      });
  };
}
// keep object keys the same name for consistency
export function fetchTopicsRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}

export function fetchTopicsSuccess (topics) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    data: topics
  };
}

export function fetchTopicsError (err) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    data: err
  };
}

export function fetchArticleComments (id) {
    return function (dispatch) {
    // thunk action
      // wraps async function
    dispatch(fetchArticleCommentsRequest());
    axios
      // 3 stages of API request
        // 1: make request - need spinner while waiting?
        // 2: succcessful response
        // 3: error
      .get(`${ROOT}/articles/${id}/comments`)
      .then(res => {
        // do something with response
        dispatch(fetchArticleCommentsSuccess(res.data.comments));
      })
      .catch(err => {
        // do something when error
        dispatch(fetchArticleCommentsError(err));
      });
  };
}

export function fetchArticleCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchArticleCommentsSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}

export function fetchArticleCommentsError (err) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    data: err
  };
}
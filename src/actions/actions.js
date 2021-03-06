import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

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
    dispatch(fetchTopicsRequest());
    axios
      .get(`${ROOT}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(err => {
        dispatch(fetchTopicsError(err));
      });
  };
}

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
    dispatch(fetchArticleCommentsRequest());
    axios
      .get(`${ROOT}/articles/${id}/comments`)
      .then(res => {
        dispatch(fetchArticleCommentsSuccess(res.data.comments));
      })
      .catch(err => {
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

export function sendVote (articleId, direction) {
  return function (dispatch) {
      dispatch(sendVoteRequest());
      axios
        .put(`${ROOT}/articles/${articleId}?vote=${direction}`)
        .then(res => {
          dispatch(sendVoteSuccess(res));
        })
        .catch(err => {
          dispatch(sendVoteError(err));
        });
    };
}

export function sendVoteRequest () {
  return {
    type: types.SEND_VOTE_REQUEST
  };
}

export function sendVoteSuccess (article) {
  return {
    type: types.SEND_VOTE_SUCCESS,
    data: article.data
  };
}

export function sendVoteError (err) {
  return {
    type: types.SEND_VOTE_ERROR,
    data: err
  };
}

export function sendCommentVote (commentId, direction) {
  return function (dispatch) {
      dispatch(sendCommentVoteRequest());
      axios
        .put(`${ROOT}/comments/${commentId}?vote=${direction}`)
        .then(() => {
          dispatch(sendCommentVoteSuccess(commentId,direction));
        })
        .catch(err => {
          dispatch(sendCommentVoteError(err));
        });
    };
}

export function sendCommentVoteRequest () {
  return {
    type: types.SEND_COMMENT_VOTE_REQUEST
  };
}

export function sendCommentVoteSuccess (commentId,direction) {
  return {
    type: types.SEND_COMMENT_VOTE_SUCCESS,
    data: {direction:direction, commentId:commentId}
  };
}

export function sendCommentVoteError (err) {
  return {
    type: types.SEND_COMMENT_VOTE_ERROR,
    data: err
  };
}

export function updateTextInput (str) {
  return {
    type: types.UPDATE_TEXT_INPUT,
    data: str
  };
}

export function postComment (articleId, comment) {
  return function (dispatch) {
      dispatch(postCommentRequest());
      axios
        .post(`${ROOT}/articles/${articleId}/comments`,{
          'comment': comment
        })
        .then((res) => {
          dispatch(postCommentSuccess(res));
        })
        .catch(err => {
          dispatch(postCommentError(err));
        });
    };
}

export function postCommentRequest () {
  return {
    type: types.POST_COMMENT_REQUEST
  };
}

export function postCommentSuccess (res) {
  return {
    type: types.POST_COMMENT_SUCCESS,
    data: res.data.comment
  };
}

export function postCommentError (err) {
  return {
    type: types.POST_COMMENT_ERROR,
    data: err
  };
}

export function deleteComment (commentId) {
  return function (dispatch) {
      dispatch(deleteCommentRequest());
      axios
        .delete(`${ROOT}/comments/${commentId}`)
        .then(() => {
          dispatch(deleteCommentSuccess(commentId));
        })
        .catch(err => {
          dispatch(deleteCommentError(err));
        });
    };
}

export function deleteCommentRequest () {
  return {
    type: types.DELETE_COMMENT_REQUEST
  };
}

export function deleteCommentSuccess (commentId) {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    data: commentId
  };
}

export function deleteCommentError (err) {
  return {
    type: types.DELETE_COMMENT_ERROR,
    data: err
  };
}


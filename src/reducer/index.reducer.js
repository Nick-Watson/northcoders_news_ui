import {combineReducers} from 'redux';

import articlesReducer from './articles.reducer';
import topicsReducer from './topics.reducer';
import commentsReducer from './comments.reducer';

export default combineReducers({
  articles: articlesReducer,
  topics: topicsReducer,
  comments: commentsReducer
});
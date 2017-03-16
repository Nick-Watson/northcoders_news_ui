import {combineReducers} from 'redux'

import articlesReducer from './articles.reducer'
import topicsReducer from './topics.reducer'

export default combineReducers({
  articles: articlesReducer,
  topics: topicsReducer
})
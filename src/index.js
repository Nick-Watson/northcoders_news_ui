import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './css/bulma.css';
import './css/font-awesome.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducer/index.reducer';
import ArticlePage from './components/ArticlePage';

const logger = createLogger()

// second argument takes middleware
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ArticleList} />
        <Route path='/:topic' component={ArticleList} />
        <Route path='/article/:article_ID' component={ArticlePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));

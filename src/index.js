import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import FrontPage from './components/FrontPage';
import reducer from './reducer/index.reducer';
import ArticlePage from './components/ArticlePage';
import CommentsList from './components/CommentsList';

const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={FrontPage} />
        <Route path='/:topic' component={FrontPage} />
        <Route path='/:topic/:articleId' component={ArticlePage}>
          <Route path='/:topic/:articleId/comments' component={CommentsList} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));

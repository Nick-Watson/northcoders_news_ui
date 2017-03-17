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
import FrontPage from './components/FrontPage';
import reducer from './reducer/index.reducer';
import ArticlePage from './components/ArticlePage';

const logger = createLogger()

// second argument takes middleware
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={FrontPage} />
        <Route path='/:topic' component={FrontPage} />
        <Route path='/:topic/:articleId' component={ArticlePage}>
          {/*<Route path='/:topic/:articleId/comments' component={CommentPage}*/}
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));

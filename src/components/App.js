import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import {fetchArticles} from '../actions/actions';
import NavBar from './NavBar';
import '../css/bulma.css';
import '../css/main.css';
import '../css/font-awesome.css';

class App extends Component {
  
  componentDidMount () {
    this.props.fetchArticles(this.props.params.topic);
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params.topic !== this.props.params.topic) {
      this.props.fetchArticles(nextProps.params.topic);
    }
  }
  
  render () {
    return (
      <div>
        <section className="hero is-danger is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Northcoders
              </h1>
              <h2 className="subtitle">
                News
              </h2>
            </div>
          </div>
        <NavBar fetchArticles={this.props.fetchArticles} />
        </section>
        <div className="container">
        {this.props.children}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: function (topic) {
      dispatch(fetchArticles(topic));
    }
  };
}

App.propTypes = {
    fetchArticles: React.PropTypes.func,
    params: React.PropTypes.object,
    children: React.PropTypes.object
};

export default connect(null, mapDispatchToProps)(App);

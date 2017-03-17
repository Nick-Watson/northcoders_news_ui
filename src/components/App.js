import React from 'react';
import {connect} from 'react-redux';
import {fetchArticles} from '../actions/actions';
import NavBar from './NavBar';
import '../css/bulma.css';


const App = React.createClass({
  componentDidMount () {
    this.props.fetchArticles(this.props.params.topic);
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.params.topic !== this.props.params.topic) {
      this.props.fetchArticles(nextProps.params.topic);
    }
  },
  render: function () {
    return (
      <div>
        <section className="hero is-primary">
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
        </section>
        <NavBar fetchArticles={this.props.fetchArticles} />
        <div className="container">
        {this.props.children}
        </div>
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: function (topic) {
      dispatch(fetchArticles(topic));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);

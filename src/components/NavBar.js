import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/actions';
import { Link } from 'react-router';
import '../css/bulma.css';

class NavBar extends Component {

  componentDidMount () {
    this.props.getTopics();
  }

  render () {
    return (
        <nav className='tabs is-medium is-right'>
          <ul>
            <li>
              <Link to='/'>All</Link>
            </li>
            {this.props
              .topics
              .map((topic, i) =>
                <li key={i}>
                  <Link key={i} to={'/' + topic.slug}>{topic.title}</Link>
                </li>
              )}
          </ul>
        </nav>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return {
    getTopics: () => {
      dispatch(fetchTopics());
    },
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.topics.sort((a, b) => b.slug < a.slug)

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

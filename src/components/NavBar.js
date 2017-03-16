import React from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/actions';
import { Link } from 'react-router';
import '../css/bulma.css';

const NavBar = React.createClass({
  componentDidMount () {
    this.props.getTopics();
  },
  render: function () {
    return (
      <div>
        <nav className='tabs is-medium is-right'>
          <ul>
            <li>
              <Link to='/'>All</Link>
            </li>
            {this.props
              .topics
              .sort((a, b) => b.slug < a.slug)
              .map((topic, i) =>
                <li>
                  <Link key={i} to={topic.slug}>{topic.title}</Link>
                </li>
              )}
          </ul>
        </nav>
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getTopics: () => {
      dispatch(fetchTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.topics
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

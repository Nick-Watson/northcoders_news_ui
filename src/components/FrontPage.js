import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleList from './ArticleList';
import {getTopArticles} from '../reducer/articles.reducer';

const FrontPage = React.createClass({
  render () {
    if (this.props.loading) return <p>Loading...</p>
    return (
      <div id='FrontPage'>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
});

FrontPage.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  articles: React.PropTypes.array.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchArticles());
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: getTopArticles(state, 20),
    loading: state.articles.loading
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleList from './ArticleList';
import {getTopArticles} from '../reducer/articles.reducer';
import { sendVote } from '../actions/actions';

class FrontPage extends Component {
  
  render () {
    if (this.props.loading) return <div className='spinner'><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i><span className="sr-only">Loading...</span></div>;
    return (
      <div id='FrontPage'>
        <ArticleList articles={this.props.articles} sendVote={this.props.sendVote} title={this.props.params.topic}/>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchArticles());
    },
    sendVote: function (articleId, direction) {
      dispatch(sendVote(articleId, direction));
    }

  };
}

function mapStateToProps (state) {
  return {
    articles: getTopArticles(state, 50),
    loading: state.articles.loading
  };
}

FrontPage.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  articles: React.PropTypes.array.isRequired,
  sendVote: React.PropTypes.func.isRequired,
  params: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);

import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/actions';
import ArticleCard from './ArticleCard';
import {Link} from 'react-router';

const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles();
  },
  render () {
    return (
      <div id='ArticleList'>
        {this.props
          .articles
          .filter((article) => {
            if (!this.props.params.topic) return true;
            return article.belongs_to === this.props.params.topic
          })
          .map((article, i) =>
            <ArticleCard key={i} title={article.title} votes={article.votes} link={article._id}/>
          )}
      
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchArticles());
    }
  };
}

function mapStateToProps (state, ownProps) {
  return {
    articles: state.articles.list.sort((a, b) => b.votes - a.votes)

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
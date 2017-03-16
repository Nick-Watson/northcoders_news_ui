import React from 'react';
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/actions'
import ArticleCard from './ArticleCard'
import {Link} from 'react-router'

const ArticleList = React.createClass({
  componentDidMount() {
    this.props.getArticles()
  },
  render() {
    return (
      <div id='ArticleList'>
        {this.props
          .articles.articles
          .sort((a, b) => b.votes - a.votes)
          .map((article, i) =>
            <Link key={i} to={article._id}><ArticleCard title={article.title} votes={article.votes} /></Link>
          )}
        Articles here
      </div>
    );
  }
});

function mapDispatchToProps(dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchArticles())
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
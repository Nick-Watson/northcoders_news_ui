import React from 'react';
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/actions'
import ArticleCard from './ArticleCard'
import {Link} from 'react-router'

const TopicPage = React.createClass({
  componentDidMount() {
    this.props.getArticles()
  },
  render() {
    return (
      <div id='ArticleList'>
        {this.props
          .articles.articles
          //.filter(article => article.belongs_to === this.props.params.topic)
          .map((article, i) =>{
            <Link to={article._id}><ArticleCard key={i} title={article.title} votes={article.votes} /></Link>
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
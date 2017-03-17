import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import {fetchArticleComments} from '../actions/actions';
import {getTopComments} from '../reducer/comments.reducer';

import Article from './Article';

class ArticlePage extends Component {

    componentDidMount () {
    this.props.fetchComments(this.props.params.articleId);
    }
    render() {
        if (this.props.loading) return (<p>Loading..</p>);
        else {
            const article = this.props.byId[this.props.params.articleId];
            return (
                <div id="ArticlePage">
                    <Article 
                    {...article}
                    comments={this.props.comments}
                    />
                    
                </div>
            )
        }
    }
}

function mapStateToProps (state) {
    return {
        loading: state.articles.loading,
        byId: state.articles.byId,
        comments: getTopComments(state)
    };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchComments: function (id) {
      dispatch(fetchArticleComments(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
import React from 'react';
import  {Component} from 'react';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import {sendCommentVote} from '../actions/actions';
import {getTopComments} from '../reducer/comments.reducer';
import CommentForm from './CommentForm';


class CommentsList extends Component {

    render () {
        return (
            <div className=''>
                <CommentForm articleId={this.props.params.articleId}/>
                {this.props.comments.map((comment, i) => {
                    return (
                        <CommentCard 
                        key={i}
                        {...comment}
                        sendCommentVote={this.props.sendCommentVote}
                        />
                    );
                })}
            </div>
        );
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
    sendCommentVote: function (commentid, direction) {
        dispatch(sendCommentVote (commentid, direction));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
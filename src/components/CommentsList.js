import React from 'react';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';
import {sendCommentVote} from '../actions/actions';
import {getTopComments} from '../reducer/comments.reducer';
import CommentForm from './CommentForm';

const CommentsList = function (props) {

        return (
            <div className='columns'>
                <div className='column is-12'>
                    <CommentForm articleId={props.params.articleId}/>
                    {props.comments.map((comment, i) => {
                        return (
                            <CommentCard 
                            key={i}
                            {...comment}
                            sendCommentVote={props.sendCommentVote}
                            />
                        );
                    })}
                </div>
            </div>
        );
};

function mapStateToProps (state) {
    return {
        loading: state.comments.loading,
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

CommentsList.propTypes = {
  sendCommentVote: React.PropTypes.func.isRequired,
  comments: React.PropTypes.array.isRequired,
  params: React.PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
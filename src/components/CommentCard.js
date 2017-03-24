import React from 'react';
import { connect } from 'react-redux';
import {deleteComment} from '../actions/actions';

import '../css/main.css';

const CommentCard = function (props) {

    function upVote () {
        props.sendCommentVote(props._id, 'up');
    }

    function downVote () {
        props.sendCommentVote(props._id, 'down');
    }

    function deleteComment () {
        props.deleteComment(props._id);
    }

   const canDelete = props.created_by === 'northcoder' ? <button onClick={deleteComment}>Delete</button> : '';
    return (
        <div className='box'>

            <article className='media'>
                <div className='media-left'>
                    <div className="votes-container">
                        <div>
                            <div><i onClick={upVote} className="fa fa-arrow-up" aria-hidden="true"></i></div>
                            <div id='vote-number'>{props.votes}</div>
                            <div><i onClick={downVote} className="fa fa-arrow-down" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
                <div className='media-content'>
                    <div className='content'>
                        {props.created_by}
                    </div>
                    {props.body}
                    {canDelete}
                </div>
            </article>

        </div>
    );
};

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: function (commentId) {
        dispatch(deleteComment(commentId));
    }
  };
}

export default connect(null, mapDispatchToProps)(CommentCard);
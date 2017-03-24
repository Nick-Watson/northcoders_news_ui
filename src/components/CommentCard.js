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

   const canDelete = props.created_by === 'northcoder' ? <button onClick={deleteComment} id='button'>Delete</button> : '';
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
                        <h4 id='heading'>{props.created_by}</h4>
                    </div>
                    {props.body}
                </div>
            </article>

            <div id='delete-button'>{canDelete}</div>
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
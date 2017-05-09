import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/actions';

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

    const canDelete = props.created_by === 'northcoder' ? <i onClick={deleteComment} className="fa fa-trash-o fa-2x" aria-hidden="true" id='red-icon'></i> : '';

    return (
        <div className='box'>
           
            <div className="columns is-mobile">
                <div className="column is-1" id='flex-centered'>
                    <div className="votes-container">
                        <i onClick={upVote} className="fa fa-arrow-up" aria-hidden="true"></i>
                        <p id='vote-number'>{props.votes}</p>
                        <i onClick={downVote} className="fa fa-arrow-down" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="column" id='flex-centered'>
                    <h4 id='heading'>{props.created_by}</h4>
                    <div>{props.body}</div>
                </div>
                <div className="column is-1" id='flex-centered'>
                    {canDelete}
                </div>
            </div>

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

CommentCard.propTypes = {
    deleteComment: React.PropTypes.func.isRequired,
    _id: React.PropTypes.string.isRequired,
    created_by: React.PropTypes.string.isRequired,
    votes: React.PropTypes.number.isRequired,
    body: React.PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(CommentCard);



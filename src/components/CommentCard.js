import React from 'react';
import '../css/main.css';

const CommentCard = function (props) {

    function upVote() {
        props.sendCommentVote(props._id, 'up');
    }

    function downVote() {
        props.sendCommentVote(props._id, 'down');
    }

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
                </div>
            </article>

        </div>
    );
};

export default CommentCard;
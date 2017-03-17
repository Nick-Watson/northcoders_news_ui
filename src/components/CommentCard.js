import React from 'react';
// import  from '';
// import  from '';
import '../css/main.css';

function commentCard(props) {
    return (
        <article className="message is-warning is-small">
            <div className="message-header">
                <p><span><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    {props.votes}</span><span id='author'>{props.created_by}</span></p>
            </div>
            <div className="message-body">
                {props.body}
            </div>
        </article>
    );
}

export default commentCard;
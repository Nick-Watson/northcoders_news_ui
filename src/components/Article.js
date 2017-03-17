import React from 'react';
import CommentsList from './CommentsList';
import '../css/font-awesome.css';


function Article (props) {
    return (
        <div className='container'>
            <article className="message is-success">
                <div className="message-body">
                    <h1 id='title'className="title is-2">{props.title}</h1>
                    {props.body}
                </div>
            </article>
            <CommentsList comments={props.comments} />
        </div>
    );
}

Article.propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    comments: React.PropTypes.string.isRequired
};

export default Article;
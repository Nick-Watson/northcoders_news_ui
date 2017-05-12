import React from 'react';
import { Link } from 'react-router';

const Article = function (props) {
    let commentsLink = '/comments';
    let commentsLinkText = 'Show ' + props.comments.length + ' comments';
    if (props.children === true) {
        commentsLink = '';
        commentsLinkText = 'Hide comments';
    }
    return (
        <div className='box'>
            <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        {props.title}
                    </h1>
                    <p>{'Submitted by ' + props.created_by}</p>
                    <h2 className="subtitle" id='article-body'>
                        <div >{props.body}</div>
                    </h2>
                    <p id='comment-link' className='level-left'><Link to={'/' + props.belongs_to + '/' + props._id + commentsLink}>{commentsLinkText}</Link></p>
                </div>
            </div>
            </section>
        </div>
    );
};

Article.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    belongs_to: React.PropTypes.string,
    _id: React.PropTypes.string,
    comments: React.PropTypes.array,
    created_by: React.PropTypes.string,
    children: React.PropTypes.bool
};

export default Article;




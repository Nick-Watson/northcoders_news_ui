import React from 'react';
import { Link } from 'react-router';

const Article = function (props) {
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
                    <p id='comment-link' className='level-left'><Link to={'/' + props.belongs_to + '/' + props._id + '/comments'}>{'Show ' + props.comments.length + ' comments'}</Link></p>
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
    created_by: React.PropTypes.string
};

export default Article;




import React from 'react';
import {Link} from 'react-router';

import '../css/font-awesome.css';


const Article = function (props) {
    return (
        <div className='box'>
            <article className="media">
                <div className="section">
                    <h1 id='title' className="title is-2">{props.title}</h1>
                    {props.body}
                <p id='comment-link'><Link to={'/' + props.belongs_to + '/' + props._id + '/comments'}>{'' + props.comments.length + ' Comments'}</Link></p>
                </div>
            </article>
        </div>
    );
};

Article.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    belongs_to: React.PropTypes.string,
    _id: React.PropTypes.string,
    comments: React.PropTypes.array,
};

export default Article;


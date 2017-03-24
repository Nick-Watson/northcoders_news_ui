import React from 'react';
import {Link} from 'react-router';

import '../css/font-awesome.css';


const Article = function (props) {
    return (
        <div className=''>
            <article className="message">
                <div className="section">
                    <h1 id='title' className="title is-2">{props.title}</h1>
                    {props.body}
                <p id='comment-link'><Link to={'/' + props.belongs_to + '/' + props._id + '/comments'}>Comments</Link></p>
                </div>
            </article>
        </div>
    );
};

Article.propTypes = {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
};

export default Article;
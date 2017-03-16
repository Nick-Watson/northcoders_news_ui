import React from 'react';
// import  from '';
// import  from '';
import '../css/bulma.css';

function ArticlePage (props) {
    return (
        <div className='container'>
            <h1>{props.params.article_ID}</h1>
        </div>
    );
}

export default ArticlePage;
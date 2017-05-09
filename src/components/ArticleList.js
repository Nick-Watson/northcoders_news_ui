import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = function (props) {
    const heading = props.title ? <h1 className ='title is-2' id='topic-heading'>{props.title.toUpperCase()}</h1> : '';

    return (
        <div id="ArticleList">
            {heading}
            {props.articles.map((article, i) => {
                return <ArticleCard 
                    key={i} 
                    title={article.title} 
                    votes={article.votes} 
                    id={article._id}
                    topic={article.belongs_to}
                    sendVote={props.sendVote}
                    comments={article.comments}
                />;}
            )}
        </div>
    );
};

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired,
    title: React.PropTypes.string,
    sendVote: React.PropTypes.func.isRequired
};

export default ArticleList;
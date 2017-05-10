import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = function (props) {
    const heading = props.title ? createBanner(props.title) : '';

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

function createBanner (theme) {
    return <div className='section' id={`topic-heading-container-${theme}`}><h1 className ='title is-2' id='topic-heading'>{theme.toUpperCase()}</h1></div>;
}

export default ArticleList;
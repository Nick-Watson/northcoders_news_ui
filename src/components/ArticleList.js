import React from 'react';
import ArticleCard from './ArticleCard';
import '../css/bulma.css';


const ArticleList = function (props) {
    const heading = props.title ? <h1 className ='title is-1' id='heading'>{props.title.toUpperCase()}</h1> : '';

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
                />;}
            )}
        </div>
    );
}

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired
};

export default ArticleList;
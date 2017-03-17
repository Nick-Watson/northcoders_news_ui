import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList (props) {
    return (
        <div id="ArticleList">
            {props.articles.map((article, i) => {
                return <ArticleCard 
                    key={i} 
                    title={article.title} 
                    votes={article.votes} 
                    id={article._id}
                    topic={article.belongs_to}
                />}
            )}
        </div>
    );
}

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired
}

export default ArticleList;
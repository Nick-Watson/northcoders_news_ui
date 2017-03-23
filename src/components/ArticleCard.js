import React from 'react';
import '../css/font-awesome.css';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <div className="votes-container">
            <div>
              <div><i className="fa fa-arrow-up" aria-hidden="true"></i></div>
              <div><i className="fa fa-arrow-down" aria-hidden="true"></i></div>
            </div>
            <div id='vote-number'>{props.votes}</div>
          </div>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/${props.topic}/${props.id}`}>{props.title}</Link>
          </div>
            <Link to={`/${props.topic}/${props.id}/comments`}>Comments</Link>
        </div>
      </article>

    </div>
  );
};

export default ArticleCard;

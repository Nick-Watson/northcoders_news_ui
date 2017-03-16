import React from 'react';
import '../css/font-awesome.css';
import {Link} from 'react-router';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={'article/' + props.link}>{props.title}</Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;

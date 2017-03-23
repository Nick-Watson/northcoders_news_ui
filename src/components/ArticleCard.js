import React from 'react';
import '../css/font-awesome.css';
import {Link} from 'react-router';
import '../css/main.css';
import '../css/bulma.css';


const ArticleCard = function (props) {
  function upVote () {
    props.sendVote(props.id, 'up');
  } 
  
  function downVote () {
    props.sendVote(props.id, 'down');
  } 

  return (
    <div className='box'>
      
      <article className='media'>
        <div className='media-left'>
          <div className="votes-container">
            <div>
              <div><i onClick={upVote} className="fa fa-arrow-up" aria-hidden="true"></i></div>
              <div id='vote-number'>{props.votes}</div>
              <div><i onClick={downVote}className="fa fa-arrow-down" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to={`/${props.topic}/${props.id}`} id='is-title'><h4 className="title is-4">{props.title}</h4></Link>
          </div>
            <Link to={`/${props.topic}/${props.id}/comments`}>Comments</Link>
        </div>
      </article>

    </div>
  );
};


export default ArticleCard;

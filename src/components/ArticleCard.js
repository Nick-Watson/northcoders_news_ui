import React from 'react';
import '../css/font-awesome.css';
import { Link } from 'react-router';
import '../css/main.css';
import '../css/bulma.css';


const ArticleCard = function (props) {
  function upVote() {
    props.sendVote(props.id, 'up');
  }

  function downVote() {
    props.sendVote(props.id, 'down');
  }

  return (
    <div className='box'>

      <div className="columns is-mobile">
        <div className="column is-1" id='flex-centered'>
          <div className="votes-container">
            <i onClick={upVote} className="fa fa-arrow-up" aria-hidden="true"></i>
            <p id='vote-number'>{props.votes}</p>
            <i onClick={downVote} className="fa fa-arrow-down" aria-hidden="true"></i>
          </div>
        </div>
        <div className="column" id='flex-centered-between'>
          <Link to={`/${props.topic}/${props.id}`} id='is-title'><h4 className="title is-4">{props.title}</h4></Link>
          <Link to={`/${props.topic}/${props.id}/comments`}>{'Comments'}</Link>
        </div>
      </div>

    </div>
  );
};


export default ArticleCard;


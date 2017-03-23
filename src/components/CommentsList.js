import React from 'react';
import  {Component} from 'react';
import CommentCard from './CommentCard';
import { connect } from 'react-redux';

import {fetchArticleComments} from '../actions/actions';
import {getTopComments} from '../reducer/comments.reducer';

// import  from '';
// import '';

class CommentsList extends Component {

    render () {
        return (
            <div className=''>
                {this.props.comments.map((comment, i) => {
                    return (
                        <CommentCard 
                        key={i}
                        {...comment}
                        />
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        loading: state.articles.loading,
        byId: state.articles.byId,
        comments: getTopComments(state)
    };
}

// function mapDispatchToProps (dispatch) {
//   return {
//     fetchComments: function (id) {
//       dispatch(fetchArticleComments(id));
//     }
//   };
// }

export default connect(mapStateToProps)(CommentsList);
import React from 'react';
import  {Component} from 'react';
import CommentCard from './CommentCard'

// import  from '';
// import '';

class CommentsList extends Component {

    render () {
        return (
            <div className=''>
                {this.props.comments.map((comment) => {
                    return (
                        <CommentCard 
                        {...comment}
                        />
                    )
                })}
            </div>
        );
    }
}

export default CommentsList;
import React from 'react';
import { connect } from 'react-redux';
import '../css/bulma.css';
import {updateTextInput} from '../actions/actions';
import {postComment} from '../actions/actions';

function CommentForm (props) {
    return (
        <div className=''>
            <form className='form' onSubmit={handleSubmit}>
                <textarea
                    id='text-box'
                    type='text'
                    placeholder=' What do you think?'
                    onChange={handleChange}
                    value={props.textInput}
                />
                <input id='button' className="button is-danger" type='submit' value='Post' />
            </form>
        </div>
    );

function handleChange (e) {
    props.updateTextInput(e.target.value);
}

function handleSubmit (e) {
    e.preventDefault();
    if (props.textInput) props.postComment(props.articleId, props.textInput);
}

}

function mapStateToProps (state) {
    return {
        loading: state.comments.loading,
        textInput: state.comments.textInput
    };

}

function mapDispatchToProps (dispatch) {
  return {
    updateTextInput: function (e) {
        dispatch(updateTextInput(e));
    },
    postComment: function (articleId,comment) {
        dispatch(postComment(articleId, comment));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
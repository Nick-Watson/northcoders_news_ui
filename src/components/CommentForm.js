import React from 'react';
import { connect } from 'react-redux';
import {updateTextInput} from '../actions/actions';
import {postComment} from '../actions/actions';

const CommentForm = function (props) {
    return (
        <div className='box'>
            <form className='form' id='comment-form'onSubmit={handleSubmit}>
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
};

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

CommentForm.propTypes = {
    textInput: React.PropTypes.string,
    postComment: React.PropTypes.func,
    articleId: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
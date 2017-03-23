import React from 'react';
import '../css/bulma.css';

function CommentForm(props) {
    return (
        <div className='form'>
            <form className='is-right'>
                <input
                    className='inputtext'
                    type='text'
                    placeholder='What you sayin?...'
                    value={props.formText}
                    onChange={props.formChange}
                />
                <input className='inputsubmit' type='submit' value='Post' />
            </form>
        </div>
    );
}

export default CommentForm;
import { expect } from 'chai';
import articlesReducer from '../src/reducer/articles.reducer.js';
import commentsReducer from '../src/reducer/comments.reducer.js';
import * as actions from '../src/actions/actions';

describe('sendArticleVote', () => {
    const article = {data : { _id: 123, votes: 5 }};
    const action = actions.sendVoteSuccess(article);
    const initialState = {
        byId: {
            123: { _id: 123, votes: 2 }
        },
        loading: true
    };

    it('updates vote of article in the state', () => {
        let actual = articlesReducer(initialState, action);
        let expected = {
            byId: {
                123: { _id: 123, votes: 5 }
            },
            loading: false
        };

        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = articlesReducer(initialState, action);
        expect(newState).to.not.equal(initialState);
    }); 

});

describe('sendCommentVote', () => {
    const comment = { _id: 123};
    const action = actions.sendCommentVoteSuccess(comment._id, 'down');
    const initialState = {
        comments: {
            123: { votes: 2 }
        },
        loading: true
    };


    it('updates vote of comment in the state', () => {
        let actual = commentsReducer(initialState, action);
        let expected = {
            comments: {
                123: { votes: 1  }
            },
            loading: false
        };

        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = commentsReducer(initialState, action);
        expect(newState).to.not.equal(initialState);
    }); 

});

describe('updateTextInput', () => {
    const action = actions.updateTextInput('s');
    const action2 = actions.updateTextInput('st');
    const initalState = {
        textInput : ''
    };

    it('it updates textInput in the state', () => {
        const expected = {textInput: 'st'};
        const actual = commentsReducer(initalState, action);
        const actual2 = commentsReducer(actual, action2);
        expect(actual2).to.eql(expected);
    });
});

describe('postComment', () => {
    const initalState = {comments:{}, loading: true};
    const action = actions.postCommentSuccess({data:{comment: {_id:'123', body: 'hello'}}});
    
    it('updates the comments with the new comment', () => {
        let actual = commentsReducer(initalState, action) ;
        let expected = {comments:{'123' : {_id:'123', body: 'hello'}}, 'textInput': '', loading: false} ;
        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = commentsReducer(initalState, action);
        expect(newState).to.not.equal(initalState);
    }); 
    
});

describe('deleteComment', () => {
    const initalState = {comments:{'1':{}}, loading: true};
    const action = actions.deleteCommentSuccess('1');
    
    it('deletes comment from state', () => {
        let actual = commentsReducer(initalState, action) ;
        let expected = {comments:{}, loading: false} ;
        expect(actual).to.eql(expected);
    });

    it('does not mutate the original state', () => {
        const newState = commentsReducer(initalState, action);
        expect(newState).to.not.equal(initalState);
    }); 
    
});
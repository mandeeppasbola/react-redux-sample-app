import * as actionTypes from './actionTypes';
import comments from '../data/comments';

const loadAllComments  = () => (
    {
        type: actionTypes.LOAD_ALL_COMMNENTS,
        payload: {comments}
    }
)
const addComment = () => (
    {
        type: actionTypes.ADD_COMMENT,
        payload: {id: '01', title: "title", desc: "desc"}
    }
)
const removeComment = () => (
    {
        type: actionTypes.REMOVE_COMMENT,
        payload: {id: '01'}
    }
)
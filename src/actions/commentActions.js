import * as actionTypes from './actionTypes';
import comments from '../data/comments';

export const loadAllComments  = () => (
    {
        type: actionTypes.LOAD_ALL_COMMNENTS,
        payload: comments
    }
)
export const addComment = () => (
    {
        type: actionTypes.ADD_COMMENT,
        payload: {id: 4, title: "title 4", desc: "desc 4"}
    }
)
export const removeComment = () => (
    {
        type: actionTypes.REMOVE_COMMENT,
        payload: {id: 1}
    }
)
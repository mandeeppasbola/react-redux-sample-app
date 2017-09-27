import * as actionTypes from '../actions/actionTypes';
const initialState = {
    comments : [],
    login : false
}
const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOAD_ALL_COMMNENTS : 
            return Object.assign({}, state, {comments: action.payload})

        case actionTypes.ADD_COMMENT :
            return Object.assign({}, state, {comments: [...state.comments,action.payload]} )

        case actionTypes.REMOVE_COMMENT :
            return Object.assign({}, state, {comments: state.comments.filter((comment) => (
                comment.id !==  action.payload.id
            ))})
            
        default :
            return state
    }
}

export default commentReducer;
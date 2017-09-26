import * as actionTypes from '../actions/actionTypes';
const initialState = {
    comments : []
}
const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOAD_ALL_COMMNENTS : 
            return action.payload
        case actionTypes.ADD_COMMENT :
            return [...state,action.payload]
        case actionTypes.REMOVE_COMMENT :
            return state.filter((comment) => (
                comment.id !==  action.payload.id
            ))
        default :
            return state
    }
}
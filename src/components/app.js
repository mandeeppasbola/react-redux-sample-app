import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddComponent from "./add-component";
import Comment from "./comment";
import * as commentActions from '../actions/commentActions'

const App = ({comments, actions}) => (
    <div>
        <h1>This is comment manager app</h1>
        <div className="add-comment">
            <AddComponent/>
        </div>
        <div className="comments">
            {
                comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} actions={actions}/>
                ))
            }
        </div>
    </div>
)

const mapStateToProps = (state) => (
    {
        comments : state.comments
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        actions : bindActionCreators(commentActions, dispatch) 
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
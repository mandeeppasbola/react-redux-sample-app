import React from "react";
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from "./components/app";
import commentReducer from './reducers/commentsReducer';
import {loadAllComments, addComment, removeComment} from './actions/commentActions';

const store = createStore(commentReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(loadAllComments());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
import React from "react";
import {render} from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from "./components/app";

let store = createStore();

render(
    <Provider store={}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
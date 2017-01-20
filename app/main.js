/**
 * Created by miracle on 2017/1/12.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux'
import App from './component/app'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
)
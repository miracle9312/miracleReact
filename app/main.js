/**
 * Created by miracle on 2017/1/12.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux'
import routes from './routes'
import {Router,browserHistory} from 'react-router';
import configureStore from './redux/configureStore';
import './component/index.css'


const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
history.listen( function(location){ return location});

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
)
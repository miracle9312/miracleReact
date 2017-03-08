/**
 * Created by miracle on 2017/1/17.
 */
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from './reducers/index';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router'

const rouMiddleware = routerMiddleware(browserHistory);
const loggerMiddleWare = createLogger();
const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

const createStoreWithMiddleWare = applyMiddleware(rouMiddleware,thunkMiddleWare,loggerMiddleWare)(create);

export default function configureStore (initialState){
    const store = createStoreWithMiddleWare(rootReducer,initialState);
    return store;
}

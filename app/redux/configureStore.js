/**
 * Created by miracle on 2017/1/17.
 */
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import createLogger from 'redux-logger';
import {rootReducer} from './reducers/index';

const loggerMiddleWare = createLogger();
const createStoreWithMiddleWare = applyMiddleware(thunkMiddleWare,loggerMiddleWare)(createStore);

export default function configureStore (initialState){
    const store = createStoreWithMiddleWare(rootReducer,initialState);
    return store;
}

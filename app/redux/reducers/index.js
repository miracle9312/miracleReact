/**
 * Created by miracle on 2017/1/17.
 */
import {combineReducers} from 'redux';
import test from './test';
import themeColor from './selectThemeColor'
import {routerReducer} from 'react-router-redux'

export const rootReducer = combineReducers({
    test:test,
    themeColor:themeColor,
    routing:routerReducer
})
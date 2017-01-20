/**
 * Created by miracle on 2017/1/17.
 */
import * as types from '../actionTypes'
const initialState = {
    data:''
};

export default function test (state=initialState,action) {
    switch(action.type){
        case types.TEST:
            return Object.assign({},state,{data:action.data});
        default:
            return state;
    }
}
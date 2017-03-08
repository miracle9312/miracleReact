/**
 * Created by miracle on 2017/2/28.
 */
import * as types from '../actionTypes'
const initialState={
    color:'#cd5353'
}

export default function themeColors(state=initialState,action){
    switch(action.type){
        case types.SELECT_THEME_COLOR:
            return Object.assign({},state,{color:action.color});
        default:
            return state;
    }
}
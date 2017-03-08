/**
 * Created by miracle on 2017/2/28.
 */
import * as types from '../actionTypes'

export default function  selectThemeColor(color) {
    return{
        type: types.SELECT_THEME_COLOR,
        color:color,
    }
}
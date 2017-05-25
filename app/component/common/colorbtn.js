/**
 * Created by miracle on 2017/2/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import selectThemeColor from '../../redux/action/selectThemeColor';
import PropTypes from 'prop-types'

class ColorBtn extends React.Component{
    constructor(props){
        super(props)
    }

    setThemeColor=(color)=>{
        const{dispatch} =this.props;
        dispatch(selectThemeColor(color))
    }

    render(){
        return(
            <li className="wp-color-bar">
                <a href="#" onClick={this.setThemeColor.bind(this,this.props.color)} style={{backgroundColor:this.props.color}} className="wp-color-btn"></a>
            </li>
        )
    }
}

ColorBtn.propTypes={
    color:PropTypes.string
}

function mapStateToProps(state){
    const{
        themeColor
    } =state;
    return{
        themeColor
    }
}

export default connect(mapStateToProps)(ColorBtn);

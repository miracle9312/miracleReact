/**
 * Created by miracle on 2017/2/28.
 */
import React from 'react';
import PropTypes from 'prop-types'

/*分割线*/
export default class Segment extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{height:this.props.height,width:this.props.width,backgroundColor:this.props.color}}></div>
        )
    }
}

Segment.propTypes={
    height:PropTypes.any.isRequired,
    width:PropTypes.any.isRequired,
    color:PropTypes.string
}

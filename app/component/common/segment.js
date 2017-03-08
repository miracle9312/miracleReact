/**
 * Created by miracle on 2017/2/28.
 */
import React from 'react';

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
    height:React.PropTypes.any.isRequired,
    width:React.PropTypes.any.isRequired,
    color:React.PropTypes.string
}

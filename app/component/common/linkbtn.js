/**
 * Created by miracle on 2017/3/4.
 */
import React from 'react';
import {connect} from 'react-redux'

class LinkBtn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lbgc:false,
            linkId:this.props.linkId
        }
    }

    componentDidMount(){
        document.getElementById(this.state.linkId).addEventListener("mouseover",this.onNavHover);
        document.getElementById(this.state.linkId).addEventListener("mouseout",this.onNavOut);
    }

    componentWillUnmount(){
        document.getElementById(this.state.linkId).removeEventListener("mouseover",this.onNavHover);
        document.getElementById(this.state.linkId).removeEventListener("mouseout",this.onNavOut);
    }

    onNavHover=()=>{
        this.setState({
            lbgc:true
        })
    }

    onNavOut=()=>{
        this.setState({
            lbgc:false
        })
    }


    render(){
        return(
            <li>
                <div id={this.state.linkId} href="#" style={this.state.lbgc?{borderColor:this.props.themeColor.color}:{}}>
                    <span style={this.state.lbgc?{color:this.props.themeColor.color}:{}} className={"glyphicon "+this.props.icon}></span>
                </div>
            </li>
        )
    }
}

function mapStateToProps(state){
    const {themeColor} = state;
    return {themeColor}
}

export default connect(mapStateToProps)(LinkBtn)
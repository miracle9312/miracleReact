/**
 * Created by miracle on 2017/3/3.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link,browserHistory,IndexLink} from 'react-router'

class NavBtn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bgc:false,
            navId:this.props.navId
        }
    }

    componentDidMount(){
        document.getElementById(this.state.navId).addEventListener("mouseover",this.onNavHover);
        document.getElementById(this.state.navId).addEventListener("mouseout",this.onNavOut);
    }

    componentWillUnmount(){
        document.getElementById(this.state.navId).removeEventListener("mouseover",this.onNavHover);
        document.getElementById(this.state.navId).removeEventListener("mouseout",this.onNavOut);
    }

    onNavHover=()=>{
        this.setState({
            bgc:true
        })
    }

    onNavOut=()=>{
        this.setState({
            bgc:false
        })
    }


    render(){
        if(this.props.address==''){
            return(
                <li role="presentation">
                    <IndexLink
                        to={"/one/"+this.props.address}
                        id={this.state.navId}
                        activeStyle={{backgroundColor:this.props.themeColor.color,color:'#fff',textDecoration:'none'}}
                        className="pb-nav-bar"
                        style={this.state.bgc?{backgroundColor:this.props.themeColor.color}:{}}>
                        <span className={"glyphicon "+this.props.icon} />
                        <p>{this.props.name}</p>
                    </IndexLink>
                </li>
            )

        }else {
            return(
                <li role="presentation">
                    <Link
                        to={"/one/"+this.props.address}
                        id={this.state.navId}
                        activeStyle={{backgroundColor:this.props.themeColor.color,color:'#fff',textDecoration:'none'}}
                        className="pb-nav-bar"
                        style={this.state.bgc?{backgroundColor:this.props.themeColor.color}:{}}>
                        <span className={"glyphicon "+this.props.icon} />
                        <p>{this.props.name}</p>
                    </Link>
                </li>
            )
        }
    }
}


function mapStateToProps(state){
    const {themeColor} = state;
    return {themeColor}
}

export default connect(mapStateToProps)(NavBtn)
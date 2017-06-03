/**
 * Created by miracle on 2017/5/24.
 */
import React from 'react';

export default class InputTest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:this.props.value
        }
    }

    componentWillReceiveProps(){
        this.setState({
            value:this.props.value
        })
    }

    testFun=(e)=>{
        console.log(e.keyCode)
        alert('hello');
    }

    testFunn=(e)=>{
        console.log(e.keyCode)
        alert('world');
    }

    render(){
        return(
            <div>
                <input onKeyUp={this.testFun} id="testEle"  value={this.props.value} type="text" className="form-control" placeholder="Username" aria-describedby="login-uname" />
            </div>
        )
    }
}
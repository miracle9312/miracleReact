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

    render(){
        return(
            <div>
                <input id="testEle"  value={this.props.value} type="text" className="form-control" placeholder="Username" aria-describedby="login-uname" />
            </div>
        )
    }
}
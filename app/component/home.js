/**
 * Created by miracle on 2017/1/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import test from '../redux/action/test';
import {Link,browserHistory} from 'react-router';
import InputTest from './inputest';

export class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            val:'',
            val1:''
        }
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(test('miracle is handsome'));
    }

    changeText=(event)=>{
        this.setState({
            val:event.target.value,
            val1:event.target.value
        })
        console.log(event.target.value)
    }




    /*toMiracle=()=>{
        browserHistory.push(API+'/one')
    }*/

    render(){
        return(
            <div className="home-main">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">

                        {/* <ul>
                         <li>
                         <div className="input-group">
                         <span className="input-group-addon" id="login-uname">@</span>
                         <input value = {this.state.val} onChange={this.changeText}/>
                         </div>
                         </li>
                         <li>
                         <div className="input-group">
                         <span className="input-group-addon" id="login-uname">@</span>
                         <InputTest
                         value={this.state.val1}
                         />
                         </div>
                         </li>
                         </ul>*/}
                        <Link to="/one" className="btn btn-primary btn-md home-button home-buton-text">
                            <span className="glyphicon glyphicon-fire"></span>
                            see the Miracle
                        </Link>
                        <Link to="/two" className="btn btn-primary btn-md home-button home-button-text">
                            <span className="glyphicon glyphicon-fire" aria-hidden={true}></span>
                            see the Inteteam
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {
        test
    }=state;

    return {
        test
    }
}

export default connect(mapStateToProps)(App);
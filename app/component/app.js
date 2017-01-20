/**
 * Created by miracle on 2017/1/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import test from '../redux/action/test';
import './index.css'

export class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(test('miracle is handsome'));
    }

    _onClick=()=>{
        console.log('hello')
    }

    render(){
        const{test} = this.props;
        return(
            <div>
                <div className="test mdui-ripple">
                    <button type="button" className="btn btn-success" onClick={this._onClick}>test</button>
                    <p>miracle's react redux</p>
                    <p>{test.data}</p>
                </div>

                <div>
                    <p>mdui style</p>
                    <button className=".mdui-btn-raised">mdui</button>
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
/**
 * Created by miracle on 2017/1/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import test from '../redux/action/test';
import {Link,browserHistory} from 'react-router'

export class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(test('miracle is handsome'));
    }

    toMiracle=()=>{
        browserHistory.push(API+'/one')
    }

    render(){
        return(
            <div className="home-main">
                <div className="row">
                    <div className="col-md-6 col-md-offset-1">
                        <div className="home-center">
                            <div>
                                <h2 className="home-center-title">Miracle's React</h2>
                                <p className="home-center-words">This is a react product of miracle that include Miracle and Inteteam</p>
                            </div>
                            <a href="/one" onClick={this.toMiracle} className="btn btn-primary btn-md home-button home-buton-text">
                                <span className="glyphicon glyphicon-fire" aria-hidden={true}></span>
                                see the Miracle
                            </a>
                            <a href="/two" className="btn btn-primary btn-md home-button home-button-text">
                                <span className="glyphicon glyphicon-fire" aria-hidden={true}></span>
                                see the Inteteam
                            </a>
                        </div>
                    </div>
                </div>
                {/*<ul>
                 <li><Link to="/one" activeClassName='activeLink'>One</Link></li>
                 <li><Link to="/two" activeClassName='activeLink'>Two</Link></li>
                 </ul>*/}

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
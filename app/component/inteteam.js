/**
 * Created by miracle on 2017/2/7.
 */
import React from 'react';

export default class One extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <p>this is <strong>routeTwo</strong></p>
                {this.props.children}
            </div>
        )
    }
}
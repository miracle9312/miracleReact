/**
 * Created by miracle on 2017/2/22.
 */
import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
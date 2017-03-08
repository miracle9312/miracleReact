/**
 * Created by miracle on 2017/2/6.
 */
import React from 'react';
import Wrapper from './wrapper';
import PhotoBar from './photobar';

export default class One extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="miracle-bgs">
                <Wrapper />
                <div className="container miracle-page">
                    <div className="row">
                        <PhotoBar />
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

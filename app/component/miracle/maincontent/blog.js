/**
 * Created by miracle on 2017/3/7.
 */
import React from 'react';

export default class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-9 main-content" id="blog">
                <div className="ab-contain">
                    <div className="ab-main">
                        <div className="ab-main-title">
                            <h5>MY SLOGAN</h5>
                        </div>
                        <div className="ab-main-contain">
                            <div className="block-content">
                                <h1>CODING FOR FUN!!!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
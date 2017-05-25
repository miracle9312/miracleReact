/**
 * Created by miracle on 2017/2/7.
 */
import React from 'react';
import ViewPager from './inteteam/viewpager/viewpager'

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
                <ViewPager />
                {this.props.children}
            </div>
        )
    }
}
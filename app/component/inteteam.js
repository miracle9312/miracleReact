/**
 * Created by miracle on 2017/2/7.
 */
import React from 'react';
import ViewPager from './inteteam/viewpagerjs/viewpagerjs';
import InputTest from './inputest';

let img = 'http://img2.cache.netease.com/photo/0001/2015-07-07/ATUTFL1A5GHT0001.jpg'
let pages=[{name:1,url:img},{name:1,url:img},{name:1,url:img},{name:1,url:img},{name:1,url:img}]
export default class One extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <ViewPager
                    width="70%"
                    height="250px"
                    pages={pages}
                />
                {this.props.children}
            </div>
        )
    }
}
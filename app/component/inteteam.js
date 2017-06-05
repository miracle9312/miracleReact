/**
 * Created by miracle on 2017/2/7.
 */
import React from 'react';
import ViewPager from './inteteam/viewpagerjs/viewpagerjs';
import InputTest from './inputest';

let img0 = 'http://img2.cache.netease.com/photo/0001/2015-07-07/ATUTFL1A5GHT0001.jpg';
let img1 = 'http://img5.cache.netease.com/photo/0001/2017-06-03/CM0DI2VA6VVV0001.jpg';
let img2 = 'http://img2.cache.netease.com/photo/0001/2017-06-03/900x600_CM0DI36L6VVV0001.jpg';
let img3 = 'http://img5.cache.netease.com/photo/0001/2017-06-03/900x600_CM0DI3DF6VVV0001.jpg';
let img4 = 'http://img2.cache.netease.com/photo/0001/2017-06-03/CM18TUSK00AO0001.jpg'
let pages=[{name:1,url:img0},{name:1,url:img1},{name:1,url:img2},{name:1,url:img3},{name:1,url:img4}]
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
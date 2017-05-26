/**
 * Created by miracle on 2017/5/24.
 */
import React from 'react';
import './viewpager.css'

export default class ViewPager extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="inteui-container">
                 <div className="inteui-row">
                     <div className="inteui-col-md-12" styleName="slider-container">
                         <ul styleName="slider-bar">
                             <li styleName="slider-item slider-item1"></li>
                             <li styleName="slider-item slider-item2"></li>
                             <li styleName="slider-item slider-item3"></li>
                             <li styleName="slider-item slider-item4"></li>
                         </ul>
                         <div styleName="focus-container">
                             <ul styleName="focus-list">
                                 <li styleName="focus-list-item" ><div styleName="focus-item"></div></li>
                                 <li styleName="focus-list-item" ></li>
                                 <li styleName="focus-list-item" ></li>
                                 <li styleName="focus-list-item" ></li>
                             </ul>
                         </div>
                     </div>
                 </div>
            </div>
        )
    }
}
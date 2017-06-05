/**
 * Created by miracle on 2017/5/27.
 */
import React from 'react';
import './viewpagerjs.css';
import {Pager} from './pager';
import {M} from 'generals/M'
import {Gesture} from '../generals/gesture_detector'

let pager = null;
let pager_w = null;
let pageItems = null;
let vpCls;
let gestureCls;
let offset = 0;

export default class ViewPager extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        pager = document.getElementById('vp_pager');
        pageItems = document.getElementById('vp_page_items');
        pager_w = pager.getBoundingClientRect().width;
        vpCls = new Pager(pager,{
            pages: this.props.pages.length,
            pageItems: pageItems,
            onPageScroll: (positionInfo)=>{
                offset = -positionInfo.totalOffset;
                this.onValidateScroll();
            },
            onPageChange:this.onPageChange
        });
        gestureCls = new Gesture(pager,{
            onDrag: function(p){
                vpCls.position += p.dx;
                vpCls.handleOnScroll(vpCls.position);
            },
            onFirstDrag: function(p){
                p.event.preventDefault();
            }
        });
        this.bindhandlers();
    }

    bindhandlers=()=>{
        var btns = document.getElementById('vp-btns');
        var handler = function(e){
            var event = M.EventUtil.getEvent(e)
            var target = M.EventUtil.getTarget(event);
            switch (target.id){
                case 'vp-prev-btn':
                    vpCls.previous();
                    break;
                case 'vp-next-btn':
                    vpCls.next();
                    break;
                default:
                    break;
            }
        }
        if(M.support.touch){
            M.EventUtil.addHandler(btns,'touchstart',handler);
        }else{
            M.EventUtil.addHandler(btns,'click',handler)
        }
    };

    onValidateScroll=()=>{
        pageItems.style['-webkit-transform'] = 'translate3d('+offset*pager_w+'px,0px,0px)';
    };

    onPageChange=()=>{
        console.log('test change')
    };


    render(){
        return(
            <div>
            <div id="vp_pager" styleName = 'vp_pager' style={{width:this.props.width,height:this.props.height}}>
                <div id ="vp_page_items" styleName="vp_page_items" style={{width:this.props.pages.length*100+'%'}}>
                    {
                        this.props.pages.map((val,i)=>{
                            return(
                                <div key={i} styleName="vp_page_item" style={{width:100/this.props.pages.length+'%',fontSize:'100px'}}>{i}</div>
                            )
                        })
                    }
                </div>
            </div>
                <div id="vp-btns" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <button id="vp-prev-btn">prev</button>
                    <button id="vp-next-btn">next</button>
                </div>
            </div>
        )
    }
}
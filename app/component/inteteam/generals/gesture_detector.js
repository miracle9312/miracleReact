/**
 * Created by miracle on 2017/6/4.
 */
import {M} from 'generals/M';

export class Gesture{
    constructor(elem,options){
        this.eventStart = M.support.touch ? 'touchstart' : 'mousedown';
        this.eventMove = M.support.touch ? 'touchmove' : 'mousemove';
        this.eventEnd = M.support.touch ? 'touchend' : 'mouseup';
        this.elem = elem;
        this.onDragcb = options.onDrag;
        this.onFirstDragcb = options.onFirstDrag;
        this.isFirstDrag = false;
        this.dragging = false;
        this.downPoint;
        this.prevPoint;
        this.bindHandlers();
    }

    bindHandlers(){
        M.EventUtil.addHandler(this.elem, this.eventStart, this.handler);
        M.EventUtil.addHandler(this.elem, this.eventMove, this.handler);
        M.EventUtil.addHandler(this.elem, this.eventEnd, this.handler);
    }

    getPoint(e){
        e = M.EventUtil.getEvent(e);
        if(M.support.touch){
            var t = (e.touches.length) ? e.touches : e.changedTouches;
            return {
                x: t[0].pageX,
                y: t[0].pageY,
                timestamp: t[0].timeStamp,
                e: e
            }
        }else{
            return{
                x: e.pageX,
                y: e.pageY,
                timestamp: e.timeStamp,
                e: e
            }
        }
    }

    onDown(e){
        var p =this.getPoint(e);
        this.downPoint = p;
        this.prevPoint = p;
        /*this.isFirstDrag = true;*/
        this.dragging = true;
    }

    getDragData(p){
        return{
            x: p.x,
            dx: p.x - this.prevPoint.x,
            event: p.e
        }
    }

    onMove(e){
        if(this.dragging){
            var p = this.getPoint(e);
            var dragData = this.getDragData(p);
            /*if(this.isFirstDrag){
                this.onFirstDragcb(dragData);
                this.isFirstDrag = false;
            }*/
            this.onDragcb(dragData);
            this.prevPoint = p;
        }

        return false;
    }

    onUp(e){
        this.dragging = false;
    }

    //NOTE 箭头函数的this指向声明环境
    handler=(e)=>{
        switch(e.type){
            case 'touchstart':
            case 'mousedown':
                this.onDown(e);
                break;
            case 'touchmove':
            case 'mousemove':
                this.onMove(e);
                break;
            case 'touchend':
            case 'mouseup':
                this.onUp(e);
                break;
        }
    }
}
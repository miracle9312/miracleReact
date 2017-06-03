/**
 * Created by miracle on 2017/5/31.
 */
import {M} from 'generals/M';
import {Scroller} from './scroller';

export class Pager{
    constructor(elem, options){
        this.onPageScroll = options.onPageScroll;
        this.onPageChange = options.onPageChange;
        this.elemSize = elem.getBoundingClientRect().width;
        this.position = 0;
        this.scroller = new Scroller();
        this.max_length = -(options.pages-1) * this.elemSize;
    }

    positionInfo(pos){
        var totalOffset = -pos/this.elemSize,
            page = Math.floor(totalOffset),
            pageOffset = totalOffset - page;
        return {
            page: page,
            pageOffset: pageOffset,
            totalOffset: totalOffset
        }

    }

    handleOnScroll(pos){
        var posInfo = this.positionInfo(pos);
        console.log(posInfo);
        this.onPageScroll(posInfo);
    }

    handleEndAnimate(){
        return;
    }

    animate(){
        var animateId;
        var update=()=>{
            var isAnimating = this.scroller.computeScrollOffset();
            this.position = this.scroller.getCurrentX();
            this.handleOnScroll(this.position);

            if(isAnimating){
                animateId = M.raf.requestAnimationFrame(update);
            }else{
                this.handleEndAnimate();
            }
        };
        animateId = M.raf.requestAnimationFrame(update);
    }

    previous(){
        if(this.position < 0) {
            this.scroller.startScroll(this.position, this.elemSize);
            this.animate();
        }
    }

    next(){
        if(this.position > this.max_length) {
            this.scroller.startScroll(this.position, -this.elemSize);
            this.animate();
        }
    }
};
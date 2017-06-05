/**
 * Created by miracle on 2017/5/31.
 */
import {M} from 'generals/M';
import {Scroller} from '../generals/scroller';

export class Pager{
    constructor(elem, options){
        this.onPageScroll = options.onPageScroll;
        this.onPageChange = options.onPageChange;
        this.elemSize = elem.getBoundingClientRect().width;
        this.position = 0.0;
        this.scroller = new Scroller();
        this.max_pages = options.pages;
        this.pageItems = options.pageItems;
        this.max_length = this.max_pages * this.elemSize;
        this.nextPage = 0;
        this.moved = [];
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

    deltaToPage(pageIndex){
        return -(pageIndex*this.elemSize + this.position);
    }

    moveDom(dom, distance){
        dom.style.position = 'relative';
        dom.style.left = distance + 'px';
        this.moved.push(dom);
    }

    restoreDom(){
        if(this.moved.length){
            this.moved.map((dom)=>{
                dom.style.position = 'static';
            })
        }
    }

    LtoFPage(){
        if(this.nextPage === this.max_pages){
            this.moveDom(this.pageItems.firstChild, this.max_length);
            this.scroller.startScroll(this.position, this.deltaToPage(this.nextPage));
            this.animate();
        }else if(this.nextPage === this.max_pages + 1){
            this.position = 0;
            this.nextPage %= this.max_pages;
            this.scroller.startScroll(this.position, this.deltaToPage(this.nextPage));
            this.animate();
        }
    }

    FtoLPage(){
        if(this.nextPage === -1){
            this.moveDom(this.pageItems.lastChild, -this.max_length);
            this.scroller.startScroll(this.position, this.deltaToPage(this.nextPage));
            this.animate();
        }else if(this.nextPage === -2){
            this.position = -(this.max_pages-1) * this.elemSize;
            this.nextPage = this.max_pages - 2;
            this.scroller.startScroll(this.position, this.deltaToPage(this.nextPage));
            this.animate();
        }
    }

    changePage(){
        this.restoreDom();
        this.scroller.startScroll(this.position, this.deltaToPage(this.nextPage));
        this.animate();
    }

    surpassPages(){
        return this.nextPage >= this.max_pages || this.nextPage <= -1;
    }

    previous(){
        this.nextPage = -((this.scroller.isFinished() ? this.position :(this.scroller.getFinalX()))/this.elemSize) - 1;
        if(!this.surpassPages()){
            this.changePage();
        }else{
            this.FtoLPage();
        }
    }

    next(){
        this.nextPage = -((this.scroller.isFinished() ? this.position : (this.scroller.getFinalX()))/this.elemSize) + 1
        if(!this.surpassPages()){
            this.changePage();
        }
        else{
            this.LtoFPage();
        }
    }
};
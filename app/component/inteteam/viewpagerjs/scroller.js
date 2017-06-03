/**
 * Created by miracle on 2017/6/2.
 */

export class Scroller {
    constructor(){
        this.startX = 0.0;
        this.finalX = 0.0;
        this.deltaX = 0.0;
        this.currentX = 0;
        this.progress = 0.0;
        this.duration = 0.0;
        this.startTime = 0.0;
        this.DEFAULT_DURATION = 250;
        this.animateFinished = false;
        this.sViscousFluidScale = 8.0;
        this.sViscousFluidNormalize = 1.0;
    }

    //粘滞函数
    viscousFluid=(x)=>{
        x *= this.sViscousFluidScale;
        if (x < 1.0) {
            x -= (1.0 - Math.exp(-x));
        } else {
            var start = 0.36787944117;   // 1/e === exp(-1)
            x = 1.0 - Math.exp(1.0 - x);
            x = start + x * (1.0 - start);
        }
        x *= this.sViscousFluidNormalize;
        return x;
    }

    currentAnimationTime(){
        return Date.now();
    }

    getCurrentX(){
        return this.currentX;
    }

    startScroll(startX,dx,duration){
        this.startX = startX;
        this.finalX = startX + dx;
        this.deltaX = dx;
        this.duration = duration === undefined ? this.DEFAULT_DURATION : duration;
        this.startTime = this.currentAnimationTime();
        this.animateFinished = false;
    }

    computeScrollOffset(){
        if(this.animateFinished){
            return false;
        }
        var timePassed = this.currentAnimationTime() - this.startTime;
        var x = timePassed/this.duration;
        x = this.viscousFluid(x);
        this.currentX =this.startX + x*this.deltaX;

        if(Math.round(this.currentX) === Math.round(this.finalX)){
            this.animateFinished = true;
            this.currentX = this.finalX;
        }

        return true;
    }
}
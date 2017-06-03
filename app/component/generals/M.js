/**
 * Created by miracle on 2017/6/2.
 */
export const M ={};

M.support={
    touch:!!('ontouchstart' in window)
};

M.EventUtil = {
    getEvent: function(event){
        return event?event:window.event;
    },

    getTarget: function(event){
        return event.target || event.srcElement;
    },

    preventDefault: function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },

    stopPropagation: function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },

    addHandler: function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false)
        }else if(element.attachEvent){
            element.attachEvent('on' + type,handler);
        }else{
            element['on' + type] = handler;
        }
    },

    removeHandler: function(element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.detachEvent){
            element.detachEvent('on' + type, handler);
        }else{
            element['on' + type] = handler;
        }
    }
};

(function(){
    var lasttime = 0;
    var vendor = ['webkit', 'moz'];

    for(var i=0; i<vendor.length&&!window.requestAnimationFrame;i++){
        window.requestAnimationFrame = window[vendor[i] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendor[i] + 'CancelAnimationFrame'] ||
            window[vendor[i] + 'CancelRequestAnimationFrame']
    }

    if(!window.requestAnimationFrame){
        window.requestAnimationFrame = function (callback) {
            var currentTime = new Date().getTime(),
                timeToCall = Math.max(0,16-(currentTime-lasttime)),
                id = window.setTimeout(function(){
                    callback(currentTime + timeToCall);
                },timeToCall);
            return id;
        }
    }

    if(!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id){
            clearTimeout(id);
        }
    }
})();

M.raf = {
    cancelAnimationFrame: window.cancelAnimationFrame.bind(window),
    requestAnimationFrame: window.requestAnimationFrame.bind(window)
};


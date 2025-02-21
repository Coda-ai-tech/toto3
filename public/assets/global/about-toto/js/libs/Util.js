const _BREAK_POINT = 768;
let _isBreakpoint = null;
let _windowSize = {w:0,h:0};

export default class Util {
    constructor() {
        this.name = "Util";
    }

    static get BREAK_POINT(){
        return _BREAK_POINT;
    }

    static get isBreakpoint(){
        return _isBreakpoint;
    }
    static set isBreakpoint(_b){
        _isBreakpoint = _b;
    }

    static get windowSize(){
        return _windowSize;
    }
    static set windowSize(_obj){
        _windowSize = _obj;
    }

    static getWindowSize(){
        let r = (window.devicePixelRatio)? window.devicePixelRatio : 1;
        let w = Util.getWindowWidth();
        let h = window.innerHeight;
        return {w:w,h:h,r:r};
    }

    static getWindowWidth(isScrollWidth = false){
        let w = window.innerWidth;
        if(isScrollWidth) w -= Util.getWindowScrollWidth();
        return w;
    }

    static getScrollY(){
        return (window.scrollY == null)? document.documentElement.scrollTop : window.scrollY;
    }

}
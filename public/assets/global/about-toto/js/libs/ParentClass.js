import BaseClass from './BaseClass.js';
import Util from './Util.js';

export default class ParentClass extends BaseClass {
    constructor(_target) {
        super();
        this.name = "ParentClass";
        this.target = (_target)? _target : 'body';
        this.isBreackPointCheckFirst = true;
        this.isCreate = false;
        this.isLoad = false;

        Util.isBreakpoint = (Util.getWindowSize().w <= Util.BREAK_POINT);

        this.parts = {};

        document.addEventListener("DOMContentLoaded", () => {
            this.onCreate();
        });
        window.addEventListener('load',()=>{
            this.onLoad();
        });
    }

    onCreate(){
        super.onCreate();
        this.isCreate = true;

        for(var k in this.parts) this.parts[k].onCreate();
        this.onResize();

        $(window).on("resize orientationchange",()=>{
            this.onResize();
        });
        $(window).on("scroll",()=>{
            this.onScroll();
        });
    }

    onLoad(){
        super.onLoad();
        this.isLoad = true;

        for(let k in this.parts) this.parts[k].onLoad();
        this.onResize();
    }

    onResize(e,b){
        super.onResize();
        if (!this.isCreate || !this.isLoad) return;

        let size = Util.getWindowSize();
        for(let k in this.parts) this.parts[k].onResize(size);
        this.onChangeBreakPointBefore(size);
        this.onScroll();
        return size;
    }

    onScroll(){
        super.onScroll();
        let st = Util.getScrollY();
        for(let k in this.parts) this.parts[k].onScroll(st);
        return st;
    }

    onChangeBreakPointBefore(_size){
        let b = (_size.w <= Util.BREAK_POINT);

        if(b !== Util.isBreakpoint || this.isBreackPointCheckFirst){
            this.isVhChange = true;
            this.isBreackPointCheckFirst = false;
            Util.isBreakpoint = b;
            this.onChangeBreakPoint();
            for(let k in this.parts) this.parts[k].onChangeBreakPoint(b);
        }
    }
}
import BaseClass from "./BaseClass.js";

export default class ToggleClass extends BaseClass {
    constructor(_target) {
        super();
        this.name = "ToggleClass";
        
        this.CL_OPEN = "isOpen";

        this.target = _target;

        this.isOpen = false;

        this.time = 0.3;
        this.ease = "power2.out";
    }

    onCreate() {
        this.toggleTarget = $(".js-toggle__target", this.target);
        this.inner = $(".js-toggle__target__inner", this.target);
        this.btn = $(".js-toggle__btn__link", this.target);

        this.btn.on("click.ty_toggle",this.onClick.bind(this));
    }

    onChangeBreakPoint() {
        this.isOpen = false;
        gsap.killTweensOf(this.toggleTarget);
        this.toggleTarget.removeClass(this.CL_OPEN);
        this.btn.removeClass(this.CL_OPEN);
        this.toggleTarget.css({height:""});
    }

    onClick(e) {
        e.preventDefault();
        if(this.isOpen){
            this.onClose();
        } else {
            this.onOpen();
        }
    }

    onOpen(){
        if(this.isOpen) return;
        this.isOpen = true;

        this.toggleTarget.addClass(this.CL_OPEN);
        this.btn.addClass(this.CL_OPEN);

        const h = this.inner.outerHeight(true);
        gsap.killTweensOf(this.toggleTarget);
        gsap.to(this.toggleTarget,{duration:this.time,height:h,ease:this.ease,onComplete:()=>{
                this.toggleTarget.css({height:"auto"});
                $(window).trigger("resize");
            }
        });
    }

    onClose(){
        if(!this.isOpen) return;
        this.isOpen = false;

        this.toggleTarget.removeClass(this.CL_OPEN);
        this.btn.removeClass(this.CL_OPEN);

        gsap.killTweensOf(this.toggleTarget);
        gsap.to(this.toggleTarget,{duration:this.time,height:0,ease:this.ease,onComplete:()=>{
                $(window).trigger("resize");
            }
        });

    }
}
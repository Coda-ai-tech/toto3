import ParentClass from "./libs/ParentClass.js";
import ToggleClass from "./libs/ToggleClass.js";

class PageClass extends ParentClass {
  constructor() {
    super("#corporatePage");
    this.name = "PageClass";
  }

  onCreate() {

    $(".js-toggle").each((i, e) => {
      this.parts["toggle" + i] = new ToggleClass($(e));
    });

    super.onCreate();
    //console.log(this.name, "onCreate");

    var device = {}
    var mql = window.matchMedia('(max-width: 768px)')
    function setDevice() {
      device.sp = mql.matches
      device.pc = !mql.matches
    }
    setDevice()

    function fadeIn() {
      const fadeItems = gsap.utils.toArray('.js-fade')
      fadeItems.forEach((item) => {
        const fade = gsap
          .timeline({
            scrollTrigger: {
              trigger: item,
              start: 'top 80%'
            },
          })
          .from(item, { y: 20, autoAlpha: 0, ease: 'power1.out', stagger: 0.2 })
      })
    }
    fadeIn()
  }

}

const pageCl = new PageClass();
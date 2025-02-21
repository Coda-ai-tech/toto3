;(function () {
  var device = {}
  var mql = window.matchMedia('(max-width: 768px)')
  function setDevice() {
    device.sp = mql.matches
    device.pc = !mql.matches
  }
  setDevice()
  var triggerWrapBlack = document.querySelector('.triggerWrap.black')
  var triggerWrapWhite = document.querySelector('.triggerWrap.white')

  var menuTl = gsap
    .timeline({
      paused: true,
    })
    .to('#menu .menuContent', 0.3, { autoAlpha: 1 })
    .from('#menu .menuContent .item', 0.3, { autoAlpha: 0, y: 50, ease: 'power1.out', stagger: 0.05 }, '<')

  var menuShoulder = document.querySelector('.menu_shoulder')
  var menuTriggers = document.querySelectorAll('.menuTrigger')

  menuTriggers.forEach(function (menuTrigger) {
    menuTrigger.addEventListener('click', function () {
      if (menuTrigger.classList.contains('open')) {
        menuTl.reverse()
      } else {
        menuTl.play()
      }
      menuTriggers.forEach(function (trigger) {
        trigger.classList.toggle('open')
      })
    })

    /* ▼ add GA*/
    menuTrigger.addEventListener('keyup', function (e) {
      if( e.keyCode === 13 ){
      if (menuTrigger.classList.contains('open')) {
        menuTl.reverse()
      } else {
        menuTl.play()
        setTimeout(function(){
          $("#menu-top").focus();
        },500)
      }
      menuTriggers.forEach(function (trigger) {
        trigger.classList.toggle('open')
      })
      
    }
    })
    /* ▲ add GA*/
  })

  var isTop = document.querySelector('#purposeTop')

  document.querySelectorAll('#menu .menuContent .item a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function (e) {
      if (isTop) {
        menuTl.reverse()
        menuTriggers.forEach(function (trigger) {
          trigger.classList.toggle('open')
        })
      }
      var anchorId = menuItem.getAttribute('data-id')
      if (anchorId) {
        e.preventDefault()
        if (isTop) {
          gsap.to(window, 1, { scrollTo: { y: anchorId }, ease: 'power3.inOut' })
        } else {
          anchorId = anchorId === '#hero' ? '' : anchorId
          location.href = '../' + anchorId
        }
      }
    })


  })

  window.onscroll = function () {
    gsap.set(triggerWrapWhite, { maskPosition: '0 ' + -window.scrollY + 'px' })
    gsap.set(triggerWrapBlack, { maskPosition: '0 ' + Math.max(triggerWrapWhite.clientHeight - window.scrollY, 0) + 'px' })
    if (device.sp) {
      gsap.set([menuTriggers, menuShoulder], { y: -1 * Math.min(window.scrollY, 30) })
    } else {
      gsap.set([menuTriggers, menuShoulder], { y: 0 })
    }
  }
  window.onscroll()

  if (document.querySelector('.modal-zoom')) {
    var zoomModalTl = gsap
      .timeline({
        paused: true,
      })
      .to('.modal-zoom', 0.5, { autoAlpha: 1, ease: 'none' })
    var zoomModalImage = document.querySelector('.modal-zoom img')
    var zoomModalScroller = document.querySelector('.modal-zoom .modal-scroller')
    var zoomClose = document.querySelector('.modal-zoom .overlay')
    zoomClose.addEventListener('click', function () {
      zoomModalTl.reverse()
    })
    var btnZooms = document.querySelectorAll('.btn_zoom')
    btnZooms.forEach(function (btnZoom) {
      var src = btnZoom.getAttribute('data-url')
      btnZoom.addEventListener('click', function () {
        zoomModalScroller.scrollLeft = 0
        zoomModalImage.src = src
        zoomModalTl.play()
      })
    })
  }
  mql.addListener(function (e) {
    setDevice()
  })
  function fadeIn() {
    const fadeItems = gsap.utils.toArray('.js-fade')
    fadeItems.forEach((item) => {
      const fade = gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            //  end: 'bottom top',
            //  scrub: 1,
          },
        })
        .from(item, { y: 20, autoAlpha: 0, ease: 'power1.out' })
    })
  }
  var pl = location.search;
  if(!pl){
    fadeIn()
  }
})()


;(function () {
  var device = {}
  var mql = window.matchMedia('(max-width: 768px)')
  function setDevice() {
    device.sp = mql.matches
    device.pc = !mql.matches
  }
  setDevice()
  ;(function () {
    var sliderGroup = document.querySelectorAll('#brandPurpose .slider-group')
    var timeline = gsap
      .timeline({
        repeat: -1,
        paused: true,
      })
      .to(sliderGroup, 50, { x: '-100%', ease: 'none' })
    ScrollTrigger.create({
      trigger: '#brandPurpose .slider',
      start: 'top bottom',
      end: 'bottom top',
      onEnter: function () {
        timeline.play()
      },
      onEnterBack: function () {
        timeline.play()
      },
      onLeave: function () {
        timeline.pause()
      },
      onLeaveBack: function () {
        timeline.pause()
      },
    })

    /*add GA*/
    $(".slider_control .play").click(function(){
      timeline.play();
      $(this).hide();
      $(".slider_control .pause").show();
    });

    $(".slider_control .pause").click(function(){
      timeline.pause()
      $(this).hide();
      $(".slider_control .play").show();
    });


  })()

  function setAccordion() {
    var accordions = document.querySelectorAll('.accordion')
    accordions.forEach(function (accordion) {
      var trigger = accordion.querySelector('dt')
      var wrapper = accordion.querySelector('dd')
      var inner = accordion.querySelector('.accordion-inner')
      function onSwichHandler() {
        if (accordion.classList.contains('open')) {
          gsap.to(wrapper, 0.5, {
            height: 0,
            ease: 'power3.inOut',
            onComplete: function () {
              accordion.classList.remove('open')
              wrapper.removeAttribute('style')
            },
          })
        } else {
          gsap.to(wrapper, 0.5, {
            height: inner.clientHeight,
            ease: 'power3.inOut',
            onComplete: function () {
              accordion.classList.add('open')
              wrapper.removeAttribute('style')
            },
          })
        }
      }
      trigger.addEventListener('click', onSwichHandler)
    })
  }

  function setFakeScrollBar() {
    var strategy = document.querySelector('#strategy')
    var scroller = strategy.querySelector('.scroller')
    var inner = strategy.querySelector('.scroller-inner')
    var bar = strategy.querySelector('.scroller-bar')
    var barInner = strategy.querySelector('.scroller-bar-inner')
    var scrollerDiff = inner.clientWidth - scroller.clientWidth
    var barDiff = barInner.clientWidth - bar.clientWidth
    function onScrollHandler() {
      gsap.set(barInner, { x: -scroller.scrollLeft * (barDiff / scrollerDiff) })
    }
    scroller.addEventListener('scroll', onScrollHandler)
  }

  setAccordion()
  setFakeScrollBar()

  // message
  function messageModal() {
    var $trigger = document.querySelector('#message').querySelector('.trigger')
    var $modal = document.querySelector('#modalMessage')
    var $btnClose = $modal.querySelector('.btnClose')
    var scroller = $modal.querySelector('.modal_scroller')
    var inner = $modal.querySelector('.modal_scroller_inner')
    var bar = $modal.querySelector('.scroller-bar')
    var barInner = $modal.querySelector('.scroller-bar-inner')
    var scrollerDiff, barHeight, barDiff
    function openModal() {
      setBarHeight()
      $modal.classList.add('is-active')
    }
    function closeModal() {
      $modal.classList.remove('is-active')
    }
    function setBarHeight() {
      scrollerDiff = inner.clientHeight - scroller.clientHeight
      barHeight = (scroller.clientHeight / inner.clientHeight) * scroller.clientHeight
      barInner.style.height = barHeight + 'px'
      barDiff = barInner.clientHeight - bar.clientHeight
    }
    function onScrollHandler() {
      gsap.set(barInner, { y: -scroller.scrollTop * (barDiff / scrollerDiff) })
    }

    window.addEventListener('resize', setBarHeight)
    scroller.addEventListener('scroll', onScrollHandler)
    $trigger.addEventListener('click', openModal)
    $btnClose.addEventListener('click', closeModal)
    
    $btnClose.addEventListener('keydown', function(e){
       if( e.keyCode === 13 ){
        closeModal()
       }
       setTimeout(function(){
        $(".trigger").eq(0).focus();
      },500);
     })

    $trigger.addEventListener('keydown', function(e){
       if( e.keyCode === 13 ){
        openModal();
        setTimeout(function(){
          $(".modal_scroller_inner").eq(0).focus();
        },500);
       }
    })

  }
  messageModal()

  // function heroHeightFix() {
  //   var $header = document.querySelector('.gb-common-2019_header')
  //   var $hero = document.querySelector('#hero')

  //   function setHeight() {
  //     var headerHeight = $header.clientHeight
  //     $hero.style.height = window.innerHeight - headerHeight + 'px'
  //   }
  //   setHeight()
  //   // window.addEventListener('resize', setHeight)
  // }
  // heroHeightFix()

  function setTopMainHeight() {
    if (device.sp) {
      var h = window.innerHeight - document.querySelector('.gb-common-2019_header').clientHeight
      gsap.set('#hero', { height: h })
      gsap.set('.triggerWrap', { height: window.innerHeight })
    }
    if (device.pc) {
      gsap.set('#hero', { height: 'auto' })
      gsap.set('.triggerWrap', { height: '100vh' })
    }
  }
  setTopMainHeight()

  mql.addListener(function (e) {
    setDevice()
    setFakeScrollBar()
    // setTopMainHeight()
  })

  // https://players.brightcove.net/4631489730001/BJKE2i5G_default/index.html?videoId=6284613822001

  function hero() {
    var $trigger = document.querySelector('#hero').querySelector('.hero_play')
    var $modal = document.querySelector('#modalVideo')
    var $btnClose = $modal.querySelector('.btnClose')
    var $video = $modal.querySelector('.video_iframe')
    var src = $video.getAttribute('src')
    var $youtube = document.querySelector('#ytVideo')
    var $brightcove = document.querySelector('#bcVideo')
    var isYoutube = $youtube ? true : false
    var isBrightcove = $brightcove ? true : false
    var bgVideo

    function openModal() {
      $modal.classList.add('is-active')
      $video.src = src
      if (isYoutube) {
        bgVideo.pauseVideo()
      }
      if (isBrightcove) {
        bgVideo.pause()
      }
    }
    function closeModal() {
      $modal.classList.remove('is-active')
      $video.src = ''
      if (isYoutube) {
        bgVideo.playVideo()
      }
      if (isBrightcove) {
        bgVideo.play()
      }
    }
    if (isYoutube) {
      // youtube
      // IFrame Player API の読み込みタグを挿入
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      // 関数onYouTubeIframeAPIReadyでiframeとYoutubeプレイヤーを作成
      var pcId = $youtube.getAttribute('data-pc')
      var spId = $youtube.getAttribute('data-sp')

      var videoId = device.pc ? pcId : spId
      window.onYouTubeIframeAPIReady = function () {
        bgVideo = new YT.Player('ytVideo', {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            playsinline: 1,
            mute: 1,
            controls: 0,
            loop: 1,
            rel: 0,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        })
      }
      function onPlayerStateChange(event) {
        // 現在のプレーヤーの状態を取得
        var ytStatus = event.target.getPlayerState()
        // 再生終了したとき
        if (ytStatus == YT.PlayerState.ENDED) {
          bgVideo.playVideo()
        }
      }
      function onPlayerReady(event) {
        gsap.to('#purposeTop', { autoAlpha: 1, duration: 0.5, ease: 'none' })
        bgVideo.mute()
        bgVideo.playVideo()
        ScrollTrigger.create({
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          onLeave: function () {
            bgVideo.pauseVideo()
            gsap.set('#hero', { autoAlpha: 0 })
          },
          onEnterBack: function () {
            bgVideo.playVideo()
            gsap.set('#hero', { autoAlpha: 1 })
          },
        })
      }
    } else if (isBrightcove) {
      // brightcove
      var videoId = device.pc ? 'bgVideoPc' : 'bgVideoSp'
      videojs.getPlayer(videoId).ready(function () {
        bgVideo = this
        bgVideo.muted(true)
        bgVideo.on('ended', function () {
          bgVideo.play()
        })
        gsap.to('#purposeTop', { autoAlpha: 1, duration: 0.5, ease: 'none' })
        bgVideo.play()
        ScrollTrigger.create({
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          onLeave: function () {
            bgVideo.pause()
            gsap.set('#hero', { autoAlpha: 0 })
          },
          onEnterBack: function () {
            bgVideo.play()
            gsap.set('#hero', { autoAlpha: 1 })
          },
        })
      })
    } else {
      gsap.to('#purposeTop', { autoAlpha: 1, duration: 0.5, ease: 'none' })

      // img
    }
    $trigger.addEventListener('click', openModal)
    $btnClose.addEventListener('click', closeModal)

    /*add GA heroが動くため*/
    $btnClose.addEventListener('keydown', function(e){
       if( e.keyCode === 13 ){
        closeModal();
       }
       setTimeout(function(){
        $(".hero_play").focus();
      },500);
    })
    $trigger.addEventListener('keydown', function(e){
       if( e.keyCode === 13 ){
        openModal();
       }
       setTimeout(function(){
        $("#modalVideo").focus();
      },800);
    })
  }

  hero()
})()

$(document).ready(function(){
  var video = $("#video_pc");
  var video_sp = $("#video_sp");
  $(".kvcontrol .play").click(function(){
    video[0].play();
    video_sp[0].play();
    $(this).hide();
    $(".kvcontrol .pause").show();
  });

  $(".kvcontrol .pause").click(function(){
    video[0].pause();
    video_sp[0].pause();
    $(this).hide();
    $(".kvcontrol .play").show();
  });
});

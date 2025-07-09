import Link from 'next/link';

const En = () => {
  return (
    <>
      <nav className='m-box-headnav' data-headfix=''>
        <div className='headnav-area'>
          <div className='headnav-inner'>
            <div className='headnav-menu'>
              <div className='menu-burger' data-menu-open=''>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className='menu-list' data-menu-all=''>
                <li>
                  <button type='button' className='menu-hasdrop' data-menu-btn='01'>
                    <span className='menu-item'>FAUCET</span>
                  </button>
                  <div className='menu-drop' data-menu-area='01'>
                    <div className='drop-area'>
                      <h2 className='drop-ttl no-link'>FAUCET</h2>
                      <div className='drop-menu'>
                        <ul>
                          <li>
                            <a href='#faucet-z-series'>Z series</a>
                          </li>
                          <li>
                            <a href='#faucet-g-series'>G series</a>
                          </li>
                          <li>
                            <a href='#faucet-l-series'>L series</a>
                          </li>
                        </ul>
                      </div>
                      <button type='button' className='drop-close' data-menu-close='01'></button>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href='/en/gb_shower/' className='menu-hasdrop is-link'>
                    <span className='menu-item'>SHOWER</span>
                  </Link>
                </li>
                <li>
                  <button type='button' className='menu-hasdrop' data-menu-btn='04'>
                    <span className='menu-item'>TOUCHLESS FAUCET</span>
                  </button>
                  <div className='menu-drop' data-menu-area='04'>
                    <div className='drop-area'>
                      <h2 className='drop-ttl no-link'>TOUCHLESS FAUCET</h2>
                      <div className='drop-menu'>
                        <ul>
                          <li>
                            <a href='#touchless-faucet'>TOUCHLESS FAUCET</a>
                          </li>
                          <li>
                            <a href='#touchless-faucet-ewater'>TOUCHLESS FAUCET with EWATER+</a>
                          </li>
                          <li>
                            <a href='#touchless-soapdispenser'>TOUCHLESS SOAP DISPENSER</a>
                          </li>
                        </ul>
                      </div>
                      <button type='button' className='drop-close' data-menu-close='04'></button>
                    </div>
                  </div>
                </li>
                <li className='last'>
                  <button type='button' className='menu-hasdrop' data-menu-btn='03'>
                    <span className='menu-item'>SHOWCASE</span>
                  </button>
                  <div className='menu-drop' data-menu-area='03'>
                    <div className='drop-area'>
                      <h2 className='drop-ttl no-link'>SHOWCASE</h2>
                      <div className='drop-menu'>
                        <ul className='drop-grid'>
                          <li>
                            <a href='/en/inspiration/3.htm'>SPACE01</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/24.htm'>SPACE02</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/25.htm'>SPACE03</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/26.htm'>SPACE04</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/6.htm'>SPACE05</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/15.htm'>SPACE06</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/9.htm'>SPACE07</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/21.htm'>SPACE08</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/22.htm'>SPACE09</a>
                          </li>
                          <li>
                            <a href='/en/inspiration/23.htm'>SPACE10</a>
                          </li>
                        </ul>
                      </div>
                      <button type='button' className='drop-close' data-menu-close='03'></button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className='page'>
        <div className='u-top-main swiper-container'>
          <div className='u-top-slide swiper-wrapper' data-top-main='slide'>
            <div className='slide-box box-matte-black swiper-slide'>
              <div className='box-bg'></div>
              <div className='box-area'>
                <div className='area-logo'>
                  <img src='/assets/global/faucet/images/t_matte-black.svg' alt='Matte Black' className='for-pc' />
                  <img src='/assets/global/faucet/images/t_matte-black.svg' alt='Matte Black' className='for-sp' />
                </div>
                <span className='area-btn'>
                  <button
                    className='video more -text js-dialog-open'
                    data-target='video-faucet-all'
                    data-brightcove='6326539561112'
                  >
                    <img src='/assets/global/faucet/images/btn-play-bl.png' alt='WATCH VIDEO' />
                  </button>
                </span>
                <div className='hiddenhtml' style={{ display: 'none' }}>
                  <dialog className='video-faucet-all modal-video js-dialog-body'>
                    <div className='modal-video-body'>
                      <div className='modal-video-inner'>
                        <div
                          className='modal-video-movie-wrap'
                          style={{ paddingBottom: '56.25%', position: 'relative' }}
                        >
                          <button
                            type='button'
                            className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                            aria-label='CLOSE'
                          ></button>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>

            <div className='slide-box box-01 swiper-slide'>
              <div className='box-bg'></div>
              <div className='box-icon'>
                <img src='/assets/global/faucet/images/logo-reddot-19.jpg' alt='reddot award 2019 winner' />
              </div>
              <div className='box-area'>
                <div className='area-logo'>
                  <img src='/assets/global/faucet/images/t_faucet_shower.svg' alt='FAUCET&SHOWER' className='for-pc' />
                  <img
                    src='/assets/global/faucet/images/t_faucet_shower_sp.svg'
                    alt='FAUCET&SHOWER'
                    className='for-sp'
                  />
                </div>
                <span className='area-btn'>
                  <button
                    className='video more -text js-dialog-open'
                    data-target='video-faucet-all'
                    data-brightcove='6054126457001'
                  >
                    <img src='/assets/global/faucet/images/btn-play-bl.png' alt='WATCH VIDEO' />
                  </button>
                </span>
                <div className='hiddenhtml' style={{ display: 'none' }}>
                  <dialog className='video-faucet-all modal-video js-dialog-body'>
                    <div className='modal-video-body'>
                      <div className='modal-video-inner'>
                        <div
                          className='modal-video-movie-wrap'
                          style={{ paddingBottom: '56.25%', position: 'relative' }}
                        >
                          <button
                            type='button'
                            className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                            aria-label='CLOSE'
                          ></button>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>

            <div className='slide-box box-touchless-faucet swiper-slide'>
              <div className='box-bg'></div>
              <div className='box-area'>
                <div className='area-logo'>
                  <img
                    src='/assets/global/faucet/images/t_touchless-faucet.svg'
                    alt='Touchless Faucet'
                    className='for-pc'
                  />
                  <img
                    src='/assets/global/faucet/images/t_touchless-faucet_sp.svg'
                    alt='Touchless Faucet'
                    className='for-sp'
                  />
                </div>
              </div>
            </div>

            <div className='slide-box box-faucet-lavatory swiper-slide'>
              <div className='box-bg'></div>
              <div className='box-area'>
                <div className='area-logo'>
                  <img
                    src='/assets/global/faucet/images/t_faucet-lavatory.svg'
                    alt='Faucet / LAVATORY Planning'
                    className='for-pc'
                  />
                  <img
                    src='/assets/global/faucet/images/t_faucet-lavatory_sp.svg'
                    alt='Faucet / LAVATORY Planning'
                    className='for-sp'
                  />
                </div>
                <span className='area-btn'>
                  <a href='/en/gb-faucet/planning/faucet-lavatory/' className='more' target='_blank'>
                    <img src='/assets/global/faucet/images/btn-play-try.png' alt='' />
                  </a>
                </span>
                <dialog className='hiddenhtml' style={{ display: 'none' }}>
                  <div className='video-faucet-all modal-video js-dialog-body'>
                    <div className='modal-video-body'>
                      <div className='modal-video-inner'>
                        <div
                          className='modal-video-movie-wrap'
                          style={{ paddingBottom: '56.25%', position: 'relative' }}
                        >
                          <button
                            className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                            aria-label='CLOSE'
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            <div className='slide-box box-touchless-faucet-lavatory swiper-slide'>
              <div className='box-bg'></div>
              <div className='box-area'>
                <div className='area-logo'>
                  <img
                    src='/assets/global/faucet/images/t_touchless-faucet-lavatory.svg'
                    alt='TOUCHLESS FAUCET / LAVATORY Planning'
                    className='for-pc'
                  />
                  <img
                    src='/assets/global/faucet/images/t_touchless-faucet-lavatory_sp.svg'
                    alt='TOUCHLESS FAUCET / LAVATORY Planning'
                    className='for-sp'
                  />
                </div>
                <span className='area-btn'>
                  <a href='/en/gb-faucet/planning/touchless-faucet-lavatory' className='more' target='_blank'>
                    <img src='/assets/global/faucet/images/btn-play-try.png' alt='' />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className='u-top-slide__pagination'></div>
          <div className='u-top-slide__control'>
            <button type='button' className='u-top-slide__play'>
              <img
                src='/assets/global/faucet/images/btn_play.png'
                width='30'
                height='30'
                alt='pause slide'
                loading='lazy'
              />
            </button>
            <button type='button' className='u-top-slide__pause js-swiper-pause is-active'>
              <img
                src='/assets/global/faucet/images/btn_pause.png'
                width='30'
                height='30'
                alt='pause slide'
                loading='lazy'
              />
            </button>
          </div>
        </div>
        <main className='main'>
          <section id='design' className='effect'>
            <section className='design lowerSection is-nopadding innerEl-full toggle -debug-'>
              <div className='design__inner'>
                <section className='design__content innerEl-wide'>
                  <div className='design__arw'>
                    <a href='#design'>
                      <img src='/assets/global/faucet/images/arw_scroll.png' alt='scroll' />
                    </a>
                  </div>
                  <div className='design__el effect is_marginAdjust'>
                    <header className='design__header lowerSection__header innerEl-tight'>
                      <h2 className='design__title lowerSection__title'>
                        <span>FAUCET</span>
                      </h2>
                    </header>

                    <div className='is_taC is_mgt20 design__link'>
                      <a href='/en/gb-faucet/planning/faucet-lavatory/' className='more' target='_blank'>
                        <span className='more__text'>FAUCET/LAVATORY PLANNING</span>
                        <span className='more__icn'></span>
                      </a>
                    </div>

                    <div className='design__elInner innerEl-tight' id='faucet-z-series'>
                      <div className='design__ZnSeries'>
                        <header className='design__elHeader'>
                          <h3 className='design__elName is-zn'>
                            ZN<span>series</span>
                          </h3>
                          {/* <!-- <p className="design__elDesc">↑t_zn.svgです。説明文が入ります。説明文が入ります。説明文が入ります。<br/>説明文が入ります。説明文が入ります。</p> --> */}
                          <nav className='design__elNav'>
                            <ul className='design__elNavList'>
                              {/* <!--
													<li className="design__elNavItem">
														<button className="more video -text" data-target="design-zn"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
														<div className="hiddenhtml" style={{"display":"none"}}>
															<div className="design-zn modal-video">
																<div className="modal-video-body">
																	<div className="modal-video-inner">
																		<div className="modal-video-movie-wrap -modal-img">
																			<img src="images/lineup-zn.jpg" alt="" />
																			<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
 --> */}
                              <li className='design__elNavItem'>
                                <button
                                  className='video more -text js-dialog-open'
                                  data-target='video-zn'
                                  data-brightcove='5613472304001'
                                >
                                  <span className='more__text'>WATCH VIDEO</span>
                                  <span className='more__icn'></span>
                                </button>
                                <div className='hiddenhtml' style={{ display: 'none' }}>
                                  <dialog className='video-zn modal-video js-dialog-body'>
                                    <div className='modal-video-body'>
                                      <div className='modal-video-inner'>
                                        <div
                                          className='modal-video-movie-wrap'
                                          style={{ paddingBottom: '56.25%', position: 'relative' }}
                                        >
                                          <button
                                            className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                            aria-label='CLOSE'
                                          ></button>
                                        </div>
                                      </div>
                                    </div>
                                  </dialog>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </header>

                        <figure className='design__ZnSeries__image01'>
                          <img src='/assets/global/faucet/images/img-series-zn-01.jpg' alt='' />
                        </figure>
                        <figure className='design__ZnSeries__image02'>
                          <img src='/assets/global/faucet/images/img-series-zn-02.jpg' alt='' />
                        </figure>
                        <figure className='design__ZnSeries__image03'>
                          <img src='/assets/global/faucet/images/img-series-zn-03.jpg' alt='' />
                        </figure>
                      </div>
                    </div>
                  </div>

                  <div className='design__el'>
                    <div className='design__elInner innerEl-tight'>
                      <header className='design__elHeader'>
                        <h3 className='design__elName is-za'>
                          ZA<span>series</span>
                        </h3>
                        <p className='design__elDesc'>
                          Lightness and dignity in a natural shape <br />
                          for a timeless design.
                        </p>
                        <nav className='design__elNav'>
                          <ul className='design__elNavList'>
                            <li className='design__elNavItem'>
                              <button className='more video -text js-dialog-open' data-target='design-za'>
                                <span className='more__text'>LINEUP</span>
                                <span className='more__icn'></span>
                              </button>
                              <div className='hiddenhtml' style={{ display: 'none' }}>
                                <dialog className='design-za modal-video js-dialog-body'>
                                  <div className='modal-video-body'>
                                    <div className='modal-video-inner'>
                                      <div className='modal-video-movie-wrap -modal-img'>
                                        <img src='/assets/global/faucet/images/lineup-za.jpg' alt='FAUCET LINE UP' />
                                        <button
                                          className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                          aria-label='CLOSE'
                                        ></button>
                                      </div>
                                    </div>
                                  </div>
                                </dialog>
                              </div>
                            </li>
                            <li className='design__elNavItem'>
                              <button
                                className='video more -text js-dialog-open'
                                data-target='video-za'
                                data-brightcove='6008628881001'
                              >
                                <span className='more__text'>WATCH VIDEO</span>
                                <span className='more__icn'></span>
                              </button>
                              <div className='hiddenhtml' style={{ display: 'none' }}>
                                <dialog className='video-za modal-video js-dialog-body'>
                                  <div className='modal-video-body'>
                                    <div className='modal-video-inner'>
                                      <div
                                        className='modal-video-movie-wrap'
                                        style={{ paddingBottom: '56.25%', position: 'relative' }}
                                      >
                                        <button
                                          className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                          aria-label='CLOSE'
                                        ></button>
                                      </div>
                                    </div>
                                  </div>
                                </dialog>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </header>
                      <figure className='design__elSticker'>
                        <img src='/assets/global/faucet/images/img-series-za-01.jpg' alt='' />
                      </figure>
                      <div className='design__elKv'>
                        <img src='/assets/global/faucet/images/img-series-za-02.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-za-02-sp.jpg' alt='' className='for-sp' />
                      </div>
                    </div>
                  </div>

                  <div className='design__el'>
                    <div className='design__elInner innerEl-tight'>
                      <header className='design__elHeader'>
                        <h3 className='design__elName is-zl'>
                          ZL<span>series</span>
                        </h3>
                        <p className='design__elDesc'>
                          A precise, ultra-thin form delivers a tranquil, <br className='for-pc' />
                          keenly framed beauty.
                        </p>
                        <nav className='design__elNav'>
                          <ul className='design__elNavList'>
                            <li className='design__elNavItem'>
                              <button className='more video -text js-dialog-open' data-target='design-zl'>
                                <span className='more__text'>LINEUP</span>
                                <span className='more__icn'></span>
                              </button>
                              <div className='hiddenhtml' style={{ display: 'none' }}>
                                <dialog className='design-zl modal-video js-dialog-body'>
                                  <div className='modal-video-body'>
                                    <div className='modal-video-inner'>
                                      <div className='modal-video-movie-wrap -modal-img'>
                                        <img src='/assets/global/faucet/images/lineup-zl.jpg' alt='FAUCET LINE UP' />
                                        <button
                                          className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                          aria-label='CLOSE'
                                        ></button>
                                      </div>
                                    </div>
                                  </div>
                                </dialog>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </header>
                      <figure className='design__elSticker'>
                        <img src='/assets/global/faucet/images/img-series-zl-01.jpg' alt='' />
                      </figure>
                      <div className='design__elKv'>
                        <img src='/assets/global/faucet/images/img-series-zl-02.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-zl-02-sp.jpg' alt='' className='for-sp' />
                      </div>
                    </div>
                  </div>
                </section>

                <section className='design__lineup' id='faucet-g-series'>
                  <div className='design__lineupItem -ge'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-ge.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-ge-sp.jpg' alt='' className='for-sp' />
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-reddot-19.jpg' alt='reddot award 2019 winner' />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GE<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          The beauty of traditional craft in a characteristic sculptural form.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button
                              className='video more -text js-dialog-open'
                              data-target='video-ge'
                              data-brightcove='6008631199001'
                            >
                              <span className='more__text'>WATCH VIDEO</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='video-ge modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div
                                      className='modal-video-movie-wrap'
                                      style={{ paddingBottom: '56.25%', position: 'relative' }}
                                    >
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-ge'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-ge modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-ge.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gc'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-gc.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-gc-sp.jpg' alt='' className='for-sp' />
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-reddot-19.jpg' alt='reddot award 2019 winner' />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GC<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          The breadth and symbolism of classical design in a contemporary form.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button
                              className='video more -text js-dialog-open'
                              data-target='video-gc'
                              data-brightcove='6008619857001'
                            >
                              <span className='more__text'>WATCH VIDEO</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='video-gc modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div
                                      className='modal-video-movie-wrap'
                                      style={{ paddingBottom: '56.25%', position: 'relative' }}
                                    >
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-gc'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-gc modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-gc.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gm'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-gm.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-gm-sp.jpg' alt='' className='for-sp' />
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-award-19.jpg' alt='DESIGN AWARD 2019' />
                        </span>
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-reddot-19.jpg' alt='reddot award 2019 winner' />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GM<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          Bold parallel arches and reflective curves in an assertive design.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button
                              className='video more -text js-dialog-open'
                              data-target='video-gm'
                              data-brightcove='6008627984001'
                            >
                              <span className='more__text'>WATCH VIDEO</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='video-gm modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div
                                      className='modal-video-movie-wrap'
                                      style={{ paddingBottom: '56.25%', position: 'relative' }}
                                    >
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-gm'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-gm modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-gm.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gb'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-gb.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-gb-sp.jpg' alt='' className='for-sp' />
                        <div className='design__lineupBadge--wrap'>
                          <span className='design__lineupBadge'>
                            <img src='/assets/global/faucet/images/logo-reddot-20.jpg' alt='reddot winner 2020' />
                          </span>
                        </div>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GB<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          The stately squareness and beveled edges imbue a space with dignity.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-gb'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-gb modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-gb.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gf'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-gf.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-gf-sp.jpg' alt='' className='for-sp' />
                        <div className='design__lineupBadge--wrap'>
                          <span className='design__lineupBadge'>
                            <img src='/assets/global/faucet/images/logo-reddot-20.jpg' alt='reddot winner 2020' />
                          </span>
                        </div>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GF<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          The refined cylinder and fine finish inspire a high-end luxury feel.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-gf'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-gf modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-gf.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -ga'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-ga.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-ga-sp.jpg' alt='' className='for-sp' />
                        <div className='design__lineupBadge--wrap'>
                          <span className='design__lineupBadge'>
                            <img src='/assets/global/faucet/images/logo-reddot-18.jpg' alt='reddot award 2018 winner' />
                          </span>
                        </div>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GA<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          Subtle and sharp, this elegant, timeless design upgrades the everyday.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-ga'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-ga modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-ga.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -go'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-go.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-go-sp.jpg' alt='' className='for-sp' />
                        <span className='design__lineupBadge'>
                          <img
                            src='/assets/global/faucet/images/logo-reddot-17-bob.jpg'
                            alt='reddot award 2017 best of the best'
                          />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GO<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          Swelling and supple, the organic form leaves a graceful impression.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-go'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-go modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-go.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gr'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-gr.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-gr-sp.jpg' alt='' className='for-sp' />
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-reddot-17.jpg' alt='reddot award 2017 winner' />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GR<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>
                          The weight of a metal ingot cut at right angles tightens up a space.
                        </p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-gr'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-gr modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-gr.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gs'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/img-series-gs.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-gs-sp.jpg' alt='' className='for-sp' />
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-reddot-18.jpg' alt='reddot award 2018 winner' />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GS<span>series</span>
                        </h3>
                        <p className='design__lineupDesc'>A modern design wrapping a relaxed, unassuming shape.</p>
                        <ul>
                          <li className='design__lineupLink'>
                            <button className='more video -text js-dialog-open' data-target='design-gs'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-gs modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-gs.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <section className='design__lineup2' id='faucet-l-series'>
                  <div className='design__lineup2Item -lb' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/img-series-lb.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-lb-sp.jpg' alt='' className='for-sp' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          LB<span>series</span>
                        </h3>
                        <p className='design__lineup2Desc'>
                          The simple beauty of a tree branch formed of smoothly curved cylinders.
                        </p>
                        <ul>
                          <li className='design__lineup2Link'>
                            <button className='more video -text js-dialog-open' data-target='design-lb'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-lb modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-lb.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -ln'>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/img-series-ln.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-ln-sp.jpg' alt='' className='for-sp' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          LN<span>series</span>
                        </h3>
                        <p className='design__lineup2Desc'>
                          A modern look with nostalgic charm that invites a time of elegance.
                        </p>
                        <ul>
                          <li className='design__lineup2Link'>
                            <button className='more video -text js-dialog-open' data-target='design-ln'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-ln modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-ln.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -lc'>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/img-series-lc.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-lc-sp.jpg' alt='' className='for-sp' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          LC<span>series</span>
                        </h3>
                        <p className='design__lineup2Desc'>
                          Formed entirely of curves to highlight textures while gently blending in.
                        </p>
                        <ul>
                          <li className='design__lineup2Link'>
                            <button className='more video -text js-dialog-open' data-target='design-lc'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-lc modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-lc.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -lf'>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/img-series-lf.jpg' alt='' className='for-pc' />
                        <img src='/assets/global/faucet/images/img-series-lf-sp.jpg' alt='' className='for-sp' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          LF<span>series</span>
                        </h3>
                        <p className='design__lineup2Desc'>
                          Vigor and volume in a casual, compact design that flexibly brightens the space.
                        </p>
                        <ul>
                          <li className='design__lineup2Link'>
                            <button className='more video -text js-dialog-open' data-target='design-lf'>
                              <span className='more__text'>LINEUP</span>
                              <span className='more__icn'></span>
                            </button>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='design-lf modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div className='modal-video-movie-wrap -modal-img'>
                                      <img src='/assets/global/faucet/images/lineup-lf.jpg' alt='FAUCET LINE UP' />
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className='design__matto_black'>
                  <div className='design__matto_black--feature__inner'>
                    <div className='design__matto_black--feature'>
                      <div className='design__matto_black--feature-image'>
                        <figure className='design__comfortImage'>
                          <img
                            src='/assets/global/faucet/images/img-design-matto_black.jpg'
                            alt=''
                            className='for-pc'
                          />
                        </figure>
                      </div>
                      <div className='design__matto_black--feature-text'>
                        <header className='design__header'>
                          <h2 className='design__title lowerSection__title'>
                            <span>MATTE BLACK</span>
                          </h2>
                          <p className='design__sub_title'>Stunning beauty and remarkable durability from PVD</p>
                        </header>

                        <div className='design__matto_black--image'>
                          <figure className='design__comfortImage'>
                            <img
                              src='/assets/global/faucet/images/img-design-matto_black-sp.jpg'
                              alt=''
                              className='for-sp'
                            />
                          </figure>
                        </div>
                        <div className='design__matto_black--lead'>
                          <p className='text_emphasis'>
                            This stunning Matte Black ﬁnish adds sophistication and depth to our elegant faucet
                            designs.Its silky sheen and delicate color gradation create a sense of luxury like no other.
                          </p>
                          <p className='design__matto_black--lead_txt'>
                            Our “shot-blast processing” forms a chrome plating by physical vapor deposition (PVD) on
                            faucet ﬁxture surface irregularities. <br />
                            The result is a gorgeous Matte Black ﬁnish with a lustrous sheen and ﬁne color nuances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className='design__comfort'>
                  <div className='design__el effect'>
                    <div className='design__elInner'>
                      <div className='design__comfortWrap'>
                        <figure className='design__comfortImage'>
                          <img src='/assets/global/faucet/images/img-design-comfort.jpg' alt='' className='for-pc' />
                          <img src='/assets/global/faucet/images/img-design-comfort-sp.jpg' alt='' className='for-sp' />
                        </figure>
                        <div className='design__comfortPanel'>
                          <div className='design__comfortPanelDetail'>
                            <h4 className='design__comfortPanelName'>
                              <span>COMFORT GLIDE</span>
                            </h4>
                            <p className='design__comfortPanelDesc'>
                              Everyday ease-of-use
                              <br />
                              that is grounded
                              <br />
                              in the senses.
                            </p>
                            <p className='design__comfortPanelMore'>
                              <button
                                className='video more -text js-dialog-open'
                                data-target='video-comfort'
                                data-brightcove='6054183811001'
                              >
                                <span className='more__text'>WATCH VIDEO</span>
                                <span className='more__icn'></span>
                              </button>
                            </p>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='video-comfort modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div
                                      className='modal-video-movie-wrap'
                                      style={{ paddingBottom: '56.25%', position: 'relative' }}
                                    >
                                      {/* <a className="transcript-toggle" href="javascript:void(0);" aria-controls="transcript-1334" aria-expanded="false" aria-label="Transcript" role="button" tabIndex={0}>Transcript</a><transcript className="transcript" aria-expanded="true"><a href="javascript:void(0);" className="close" role="button" tabIndex={0}>Close</a><h3>Description of Movie</h3><div className="transcript-text">
																		<p style="font-size: 16px;">COMFORT GLIDE</p>
																		<p>Water flows when the lever on the faucet is raised. There is a close-up shot of the faucet’s internal structure showing how a ceramic disc slides every time the lever is raised or lowered. A caption is displayed: “Applying a special coating means”. Then a graph quantifying “operability” is displayed; it shows that operability does not change even after the faucet has been used for 10 years. A caption is displayed: “long lasting ease of use”.</p>
																	</div></transcript> */}
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className='bnr__matto_black'>
                  <img src='/assets/global/faucet/images/bnr-matto_black.jpg' alt='' className='for-pc' />
                  <img src='/assets/global/faucet/images/bnr-matto_black-sp.jpg' alt='' className='for-sp' />
                  <div className='area'>
                    <div className='area-logo'>
                      <img
                        src='/assets/global/faucet/images/t_matto_black.svg'
                        alt="TOTO's MANUFACTURING"
                        className='for-pc'
                      />
                      <img
                        src='/assets/global/faucet/images/t_matto_black.svg'
                        alt="TOTO's MANUFACTURING"
                        className='for-sp'
                      />
                    </div>

                    <span className='area-btn'>
                      <button
                        className='video more -text js-dialog-open'
                        data-target='video-faucet-all'
                        data-brightcove='6327108575112'
                      >
                        <img src='/assets/global/faucet/images/btn-play-bl.png' alt='WATCH VIDEO' />
                      </button>
                    </span>
                    <div className='hiddenhtml' style={{ display: 'none' }}>
                      <dialog className='video-faucet-all modal-video js-dialog-body'>
                        <div className='modal-video-body'>
                          <div className='modal-video-inner'>
                            <div
                              className='modal-video-movie-wrap'
                              style={{ paddingBottom: '56.25%', position: 'relative' }}
                            >
                              <button
                                className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                aria-label='CLOSE'
                              ></button>
                            </div>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                </section>

                <section className='bnr__faucet-lavatory'>
                  {/* <a href='/en/gb-faucet/planning/faucet-lavatory/' target='_blank'></a> */}
                  <img src='/assets/global/faucet/images/bnr-faucet-lavatory.jpg' alt='' className='for-pc' />
                  <img src='/assets/global/faucet/images/bnr-faucet-lavatory-sp.jpg' alt='' className='for-sp' />
                  <div className='area'>
                    <div className='area-logo'>
                      <img
                        src='/assets/global/faucet/images/t_faucet-lavatory.svg'
                        alt='Faucet / LAVATORY Planning'
                        className='for-pc'
                      />
                      <img
                        src='/assets/global/faucet/images/t_faucet-lavatory_sp.svg'
                        alt='Faucet / LAVATORY Planning'
                        className='for-sp'
                      />
                    </div>
                    <span className='area-btn'>
                      <a href='/en/gb-faucet/planning/faucet-lavatory/' target='_blank'>
                        <img src='/assets/global/faucet/images/btn-play-try.png' alt='' />
                      </a>
                    </span>
                  </div>
                </section>
              </div>
            </section>
          </section>

          <section id='touchless-faucet' className='effect anchor-section'>
            <section className='design lowerSection innerEl-full toggle -debug-'>
              <div className='design__inner'>
                <section className='design__content innerEl-wide'>
                  <div className='design__el effect'>
                    <header className='design__header lowerSection__header innerEl-tight'>
                      <h2 className='design__title lowerSection__title'>
                        <span>TOUCHLESS FAUCET</span>
                      </h2>
                    </header>
                    <div className='design__elInner innerEl-tight'>
                      <div className='is_taC is_mgt20'>
                        <a href='/en/gb-faucet/planning/touchless-faucet-lavatory' className='more' target='_blank'>
                          <span className='more__text'>TOUCHLESS FAUCET/LAVATORY PLANNING</span>
                          <span className='more__icn'></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <h3 className='block__title' id='touchless-faucet-g-series'>
                  <span>TOUCHLESS FAUCET</span>
                </h3>
                <section className='design__lineup'>
                  <div className='design__lineupItem -ge'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-ge.jpg' alt='' />
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GE<span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineupLink">
												<button className="video more -text" data-target="video-ge" data-brightcove="6008631199001">
													<span className="more__text">WATCH VIDEO</span><span className="more__icn"></span>
												</button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="video-ge modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap" style={{'paddingBottom':'56.25%', 'position':'relative'}}>
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li className="design__lineupLink">
												<button className="more video -text" data-target="design-ge"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-ge modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-ge.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gc'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-gc.jpg' alt='' />
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GC<span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineupLink">
												<button className="video more -text" data-target="video-gc" data-brightcove="6008619857001">
													<span className="more__text">WATCH VIDEO</span><span className="more__icn"></span>
												</button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="video-gc modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap" style={{'paddingBottom':'56.25%', 'position':'relative'}}>
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li className="design__lineupLink">
												<button className="more video -text" data-target="design-gc"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-gc modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-gc.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineupItem -gm'>
                    <div className='design__lineupItemInner'>
                      <div className='design__lineupThumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-gm.jpg' alt='' />
                        <span className='design__lineupBadge'>
                          <img src='/assets/global/faucet/images/logo-reddot-21.jpg' alt='reddot award 2021 winner' />
                        </span>
                      </div>
                      <div className='design__lineupText'>
                        <h3 className='design__lineupName'>
                          GM<span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineupLink">
												<button className="video more -text" data-target="video-gm" data-brightcove="6008627984001">
													<span className="more__text">WATCH VIDEO</span><span className="more__icn"></span>
												</button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="video-gm modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap" style={{'paddingBottom':'56.25%', 'position':'relative'}}>
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											<li className="design__lineupLink">
												<button className="more video -text" data-target="design-gm"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-gm modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-gm.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                </section>

                <section className='design__lineup2' id='touchless-faucet-tle-series'>
                  <div className='design__lineup2Item -tle23' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle23.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-reddot-21.jpg' alt='reddot award 2021 winner' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle23.svg" alt="TLE23" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE23</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle23"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle23.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tle24' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle24.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img
                            src='/assets/global/faucet/images/logo-reddot-21-bob.jpg'
                            alt='reddot award 2021 winner best of best'
                          />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle24.svg" alt="TLE24" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE24</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle24"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle24.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tle25' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle25.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-reddot-21.jpg' alt='reddot award 2021 winner' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle25.svg" alt="TLE25" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE25</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle25"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle25.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tle26' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle26.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-reddot-21.jpg' alt='reddot award 2021 winner' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle26.svg" alt="TLE26" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE26</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle26"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle26.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tle27' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle27.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-award-21.jpg' alt='DESIGN AWERD 2021' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle27.svg" alt="TLE27" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE27</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle27"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle27.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tle28' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle28.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-award-21.jpg' alt='DESIGN AWERD 2021' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle28.svg" alt="TLE28" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE28</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle28"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle28.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tle29' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle29.jpg' alt='' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle29.svg" alt="TLE29" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE29</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle29"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle29.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!-- TLE --> */}

                {/* <!-- EWATER --> */}
                <h3 className='block__title' id='touchless-faucet-ewater'>
                  <span>TOUCHLESS FAUCET with EWATER+</span>
                </h3>
                <section className='design__lineup2'>
                  {/* <!-- TLE30 --> */}
                  <div className='design__lineup2Item -tle30' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle30.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-award-21.jpg' alt='DESIGN AWERD 2021' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle30.svg" alt="TLE30" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE30</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle30"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle30.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- TLE31 --> */}
                  <div className='design__lineup2Item -tle31' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tle31.jpg' alt='' />
                        <span className='design__lineup2Badge'>
                          <img src='/assets/global/faucet/images/logo-award-21.jpg' alt='DESIGN AWERD 2021' />
                        </span>
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tle31.svg" alt="TLE31" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLE31</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tle31"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tle31.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                </section>

                <h3 className='block__title' id='touchless-soapdispenser'>
                  <span>TOUCHLESS SOAP DISPENSER</span>
                </h3>
                <section className='design__lineup2'>
                  <div className='design__lineup2Item -tlk07' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tlk07.jpg' alt='' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tlk07.svg" alt="TLK07" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLK07</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tlk07"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tlk07.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tlk08' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tlk08.jpg' alt='' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tlk08.svg" alt="TLK08" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLK08</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tlk08"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tlk08.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                  <div className='design__lineup2Item -tlk09' style={{ borderTop: 'none' }}>
                    <div className='design__lineup2ItemInner'>
                      <div className='design__lineup2Thumb'>
                        <img src='/assets/global/faucet/images/touchless/img-series-tlk09.jpg' alt='' />
                      </div>
                      <div className='design__lineup2Text'>
                        <h3 className='design__lineup2Name'>
                          {/* <!-- <img src="images/touchless/t_tlk09.svg" alt="TLK09" /> --> */}
                          <span className='design__lineup2SeriesTxt'>TLK09</span>
                          <span>series</span>
                        </h3>
                        {/* <!--
										<ul>
											<li className="design__lineup2Link">
												<button className="more video -text" data-target="design-tlk09"><span className="more__text">LINEUP</span><span className="more__icn"></span></button>
												<div className="hiddenhtml" style={{"display":"none"}}>
													<div className="design-lb modal-video">
														<div className="modal-video-body">
															<div className="modal-video-inner">
																<div className="modal-video-movie-wrap -modal-img">
																	<img src="images/touchless/lineup-tlk09.jpg" alt="" />
																	<button className="modal-video-close-btn js-modal-video-dismiss-btn" aria-label="CLOSE"></button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</ul>
--> */}
                      </div>
                    </div>
                  </div>
                </section>

                <section className='design__banner is-flex'>
                  <div className='design__el effect'>
                    <div className='design__elInner'>
                      <div className='design__bannerWrap'>
                        <figure className='design__bannerImage'>
                          <img
                            src='/assets/global/faucet/images/touchless/bnr-ecopower.jpg'
                            alt=''
                            className='for-pc'
                          />
                          <img
                            src='/assets/global/faucet/images/touchless/bnr-ecopower-sp.jpg'
                            alt=''
                            className='for-sp'
                          />
                        </figure>
                        <div className='design__bannerPanel'>
                          <div className='design__bannerPanelDetail'>
                            <h4 className='design__bannerPanelName is-ecopower'>
                              <span>ECOPOWER</span>
                            </h4>
                            {/* <!-- <p className="design__bannerPanelDesc">This sensor-activated TOUCHLESS FAUCET generates its own electricity.</p> --> */}
                            <p className='design__bannerPanelMore'>
                              <button
                                className='video more -text js-dialog-open'
                                data-target='video-ecopower'
                                data-brightcove='6236837373001'
                              >
                                <span className='more__text'>WATCH VIDEO</span>
                                <span className='more__icn'></span>
                              </button>
                            </p>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='video-ecopower modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div
                                      className='modal-video-movie-wrap'
                                      style={{ paddingBottom: '56.25%', position: 'relative' }}
                                    >
                                      {/* <a className="transcript-toggle" href="javascript:void(0);" aria-controls="transcript-1334" aria-expanded="false" aria-label="Transcript" role="button" tabIndex={0}>Transcript</a><transcript className="transcript" aria-expanded="true"><a href="javascript:void(0);" className="close" role="button" tabIndex={0}>Close</a><h3>Description of Movie</h3><div className="transcript-text">
																		<p style="font-size: 16px;">ECOPOWER</p>
																		<p>When a person’s hand reaches for the faucet, water automatically sprays out. There is a close-up shot of the internal structure of this functional part. When water is supplied, the force of the water turns the impeller, generating electricity. The generated electricity is stored and then used for sensor detection and opening/closing the solenoid valve. No power supply is required, making this an environmentally friendly function.</p>
																	</div></transcript> */}
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='design__el effect'>
                    <div className='design__elInner'>
                      <div className='design__bannerWrap'>
                        <figure className='design__bannerImage'>
                          <img src='/assets/global/faucet/images/touchless/bnr-ewater.jpg' alt='' className='for-pc' />
                          <img
                            src='/assets/global/faucet/images/touchless/bnr-ewater-sp.jpg'
                            alt=''
                            className='for-sp'
                          />
                        </figure>
                        <div className='design__bannerPanel'>
                          <div className='design__bannerPanelDetail'>
                            <h4 className='design__bannerPanelName is-ewater'>
                              <span>EWATER+</span>
                            </h4>
                            {/* <!-- <p className="design__bannerPanelDesc">SUPPRESSES the accumulation of Waste on the washbasin, especially around the drain.</p> --> */}
                            <p className='design__bannerPanelMore'>
                              <button
                                className='video more -text js-dialog-open'
                                data-target='video-ewater'
                                data-brightcove='6236835313001'
                              >
                                <span className='more__text'>WATCH VIDEO</span>
                                <span className='more__icn'></span>
                              </button>
                            </p>
                            <div className='hiddenhtml' style={{ display: 'none' }}>
                              <dialog className='video-ewater modal-video js-dialog-body'>
                                <div className='modal-video-body'>
                                  <div className='modal-video-inner'>
                                    <div
                                      className='modal-video-movie-wrap'
                                      style={{ paddingBottom: '56.25%', position: 'relative' }}
                                    >
                                      {/* <a className="transcript-toggle" href="javascript:void(0);" aria-controls="transcript-1334" aria-expanded="false" aria-label="Transcript" role="button" tabIndex={0}>Transcript</a><transcript className="transcript" aria-expanded="true"><a href="javascript:void(0);" className="close" role="button" tabIndex={0}>Close</a><h3>Description of Movie</h3><div className="transcript-text">
																		<p style="font-size: 16px;">EWATER+</p>
																		<p>After a person finishes washing their hands, EWATER+ is sprayed onto the wash basin surface. There is a close-up shot of the internal structure of the faucet function part; tap water is electrolyzed to create EWATER+. Spraying EWATER+ onto the wash basin surface keeps the surface clean. A wash basin that has not been sprayed with EWATER+ is compared with a basin that has. As time passes, fouling around the mouth of the drain in the wash basin not sprayed with EWATER+ becomes more and more noticeable. EWATER+ returns to water over time.</p>
																	</div></transcript> */}
                                      <button
                                        className='modal-video-close-btn js-modal-video-dismiss-btn js-dialog-close'
                                        aria-label='CLOSE'
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </dialog>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className='bnr__faucet-lavatory is-touchless'>
                  {/* <a href='/en/gb-faucet/planning/touchless-faucet-lavatory' target='_blank'></a> */}
                  <img src='/assets/global/faucet/images/touchless/bnr-faucet-lavatory.jpg' alt='' className='for-pc' />
                  <img
                    src='/assets/global/faucet/images/touchless/bnr-faucet-lavatory-sp.jpg'
                    alt=''
                    className='for-sp'
                  />
                  <div className='area'>
                    <div className='area-logo'>
                      <img
                        src='/assets/global/faucet/images/t_touchless-faucet-lavatory.svg'
                        alt='Faucet / LAVATORY Planning'
                        className='for-pc'
                      />
                      <img
                        src='/assets/global/faucet/images/t_touchless-faucet-lavatory_sp.svg'
                        alt='Faucet / LAVATORY Planning'
                        className='for-sp'
                      />
                    </div>
                    <span className='area-btn'>
                      <a href='/en/gb-faucet/planning/touchless-faucet-lavatory' target='_blank'>
                        <img src='/assets/global/faucet/images/btn-play-try.png' alt='' />
                      </a>
                    </span>
                  </div>
                </section>
              </div>
            </section>
          </section>

          <section className='showcase'>
            <div id='showcase' className='anchor'></div>
            <header className='showcase__header innerEl-tight'>
              <h2 className='selection__title lowerSection__title'>
                <span>SHOWCASE</span>
              </h2>
            </header>
            <div id='showcase-slider' className='showcase-slider'>
              <div className='swiper-bnr-container'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <a href='/en/inspiration/3.htm' className='showcase__card' aria-label='Exclusively yours'>
                      <div className='showcase-slider__background'>
                        <img src='/assets/global/faucet/images/showcase-image-01-pc.jpg' className='for-pc' alt='' />
                        <img src='/assets/global/faucet/images/showcase-image-01-sp.jpg' className='for-sp' alt='' />
                      </div>
                    </a>
                  </div>
                  <div className='swiper-slide'>
                    <a
                      href='/en/inspiration/32.htm'
                      className='showcase__card'
                      aria-label='Invitation to extraordinary'
                    >
                      <div className='showcase-slider__background'>
                        <img src='/assets/global/faucet/images/showcase-image-11-pc.jpg' className='for-pc' alt='' />
                        <img src='/assets/global/faucet/images/showcase-image-11-sp.jpg' className='for-sp' alt='' />
                      </div>
                    </a>
                  </div>
                  <div className='swiper-slide'>
                    <a href='/en/inspiration/25.htm' className='showcase__card' aria-label='Black gorgeousness'>
                      <div className='showcase-slider__background'>
                        <img src='/assets/global/faucet/images/showcase-image-03-pc.jpg' className='for-pc' alt='' />
                        <img src='/assets/global/faucet/images/showcase-image-03-sp.jpg' className='for-sp' alt='' />
                      </div>
                    </a>
                  </div>
                  <div className='swiper-slide'>
                    <a href='/en/inspiration/24.htm' className='showcase__card' aria-label='Graceful harmony'>
                      <div className='showcase-slider__background'>
                        <img src='/assets/global/faucet/images/showcase-image-02-pc.jpg' className='for-pc' alt='' />
                        <img src='/assets/global/faucet/images/showcase-image-02-sp.jpg' className='for-sp' alt='' />
                      </div>
                    </a>
                  </div>
                  {/* <!--
							<div className="swiper-slide">
								<a href="/en/inspiration/26.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-04-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-04-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="/en/inspiration/6.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-05-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-05-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="/en/inspiration/15.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-06-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-06-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="/en/inspiration/9.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-07-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-07-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="/en/inspiration/21.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-08-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-08-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="/en/inspiration/22.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-09-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-09-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="/en/inspiration/23.htm" className="showcase__card">
									<div className="showcase-slider__background">
										<img src="images/showcase-image-10-pc.jpg" className="for-pc" />
										<img src="images/showcase-image-10-sp.jpg" className="for-sp" />
									</div>
								</a>
							</div>
							--> */}
                </div>
                <div className='showcase-slider__indicator'>
                  <button type='button' className='showcase-slider__button-prev'>
                    <img
                      src='/assets/global/faucet/images/arrow-slider-pc.svg'
                      width='26'
                      height='50'
                      alt=''
                      loading='lazy'
                      className='for-pc'
                    />
                    <img
                      src='/assets/global/faucet/images/arrow-slider-sp.svg'
                      width='26'
                      height='50'
                      alt=''
                      loading='lazy'
                      className='for-sp'
                    />
                  </button>
                  <div className='showcase-slider__pagination'></div>
                  <button type='button' className='showcase-slider__button-next'>
                    <img
                      src='/assets/global/faucet/images/arrow-slider-pc.svg'
                      width='26'
                      height='50'
                      alt=''
                      loading='lazy'
                      className='for-pc'
                    />
                    <img
                      src='/assets/global/faucet/images/arrow-slider-sp.svg'
                      width='26'
                      height='50'
                      alt=''
                      loading='lazy'
                      className='for-sp'
                    />
                  </button>
                </div>
                <div className='showcase-slider__control'>
                  <button type='button' className='showcase-slider__play'>
                    <img
                      src='/assets/global/faucet/images/btn_play.png'
                      width='30'
                      height='30'
                      alt='pause slide'
                      loading='lazy'
                    />
                  </button>
                  <button type='button' className='showcase-slider__pause js-swiper-pause is-active'>
                    <img
                      src='/assets/global/faucet/images/btn_pause.png'
                      width='30'
                      height='30'
                      alt='pause slide'
                      loading='lazy'
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='bnr-shower-line-up innerEl-full'>
              <Link href='/en/gb_shower/'>
                <img
                  src='/assets/global/faucet/images/bnr-shower-line-up-pc.jpg'
                  className='for-pc'
                  alt='SHOWER LINE UP'
                />
                <img
                  src='/assets/global/faucet/images/bnr-shower-line-up-sp.jpg'
                  className='for-sp'
                  alt='SHOWER LINE UP'
                />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default En;

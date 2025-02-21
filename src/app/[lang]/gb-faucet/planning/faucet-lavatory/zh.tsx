/* eslint-disable */

const Zh = () => {
  return (
    <div className='l_wrapper'>
      <header className='l_header'>
        <div className='l_header__inner js_favorite__box'>
          <ul className='l_header__tab js_sp_navi'>
            <li className='is_active' data-select-id='plan'>
              <span className='l_header__tab--btn'>Planning</span>
            </li>
            <li data-select-id='choice'>
              <span className='l_header__tab--btn'>Your choice</span>
            </li>
            <li data-select-id='favorite'>
              <span className='l_header__tab--btn'>
                Plans<i className='m_icon__TextRound--black m_mgl5 js_favorite_count'>0</i>
              </span>
            </li>
          </ul>

          {/* <!-- <div className="js_tab__cont"> --> */}
          <div className='l_header__navi js_navi'>
            <div className='l_header__logo m_mgb20'>
              <div className='l_header__logo--inner' data-transition-link='top'>
                <h1 className='l_header__logo--img'>
                  <img
                    src='/assets/global/faucet/planning/assets/images/common/logo_white.svg'
                    alt='TOTO'
                    className='is_top'
                  />
                  <img
                    src='/assets/global/faucet/planning/assets/images/common/logo_black.svg'
                    alt='TOTO'
                    className='is_underlayer'
                  />
                </h1>
                <small className='l_header__logo--txt'>FAUCET / LAVATORY Planning</small>
              </div>
            </div>

            <div className='m_navi is_default'>
              <div id='nav_simulator'></div>

              <p className='m_favorite__btn m_btn__black m_dsp-pc'>
                <a href='#' className='js_favorite__btn'>
                  See Favorite<i className='m_icon__TextRound--black m_mgl5 js_favorite_count'>-</i>
                </a>
              </p>
            </div>
            {/* <!--/ .m_navi.is_planning --> */}

            <div className='m_navi is_compare'>
              <h2 className='m_ttl__small'>Compare your plan</h2>
              <div className='m_mgt10' id='favorite_nav_list4compare'>
                <ul className='m_model-col2__list'></ul>
              </div>
            </div>
            {/* <!--/ .m_navi.is_compare --> */}

            <div className='m_navi is_saved'>
              <div className='m_navi_head'>
                <h2 className='m_navi_head__item m_ttl__small'>Your Plans</h2>
                <p className='m_navi_head__item m_navi_head__link' data-transition-link='compare'>
                  <i className='m_icon__list m_mgr5'></i>List
                </p>
              </div>
              <div className='m_mgt10' id='favorite_nav_list4saved'>
                <ul className='m_model-col2__list'></ul>
              </div>
            </div>
            {/* <!--/ .m_navi.is_saved --> */}
          </div>
          {/* <!--/ .l_header__navi --> */}

          <div className='m_favorite js_favorite__cont'>
            <div className='m_favorite__close'>
              <p className='m_favorite__close--inner js_favorite__close'></p>
            </div>
            <div className='m_favorite__inner'>
              <h3 className='m_favorite__ttl'>
                See Favorite<i className='m_icon__TextRound--black m_mgl5 js_favorite_count'>-</i>
              </h3>
              <p className='m_favorite__subttl m_rsp_mgt30' data-transition-link='compare'>
                <i className='m_icon__list m_mgr5'></i>List
              </p>
              <div className='m_mgt10' id='favorite_nav_list'>
                <ul className='m_favorite__list'></ul>
              </div>
            </div>
          </div>

          {/* <!-- </div> -->
    <!--/ .js_tab__cont --> */}
        </div>
        {/* <!--/ .l_header__inner --> */}
      </header>

      <main className='l_main js_main' id='main'>
        <div className='m_container is_top'>
          <section className='m_panel is-active' data-panel-id='top'>
            <div className='uq_top'>
              <div className='uq_top__column uq_top__faucet'>
                <div className='uq_top__column--box'>
                  <h2 className='uq_top__column--ttl'>FAUCET</h2>
                  <ul className='uq_top__column--list'>
                    <li>
                      <a data-transition-link='faucet-series'>
                        <span className='uq_top__column--list-link'>
                          <small>Select from</small>
                          <br />
                          Series
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#faucet-shape' data-transition-link='faucet-shape'>
                        <span className='uq_top__column--list-link'>
                          <small>Select from</small>
                          <br />
                          Shape
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#faucet-colour' data-transition-link='faucet-colour'>
                        <span className='uq_top__column--list-link'>
                          <small>Select from</small>
                          <br />
                          Colour
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='uq_top__object'>
                <div className='uq_top__object--inner'>
                  <p>
                    Which one
                    <br />
                    search from？
                  </p>
                </div>
              </div>
              <div className='uq_top__column uq_top__lavatory'>
                <div className='uq_top__column--box'>
                  <h2 className='uq_top__column--ttl'>LAVATORY</h2>
                  <ul className='uq_top__column--list'>
                    <li>
                      <a href='#lavatory-shape' data-transition-link='lavatory-shape'>
                        <span className='uq_top__column--list-link'>
                          <small>Select from</small>
                          <br />
                          LAVATORY
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- uq_top --> */}
          </section>
          {/* <!-- data-panel-id="top" --> */}
        </div>
        {/* <!-- /.m_container.is_top --> */}

        <div className='m_container is_underlayer'>
          <div className='m_content'>
            <div className='m_content__inner m_controller'>
              <div className='m_flow'>
                <ul className='m_flow__inner js_flow_nav'>
                  <li className='m_flow__item'>
                    <a href='#top' className='m_flow__txt' data-transition-link='top'>
                      Top
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='faucet-series'>
                    <a href='#faucet-series' className='m_flow__txt' data-transition-link='faucet-series'>
                      FAUCET Series
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='faucet-shape'>
                    <a href='#faucet-shape' className='m_flow__txt' data-transition-link='faucet-shape'>
                      FAUCET Shape
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='faucet-colour'>
                    <a href='#faucet-colour' className='m_flow__txt' data-transition-link='faucet-colour'>
                      FAUCET Colour
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='faucet-product'>
                    <a href='#faucet-product' className='m_flow__txt' data-transition-link='faucet-product'>
                      FAUCET Item
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='faucet-select-colour'>
                    <a href='#faucet-select-colour' className='m_flow__txt' data-transition-link='faucet-select-colour'>
                      FAUCET Select Colour
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='lavatory-shape'>
                    <a href='#lavatory-shape' className='m_flow__txt' data-transition-link='lavatory-shape'>
                      LAVATORY Instllationtype
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='lavatory-product'>
                    <a href='#lavatory-product' className='m_flow__txt' data-transition-link='lavatory-product'>
                      LAVATORY Item
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='result'>
                    <span className='m_flow__txt'>Result</span>
                  </li>
                </ul>
              </div>

              <ul className='m_controller__btn m_list__inline m_inner_padding_sp'>
                <li>
                  <a href='#back' data-transition-link='back'>
                    <i className='m_icon__arrow--left m_mgr5'></i>Back
                  </a>
                </li>
                <li className='m_controller__reset'>
                  <a href='#' data-transition-link='top'>
                    <i className='m_icon__load m_mgr5'></i>Reset
                  </a>
                </li>
                <li className='m_controller__delete'>
                  <a href='#' data-action-link='delete-favorite-saved' data-select-type='id' data-select-id=''>
                    <i className='m_icon__delete m_mgr5'></i>Reset
                  </a>
                </li>
              </ul>
            </div>

            <section className='m_panel' data-panel-id='faucet-series'>
              <ul
                id='faucet_series_anchor'
                className='m_anchor is_wrap m_inner_padding__m m_pdt15 m_inner_padding_sp'
              ></ul>

              <div id='faucet_series_list'></div>
            </section>
            {/* <!-- data-panel-id="faucet-series" --> */}

            <section className='m_panel' data-panel-id='faucet-shape'>
              <ul
                id='faucet_shape_anchor'
                className='m_anchor is_wrap m_inner_padding__m m_pdt15 m_inner_padding_sp'
              ></ul>

              <div id='faucet_shape_list'></div>
            </section>
            {/* <!-- data-panel-id="faucet-shape" --> */}

            <section className='m_panel' data-panel-id='faucet-colour'>
              <ul
                id='faucet_colour_anchor'
                className='m_anchor is_col2 m_inner_padding__m m_pdt15 m_inner_padding_sp'
              ></ul>

              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div id='faucet_colour_list' className='m_inner_padding__m'></div>
              </div>
            </section>
            {/* <!-- data-panel-id="faucet-colour" --> */}

            <section className='m_panel' data-panel-id='faucet-product'>
              <ul
                className='m_anchor is_col2 m_inner_padding__m m_pdt15 m_inner_padding_sp'
                id='faucet_product_anchor'
              ></ul>

              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='faucet_product_list'></div>
              </div>
            </section>
            {/* <!-- data-panel-id="faucet-list" --> */}

            <section className='m_panel' data-panel-id='faucet-select-colour'>
              <div className='m_inner_padding__m m_bg__white m_pdt30 m_pdb30' id='faucet_select_colour'></div>
            </section>
            {/* <!-- data-panel-id="faucet-select-colour" --> */}

            <section className='m_panel' data-panel-id='lavatory-shape'>
              <ul
                className='m_anchor is_col2 m_inner_padding__m m_pdt15 m_inner_padding_sp'
                id='lavatory_shape_anchor'
              ></ul>

              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m'>
                  <div className='m_col__large is_individual' id='lavatory_shape_list'></div>
                </div>
              </div>
            </section>
            {/* <!-- data-panel-id="faucet-select-colour" --> */}

            <section className='m_panel' data-panel-id='lavatory-product'>
              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='lavatory_product_list'></div>
              </div>
            </section>
            {/* <!-- data-panel-id="lavatory-product" --> */}

            <section className='m_panel' data-panel-id='result'>
              <div className='m_result is-faucet-lavatory' id='result_panel'></div>

              <div className='m_inner_padding_sp m_bg__white m_pdt30 m_dsp-sp'>
                <div id='sp_result_list'></div>
              </div>
            </section>
            {/* <!-- data-panel-id="result" --> */}

            <section className='m_panel' data-panel-id='saved'>
              <div className='m_saved__wrap m_pdb30 is_show' id='saved_result'></div>
            </section>
            {/* <!-- data-panel-id="saved" --> */}

            <section className='m_panel' data-panel-id='saved-list'>
              <div className='m_inner_padding__s m_pdt30 m_pdb30'>
                <div className='m_col__large'>
                  <ul className='m_compare__list is_ready' id='favorite_list4saved'></ul>
                </div>
              </div>
            </section>
            {/* <!-- data-panel-id="compare" --> */}

            <section className='m_panel' data-panel-id='compare'>
              <div className='m_inner_padding__s m_pdt30 m_pdb30'>
                <div className='m_col__large'>
                  <ul className='m_compare__list is_ready' id='favorite_list4compare'></ul>
                  <p className='m_btn__black m_mgt40 m_dsp-sp' data-action-link='show-favorite-compare-all'>
                    <button>
                      <i className='m_icon__load--white m_mgr10'></i>See All
                    </button>
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- data-panel-id="compare" --> */}

            <div className='m_modal js_modal'>
              <div className='m_modal__bg js_modal__close'></div>
              <div className='m_modal__inner'>
                <div className='m_modal__close js_modal__close'></div>
                <div className='m_modal__cont js_modal__cont js_device-winH'>
                  <div className='m_modal__logo'>
                    <div className='m_modal__logo--img'>
                      <img src='/assets/global/faucet/planning/assets/images/common/logo_black.svg' alt='TOTO' />
                    </div>
                    <small className='m_modal__logo--txt'>FAUCET / LAVATORY Planning</small>
                  </div>

                  <div className='m_modal__box' id='share_result'></div>

                  <ul className='m_list__inline m_auto m_mgt25'>
                    <li>
                      <a
                        className='m_icon__twitter m_hover__opacity'
                        data-action-link='share-result-url'
                        data-select-type='id'
                        data-select-id='twitter'
                      ></a>
                    </li>
                    <li>
                      <a
                        className='m_icon__facebook m_hover__opacity'
                        data-action-link='share-result-url'
                        data-select-type='id'
                        data-select-id='facebook'
                      ></a>
                    </li>
                  </ul>
                  <p className='m_btn__black is_small m_mgt15'>
                    <button type='button' data-action-link='copy-result-url'>
                      <i className='m_icon__copy--white m_mgr5'></i>Copy URL
                    </button>
                  </p>
                  <input type='text' id='copy_url' className='m_modal__copy_url' value='' readOnly />
                </div>
              </div>
            </div>
          </div>
          {/* <!--/ .m_content --> */}
        </div>
        {/* <!--/ .m_content_wapper --> */}
      </main>

      <footer className='l_footer'>
        <p className='l_footer__pageTop'>
          <a href='#pagetop' className='js_smoothScroll'>
            Back to top
          </a>
        </p>
        <div className='l_footer__inner'>
          <div className='l_footer__logo'>
            <h1 className='l_footer__logo--img'>
              <img src='/assets/global/faucet/planning/assets/images/common/logo_white.svg' alt='TOTO' />
            </h1>
            <small className='l_footer__logo--txt'>FAUCET / LAVATORY Planning</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Zh;

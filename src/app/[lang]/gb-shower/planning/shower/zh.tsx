/* eslint-disable */

const Zh = () => {
  return (
    <div className='l_wrapper'>
      <header className='l_header'>
        <div className='l_header__inner'>
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
          {/* <!-- <div></div> --> */}

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
                <small className='l_header__logo--txt'>SHOWER Planning</small>
              </div>
            </div>
            <div className='m_navi is_default'>
              <div className='m_recommend_nav m_mgb10 m_dsp-pc' id='nav_recommend'></div>

              <ul className='m_model-col2__list m_inner_margin__none' id='nav_simulator'></ul>

              <p className='m_favorite__btn m_btn__black m_dsp-pc'>
                <a href='#' className='js_favorite__btn'>
                  See Favorite<i className='m_icon__TextRound--black m_mgl5 js_favorite_count'>-</i>
                </a>
              </p>
            </div>

            <div className='m_navi is_compare'>
              <h2 className='m_ttl__small'>Compare your plan</h2>
              <div className='m_mgt10' id='favorite_nav_list4compare'>
                <ul className='m_model-col2__list'></ul>
              </div>
            </div>

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
          </div>

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
          {/* <!-- </div> --> */}
        </div>
      </header>

      <main className='l_main js_main'>
        <div className='m_container is_top'>
          <section className='m_panel is-active' data-panel-id='top'>
            <div className='uq_top'>
              <div className='uq_top__column uq_top__shower'>
                <div className='uq_top__column--box'>
                  <h2 className='uq_top__column--ttl'>SHOWER Planning</h2>
                </div>
              </div>

              <div className='uq_top__column'>
                <div className='uq_top__column--box is_reverse'>
                  <div className='uq_top__select js_device-winH' id='select-output'>
                    {/* <!-- <h3 className="uq_top__select--ttl">Which one search from？</h3> --> */}
                    <h3 className='uq_top__select--ttl'>Select your plan</h3>
                    <div className='uq_top__select--box'>
                      <ul className='uq_top__select--list'>
                        <li className='uq_top__select--item'>
                          <input id='over_head_shower' type='checkbox' value='over-head-shower' />
                          <label htmlFor='over_head_shower'>
                            Over <br className='m_dsp-spS' />
                            Head <br className='m_dsp-spS' />
                            Shower
                          </label>
                          <i className='uq_top__over-head-shower'></i>
                        </li>
                        <li id='select-output-icon1'>
                          <i className='m_icon__plus'></i>
                        </li>
                        <li className='uq_top__select--item'>
                          <input id='hand_shower' type='checkbox' value='hand-shower' />
                          <label htmlFor='hand_shower'>
                            Hand <br className='m_dsp-spS' />
                            Shower
                          </label>
                          <i className='uq_top__hand-shower'></i>
                        </li>
                        <li id='select-output-icon2'>
                          <i className='m_icon__plus'></i>
                        </li>
                        <li className='uq_top__select--item'>
                          <input id='bath_spout' type='checkbox' value='bath-spout' />
                          <label htmlFor='bath_spout'>
                            Bath <br className='m_dsp-spS' />
                            Spout
                          </label>
                          <i className='uq_top__bath-spout'></i>
                        </li>
                      </ul>
                      <ul className='uq_top__select--img'>
                        <li className='uq_top__over-head-shower' id='select-output-over-head-shower'></li>
                        <li className='uq_top__hand-shower' id='select-output-hand-shower'></li>
                        <li className='uq_top__bath-spout' id='select-output-bath-spout'></li>
                      </ul>
                    </div>
                    <p className='uq_top__select--msg'>You cannot select only spout.</p>
                    <p className='uq_top__select--btn'>
                      <button data-action-link='select-output'>
                        Next<i className='m_icon__arrow--right m_mgl10'></i>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

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
                  <li className='m_flow__item' data-flow-id='over-head-shower'>
                    <a href='#over-head-shower' className='m_flow__txt' data-transition-link='over-head-shower'>
                      Over Head Shower
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='hand-shower'>
                    <a href='#hand-shower' className='m_flow__txt' data-transition-link='hand-shower'>
                      Hand Shower
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='bath-spout'>
                    <a href='#bath-spout' className='m_flow__txt' data-transition-link='bath-spout'>
                      Bath Spout
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='controller-shape'>
                    <a href='#controller-shape' className='m_flow__txt' data-transition-link='controller-shape'>
                      Controller
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='controller'>
                    <a href='#controller' className='m_flow__txt' data-transition-link='controller'>
                      Controller
                    </a>
                  </li>
                  <li className='m_flow__item' data-flow-id='accessory'>
                    <a href='#accessory' className='m_flow__txt' data-transition-link='accessory'>
                      Accessory
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

            <section className='m_panel' data-panel-id='over-head-shower'>
              <ul
                className='m_anchor is_col2 m_inner_padding__m m_pdt15 m_inner_padding_sp'
                id='over_head_shower_anchor'
              ></ul>

              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='over_head_shower_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='hand-shower'>
              <ul
                className='m_anchor is_col2 m_inner_padding__m m_pdt15 m_inner_padding_sp'
                id='hand_shower_anchor'
              ></ul>

              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='hand_shower_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='bath-spout'>
              <ul
                className='m_anchor is_col2 m_inner_padding__m m_pdt15 m_inner_padding_sp'
                id='bath_spout_anchor'
              ></ul>

              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='bath_spout_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='controller-shape'>
              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m'>
                  <div className='m_col__2-1 js_matchHeight' id='controller_shape_list'></div>
                </div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='result'>
              <div className='m_result is-shower' id='result_panel'></div>

              <div className='m_inner_padding_sp m_bg__white m_pdt30 m_dsp-sp'>
                <div className='m_recommend_nav m_mgb10' id='sp_nav_recommend'></div>
                <ul className='m_model-col2__list' id='sp_result_list'></ul>
              </div>
            </section>

            <section className='m_panel' data-panel-id='controller'>
              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='controller_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='accessory1'>
              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='shower_accessory1_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='accessory2'>
              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='shower_accessory2_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='accessory3'>
              <div className='m_mgt25 m_pdt30 m_pdb30'>
                <div className='m_inner_padding__m' id='shower_accessory3_list'></div>
              </div>
            </section>

            <section className='m_panel' data-panel-id='saved'>
              <div className='m_saved__wrap m_pdb30 is_show' id='saved_result'></div>
            </section>

            <section className='m_panel' data-panel-id='saved-list'>
              <div className='m_inner_padding__s m_pdt30 m_pdb30'>
                <div className='m_col__large'>
                  <ul className='m_compare__list is_ready' id='favorite_list4saved'></ul>
                </div>
              </div>
            </section>

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

            <div className='m_modal js_modal'>
              <div className='m_modal__bg js_modal__close'></div>
              <div className='m_modal__inner'>
                <div className='m_modal__close js_modal__close'></div>
                <div className='m_modal__cont js_modal__cont js_device-winH'>
                  <div className='m_modal__logo'>
                    <div className='m_modal__logo--img'>
                      <img src='/assets/global/faucet/planning/assets/images/common/logo_black.svg' alt='TOTO' />
                    </div>
                    <small className='m_modal__logo--txt'>SHOWER Planning</small>
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
                  <input type='text' id='copy_url' className='m_modal__copy_url' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='l_footer'>
        <p className='l_footer__pageTop'>
          <a href='#pagetop' className='js_smoothScroll'>
            Back to top
          </a>
        </p>

        <div className='l_footer__inner'>
          <div className='l_footer__logo'>
            <p className='l_footer__logo--img'>
              <img src='/assets/global/faucet/planning/assets/images/common/logo_white.svg' alt='TOTO' />
            </p>
            <small className='l_footer__logo--txt'>SHOWER Planning</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Zh;

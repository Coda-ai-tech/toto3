/* eslint-disable */

const En = () => {
  return (
    <div className='page'>
      <div className='l-wrapper l-wrapper--page_top'>
        <article className='l-hero js-slider is-slider_preload'>
          <div className='l-hero_front'>
            <h1 className='l-hero_title'>
              {/* <!-- <img src="/assets/global/lavatory/assets/img/hero_title.svg" alt="Lavatory Matte Color Editions" /> --> */}
              <div className='l-hero_main-title'>
                <img src='/assets/global/lavatory/assets/img/hero_title.svg' alt='Lavatory' />
              </div>
              <div className='l-hero_sub-title show' style={{ opacity: '0.00' }}>
                <img src='/assets/global/lavatory/assets/img/hero_title_four_seasons.svg' alt='Scene of four seasons' />
              </div>
              <div className='l-hero_sub-title' style={{ opacity: '0.00' }}>
                <img src='/assets/global/lavatory/assets/img/hero_title_matte.svg' alt='Matte Color Editions' />
                <a href='../'>
                  <button type='button' aria-label='See more' className='l-hero_see-more_button'>
                    See more
                  </button>
                </a>
              </div>
            </h1>
            <div className='l-hero_cover'></div>
          </div>
          <div className='l-hero_back'>
            <div className='l-hero_visuals'>
              <div className='l-hero_visual js-slider_target'>
                <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_01.jpg' alt='' />
              </div>
              <div className='l-hero_visual js-slider_target'>
                <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_02.jpg' alt='' />
              </div>
              <div className='l-hero_visual js-slider_target'>
                <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_03.jpg' alt='' />
              </div>
              <div className='l-hero_visual js-slider_target'>
                <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_04.jpg' alt='' />
              </div>
              <div className='l-hero_visual js-slider_target'>
                <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_05.jpg' alt='' />
              </div>
              <div className='l-hero_visual js-slider_target'>
                <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_06.jpg' alt='' />
              </div>
            </div>
          </div>
          <div className='l-hero_pause l-pause'>
            <button
              type='button'
              aria-label='Pause'
              aria-live='polite'
              className='l-pause_button js-slider_toggle'
            ></button>
          </div>
        </article>

        <main className='main l-main'>
          <div className='l-accordian'>
            <ul>
              <li className='l-accordian_panel'>
                <a href='#spring'>
                  <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_02.jpg' />
                </a>
                <p className='l-accordian_title'>Spring</p>
                <p className='l-accordian_caption'>Season of beginnings</p>
              </li>
              <li className='l-accordian_panel'>
                <a href='#summer'>
                  <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_03.jpg' />
                </a>
                <p className='l-accordian_title'>Summer</p>
                <p className='l-accordian_caption'>Season of vitality</p>
              </li>
              <li className='l-accordian_panel'>
                <a href='#autumn'>
                  <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_04.jpg' />
                </a>
                <p className='l-accordian_title'>Autumn</p>
                <p className='l-accordian_caption'>Season of plenty</p>
              </li>
              <li className='l-accordian_panel'>
                <a href='#winter'>
                  <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_05.jpg' />
                </a>
                <p className='l-accordian_title'>Winter</p>
                <p className='l-accordian_caption'>Season of serenity</p>
              </li>
            </ul>
          </div>
          <nav className='l-nav'>
            <div className='l-nav_inner u-inner'>
              <ul className='l-nav_items'>
                <li className='l-nav_item'>
                  <a href='#spring' className='l-nav_box'>
                    <p className='l-nav_thumb'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/forest_green.jpg'
                        alt='FOREST GREEN'
                      />
                    </p>
                    <p className='l-nav_label'>FOREST GREEN</p>
                  </a>
                </li>
                <li className='l-nav_item'>
                  <a href='#summer' className='l-nav_box'>
                    <p className='l-nav_thumb'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/mandarin_orange.jpg'
                        alt='MANDARIN ORANGE'
                      />
                    </p>
                    <p className='l-nav_label'>MANDARIN ORANGE</p>
                  </a>
                </li>
                <li className='l-nav_item'>
                  <a href='#autumn' className='l-nav_box'>
                    <p className='l-nav_thumb'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/scarlet_red.jpg'
                        alt='SCARLET RED'
                      />
                    </p>
                    <p className='l-nav_label'>SCARLET RED</p>
                  </a>
                </li>
                <li className='l-nav_item'>
                  <a href='#winter' className='l-nav_box'>
                    <p className='l-nav_thumb'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/ash_blue.jpg'
                        alt='ASH BLUE'
                      />
                    </p>
                    <p className='l-nav_label'>ASH BLUE</p>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className='l-sections'>
            <section className='l-section'>
              <div id='spring' className='u-anchor'></div>
              <div className='l-section_inner u-inner'>
                <div className='l-section-top'>
                  <div className='l-section-top_back'>
                    <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_02.jpg' alt='FOREST GREEN' />
                  </div>
                  <div className='l-section-top_front'>
                    <h2 className='l-section-top_title'>Spring</h2>
                    <h3 className='l-section-top_sub_title'>Season of beginnings</h3>
                    <p>
                      A spring forest painted in deep green hues,
                      <br className='u-hidden_sp' />
                      radiating with the glow of new life.
                    </p>
                  </div>
                </div>
                <div className='l-flex'>
                  <div className='l-flex_aside'>
                    <p className='l-flex_visual'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/forest_green.jpg'
                        alt='FOREST GREEN'
                      />
                    </p>
                    <p className='l-flex_visual_caption'>Lavatory color : FOREST GREEN</p>
                  </div>
                  <div className='l-flex_main'>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW630J_green_GE_PN.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW630J#FRG</dt>
                          <dd className='l-data_body'>TLG07305#PN</dd>
                        </dl>
                      </div>
                    </div>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW896J_green_GF_PN.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW896J#FRG</dt>
                          <dd className='l-data_body'>TLG11306#PN</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='l-section'>
              <div id='summer' className='u-anchor'></div>
              <div className='l-section_inner u-inner'>
                <div className='l-section-top'>
                  <div className='l-section-top_back'>
                    <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_03.jpg' alt='FOREST GREEN' />
                  </div>
                  <div className='l-section-top_front'>
                    <h2 className='l-section-top_title'>Summer</h2>
                    <h3 className='l-section-top_sub_title'>Season of vitality</h3>
                    <p>
                      Bright summer rays,
                      <br className='u-hidden_sp' />
                      igniting a natural swell of energy from within.
                    </p>
                  </div>
                </div>
                <div className='l-flex'>
                  <div className='l-flex_aside'>
                    <p className='l-flex_visual'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/mandarin_orange.jpg'
                        alt='FOREST GREEN'
                      />
                    </p>
                    <p className='l-flex_visual_caption'>Lavatory color : MANDARIN ORANGE</p>
                  </div>
                  <div className='l-flex_main'>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW630J_orange_GR_BBR.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW630J#MDR</dt>
                          <dd className='l-data_body'>TLG02308#BBR</dd>
                        </dl>
                      </div>
                    </div>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW896J_orange_GM_BN.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW896J#MDR</dt>
                          <dd className='l-data_body'>TLG09305#BN</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='l-section'>
              <div id='autumn' className='u-anchor'></div>
              <div className='l-section_inner u-inner'>
                <div className='l-section-top'>
                  <div className='l-section-top_back'>
                    <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_04.jpg' alt='FOREST GREEN' />
                  </div>
                  <div className='l-section-top_front'>
                    <h2 className='l-section-top_title'>Autumn</h2>
                    <h3 className='l-section-top_sub_title'>Season of plenty</h3>
                    <p>
                      The joy of vibrant autumn leaves and ripe fruit,
                      <br className='u-hidden_sp' />
                      evoking a sense of happiness and calm.
                    </p>
                  </div>
                </div>
                <div className='l-flex'>
                  <div className='l-flex_aside'>
                    <p className='l-flex_visual'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/scarlet_red.jpg'
                        alt='FOREST GREEN'
                      />
                    </p>
                    <p className='l-flex_visual_caption'>Lavatory color : SCARLET RED</p>
                  </div>
                  <div className='l-flex_main'>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW630J_red_GB_BGP.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW630J#SCR</dt>
                          <dd className='l-data_body'>TLG10305#BGP</dd>
                        </dl>
                      </div>
                    </div>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW896J_red_GO_PFG.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW896J#SCR</dt>
                          <dd className='l-data_body'>TLG01307#PFG</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className='l-section'>
              <div id='winter' className='u-anchor'></div>
              <div className='l-section_inner u-inner'>
                <div className='l-section-top'>
                  <div className='l-section-top_back'>
                    <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_05.jpg' alt='FOREST GREEN' />
                  </div>
                  <div className='l-section-top_front'>
                    <h2 className='l-section-top_title'>Winter</h2>
                    <h3 className='l-section-top_sub_title'>Season of serenity</h3>
                    <p>
                      The mystical silver tint of a snow-blanketed land,
                      <br className='u-hidden_sp' />
                      inspiring inner peace and clarity.
                    </p>
                  </div>
                </div>
                <div className='l-flex'>
                  <div className='l-flex_aside'>
                    <p className='l-flex_visual'>
                      <img
                        src='/assets/global/lavatory/four_seasons/assets/img/colors/space/ash_blue.jpg'
                        alt='FOREST GREEN'
                      />
                    </p>
                    <p className='l-flex_visual_caption'>Lavatory color : ASH BLUE</p>
                  </div>
                  <div className='l-flex_main'>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW630J_blue_GB_BGP.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW630J#ASB</dt>
                          <dd className='l-data_body'>TLG10305#BGP</dd>
                        </dl>
                      </div>
                    </div>
                    <div className='l-flex_item'>
                      <p className='l-flex_thumb'>
                        <img
                          src='/assets/global/lavatory/four_seasons/assets/img/colors/faucet/LW896J_blue_GA_BGP.png'
                          alt='FOREST GREEN'
                        />
                      </p>
                      <div className='l-flex_detail'>
                        <dl className='l-data'>
                          <dt className='l-data_head'>LW896J#ASB</dt>
                          <dd className='l-data_body'>TLG04307#BGP</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className='l-series-link'>
            <div className='l-series-link_inner u-inner'>
              <div className='l-series-link_container'>
                <a href='../'>
                  <img src='/assets/global/lavatory/four_seasons/assets/img/hero_bg_06.jpg' alt='' />
                </a>
                <img src='/assets/global/lavatory/assets/img/hero_title_matte.svg' alt='Matte Color Editions' />
              </div>
              <div className='l-series-link_caption'>
                <span>
                  Matte texture with minimal shine.
                  <br />
                  The Matte Color Editions offer a sophisticated palette <br className='u-hidden_sp' />
                  of black, white, beige and gray.
                </span>
              </div>
              <div className='l-flex_more l-button'>
                <a href='../' className='l-button_box'>
                  <span className='l-button_label'>See more</span>
                </a>
              </div>
            </div>
          </section>

          <div className='l-banners'>
            <div className='l-banners_inner u-inner'>
              <div className='l-banner l-banner--type_faucet-lavatory'>
                <a href='../../gb-faucet/planning/faucet-lavatory/' className='l-banner_box'>
                  <div className='l-banner_front'>
                    <div className='l-banner_main'>
                      <p className='l-banner_label'>
                        <img
                          src='/assets/global/lavatory/assets/img/banner/faucet-lavatory_label.svg'
                          alt='Faucet / LAVATORY Planning'
                          className='u-hidden_sp'
                        />
                        <img
                          src='/assets/global/lavatory/assets/img/banner/faucet-lavatory_label@sp.svg'
                          alt='Faucet / LAVATORY Planning'
                          className='u-display_sp'
                        />
                      </p>
                      <p className='l-banner_button u-hidden_sp'>
                        <img
                          src='/assets/global/lavatory/assets/img/banner/faucet-lavatory_button.png'
                          alt='Try Plannning'
                        />
                      </p>
                    </div>
                  </div>
                  <div className='l-banner_back'>
                    <img
                      src='/assets/global/lavatory/assets/img/banner/faucet-lavatory_bg.jpg'
                      alt='Faucet / LAVATORY Planning'
                      className='u-hidden_sp'
                    />
                    <img
                      src='/assets/global/lavatory/assets/img/banner/faucet-lavatory_bg@sp.jpg'
                      alt='Faucet / LAVATORY Planning'
                      className='u-display_sp'
                    />
                  </div>
                </a>
              </div>
              <div className='l-banner l-banner--type_inspiration'>
                <a href='../../inspiration/' className='l-banner_box'>
                  <div className='l-banner_front'>
                    <div className='l-banner_main'>
                      <p className='l-banner_label'>INSPIRATION</p>
                    </div>
                  </div>
                  <div className='l-banner_back'>
                    <img src='/assets/global/lavatory/assets/img/banner/inspiration_bg.jpg' alt='TOTO INSPIRATION' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default En;

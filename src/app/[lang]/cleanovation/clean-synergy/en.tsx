"use client";

import Link from 'next/link';

const En = () => {
  return (
    <div className='page'>
      <section className='uq_cleanovation' id='texhnology_design'>
        <div className='uq_cleanovation__kv'>
          <div className='kv--mv kv_cs'>
            <div className='kv--logo cs'>
              <img
                src='/assets/global/cleanovation/images/clean-synergy_logo.svg'
                alt='CLEAN SYNERGY Technology & Design'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section products txtalign-c movie-section clean-s'>
        <header className='section__header innerEl-tight'>
          <h2 className='section__title'>FEATURED</h2>
        </header>
        <div className='featured-content innerEl-tight'>
          <p className='featured-text'>
            Flushing performance is the most important function of a toilet.
            <br />
            Discover the power of flush that can only be achieved by TORNADO FLUSH.
          </p>
        </div>

        <style jsx>{`
          .movie__inner.stack {
            display: flex;
            justify-content: center;
            gap: 20px;
          }
        `}</style>

        <div className='movie__inner stack'>
          <div>
            <div className='video-container'>
              <Link href='/en/cleanovation/clean-synergy/video/tornado-flush' className='video-link'>
                <img src='/assets/global/cleanovation/images/tornado_flush_video1.png' alt='TORNADO FLUSH demonstration' />
              </Link>
            </div>
            <p className='video-caption'>MISSION of TORNADO FLUSH</p>
          </div>
          <div>
            <div className='video-container'>
              <Link href='/en/cleanovation/clean-synergy/video/innovation-story' className='video-link'>
                <img src='/assets/global/cleanovation/images/clean_synergy__mov.png' alt='TORNADO FLUSH innovation story' />
              </Link>
            </div>
            <p className='video-caption'>Innovation Story</p>
          </div>
        </div>
        
        {/* <header className='section__header innerEl-tight nth2'>
          <h2 className='section__title'>PRESENTATION MOVIE</h2>
        </header>
        <div className='movie__inner stack'>
          <a id='mov02' href='6284944962001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img
              src='/assets/global/cleanovation/images/clean_synergy__mov02.jpg'
              alt='PLAY PRESENTATION MOVIE CLEAN SYNERGY'
            />
          </a>
          <a id='mov03' href='6284942855001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img
              src='/assets/global/cleanovation/images/clean_synergy__mov03.jpg'
              alt='PLAY PRESENTATION MOVIE CLEAN DESIGN'
            />
          </a>
        </div> */}
      </section>

      {/* <!--
        <div className="movie2" id="texhnology_movie">
            <div className="movie__inner">
                <a href="6236562797001" className="mainv-play no-barba" data-modal-open>
                    <img  src="/assets/global/cleanovation/images/clean_synergy__mov.jpg" alt="">
                </a>
            </div>
        </div>
        --> */}

      <section className='section wiFull m9vw'>
        <div className='wiFull__inner innerEl-tight'>
          <img
            src='/assets/global/cleanovation/images/clean-synergy_image_pc.jpg'
            alt='CLEAN SYNERGY Your toilet reappears clean anew every time.'
            className='pc-only'
          />
          <img
            src='/assets/global/cleanovation/images/clean-synergy_image_sp.jpg'
            alt='CLEAN SYNERGY Your toilet reappears clean anew every time.'
            className='sp-only'
          />
        </div>
      </section>

      <section className='uq_cleanovation__clean_synergy_sp'>
        <div className='uq_cleanovation__clean_synergy_sp__inner'>
          <div className='uq_cleanovation__clean_synergy_sp__list'>
            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_01.svg' alt='PREMIST' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div className='uq_cleanovation__clean_synergy_sp__dital__inner' id='premist'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <strong>PREVENTS</strong> Waste from <strong>CLINGING</strong>
                  </p>

                  <h2 className='introduction__title'>
                    <svg viewBox='0 0 58.9134 58.9127' className='svg-premist'>
                      <use xlinkHref='#svg-premist'></use>
                    </svg>
                    PREMIST
                  </h2>

                  <p className='introduction__txt'>A film of water keeps waste from clinging.</p>

                  <p className='btn-play '>
                    <a
                      id='mov04'
                      href='5848731343001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>PREMIST&nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        There is a close-up shot of the inside of the toilet bowl, and a small light on WASHLET function
                        section on the left at the back flashes. Mist sprays from near the light and a caption is
                        displayed: "PREMIST automatically sprays water over surface of the inner toilet bowl before
                        every use." PREMIST causes waste to slide down the surface of the bowl as a caption is
                        displayed: "Due to the ceramic's hydrophilic nature, waste washes away more easily." At the
                        end, the still-clean toilet bowl is shown.
                      </span>
                    </p>
                  </div>
                </div>

                <div className='introduction__point__lead'>
                  <p>
                    To ensure waste washes away easily, <br />
                    a film of water keeps waste from clinging to the toilet bowl.
                    <br />
                    <br />
                    PREMIST automatically sprays water <br />
                    over the surface of the inner toilet bowl before every use. <br />
                    Due to the ceramic's hydrophilic nature, waste washes away more easily.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area' style={{ justifyContent: 'center' }}>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/premist03_2@2x.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>

            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_02.svg' alt='CEFIONTECT' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div className='uq_cleanovation__clean_synergy_sp__dital__inner' id='cefiontect'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <strong>FORCES</strong> Waste to <strong>SLIDE DOWN</strong>
                  </p>

                  <h2 className='introduction__title'>
                    <svg viewBox='0 0 58.9134 58.9127' className='svg-cefiontect'>
                      <use xlinkHref='#svg-cefiontect'></use>
                    </svg>
                    CEFIONTECT
                  </h2>

                  <p className='introduction__txt'>
                    Ultra-smooth ceramic leaves
                    <br />
                    nowhere for waste to cling.
                  </p>

                  {/* <!-- <p className="btn-play">
            <a href="6008621059001" className="mainv-play no-barba" data-modal-open><span>PLAY MOVIE</span></a>
          </p> --> */}
                  <p className='btn-play'>
                    <a
                      id='mov05'
                      href='6008621059001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>CEFIONTECT – Forces waste to slide down &nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        The shot zooms in to a close-up shot of the inside surface of the toilet bowl, while two
                        captions are displayed: "CEFIONTECT, a unique glaze which is itself ceramic." And "CEFIONTECT is
                        extremely smooth glaze. Its microscope surface ridges are far smaller than waste particles,
                        leaving no place for waste to gain a foot-hold." A water film spreads out over the extremely
                        smooth surface, forcing waste to slide down and washing it away. A caption is displayed:
                        "CEFIONTECT is hydrophilic. Water spreads easily over the toilet bowl, so waste particles easily
                        wash away."
                      </span>
                    </p>
                  </div>
                </div>
                <div className='introduction__point__lead'>
                  <p>
                    CEFIONTECT is an ultra-smooth ceramic glaze that coats the toilet bowl.
                    <br />
                    Its microscopic surface ridges are far smaller than waste particles,
                    <br />
                    leaving no place for waste to gain a foothold. <br />
                    Extremely durable, CEFIONTECT is designed
                    <br />
                    for enduring beauty and cleanliness.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/cefiontect03@2x.png' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>
                      Eliminating the microscopic gaps
                      <br />
                      where waste hides
                    </p>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Conventional ceramic may appear perfectly smooth to the eyes, but has gaps where waste, mold and
                      bacteria hide. At just one millionth of a millimeter, CEFIONTECT's surface ridges are much tinier
                      than waste particles.
                    </p>
                  </div>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/cefiontect04@2x.jpg' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>
                      What makes CEFIONTECT
                      <br />
                      so durable?
                    </p>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Glass layers are burned onto conventional glaze, making CEFIONTECT an extremely durable material.
                    </p>
                  </div>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/cefiontect05@2x.jpg' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>
                      Water has a strong afﬁnity to
                      <br />
                      CEFIONTECT
                    </p>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Hydrophilic describes organisms and materials that attract water. CEFIONTECT is hydrophilic. Water
                      spreads easily over the toilet bowl, so waste particles easily wash away.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_03.svg' alt='TORNADO FLUSH' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div className='uq_cleanovation__clean_synergy_sp__dital__inner'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <strong>SWIRLS</strong> and <strong>ELIMINATES</strong> <br className='sp-content' />
                    Waste Entirely
                  </p>
                  <h2 className='introduction__title'>
                    <svg viewBox='0 0 58.9134 58.9127' className='svg-tornado-flush'>
                      <use xlinkHref='#svg-tornado-flush'></use>
                    </svg>
                    TORNADO FLUSH
                  </h2>

                  <p className='introduction__txt'>
                    360° cleaning power reaches every
                    <br />
                    spot using less water.
                  </p>

                  {/* <!-- <p className="btn-play">
            <a href="6008625007001" className="mainv-play no-barba" data-modal-open><span>PLAY MOVIE</span></a>
          </p> --> */}
                  <p className='btn-play'>
                    <a
                      id='mov06'
                      href='6008625007001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>TORNADO FLUSH&nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        Water in the toilet bowl swirls around, cleaning the entire surface. A caption is displayed: "
                        360° cleaning power reaches every spot using less water. The cleansing water flow of "TORNADO
                        FLUSH" swirls sideways, sending it over a long distance to attack fouling many times. As a
                        result, we have realized water saving, even while increasing energy applied to cleansing power.
                        "TORNADO FLUSH" also excels in terms of quietness. "Next there is a close-up shot of a
                        cross-section of a rimless toilet, and a caption is displayed: "The RIMLESS design leaves no
                        place for waste accumulation."
                      </span>
                    </p>
                  </div>
                </div>
                <div className='introduction__point__lead'>
                  <p>
                    TORNADO FLUSH not only cleans more effectively,
                    <br />
                    it does so quietly using less water.
                    <br />
                    Powerful streams of water merge and swirl 360 degrees,
                    <br />
                    washing every spot inside the RIMLESS toilet bowl.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/premist033@2x.jpeg' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>
                      Powerful washing where waste
                      <br />
                      accumulates most easily
                    </p>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      TORNADO FLUSH's dynamic waterjet discharges from near the front of the toilet bowl, travels in a
                      narrow channel along a hairpin curve, and with sustained water pressure thoroughly cleanses the
                      areas where waste accumulates most easily—and then washes the entire bowl clean. Exquisitely
                      high-quality ceramic makes this innovative design possible.
                    </p>
                  </div>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/premist04@2x.jpg' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      The cleansing water flow of "TORNADO FLUSH" <br />
                      swirls sideways, sending it over a long distance to attack fouling many times.
                      <br />
                      As a result, we have realized water savings, even while increasing energy applied to cleansing
                      power.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_06.svg' alt='RIMLESS' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div id='rimless' className='uq_cleanovation__clean_synergy_sp__dital__inner'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <br />
                    <br />
                  </p>

                  <h2 className='introduction__title'>
                    <img src='/assets/global/cleanovation/images/icn_rimless.png' alt='' className='rimless_icn' />
                    RIMLESS
                  </h2>

                  <p className='introduction__txt'>Cleaning your toilet is easy "with just one wipe."</p>

                  {/* <!-- <p className="btn-play">
<a href="6008625007001" className="mainv-play no-barba" data-modal-open><span>PLAY MOVIE</span></a>
</p> --> */}
                  <p className='btn-play'>
                    <a
                      id='mov07'
                      href='6258707251001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>RIMLESS&nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        A scene depicting someone cleaning a conventional toilet with a brush is shown. A caption is
                        displayed: "Do you still use a brush and cleaner to scrub stains?" After this, another caption
                        is shown: "Cleaning your toilet is easy with just one wipe." At the same time, the scene changes
                        to a rimless toilet being cleaned with one swift wipe-over. Then, after a scene showing fouling
                        building up in places under the rim of a conventional toilet where water does not reach, the
                        video switches to a scene showing the flow of water in a rimless toilet, and a caption is
                        displayed: "The RIMLESS design leaves no place for waste accumulation." Next, the video switches
                        back to a scene showing a rimless toilet being wiped down, and a caption is displayed: "Cleaning
                        your toilet is easy with just one wipe"
                      </span>
                    </p>
                  </div>
                </div>
                <div className='introduction__point__lead'>
                  <p>
                    The secret to a "powerful flush with less water"
                    <br />
                    with TORNADO FLUSH and RIMLESS design.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/premist03@2x.jpg' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      The RIMLESS design not only leaves no place for waste and germs to hide. It also makes for a much
                      easier to clean toilet.
                    </p>
                  </div>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/rimless__img02.jpg' alt='' />
                    <div className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      <span>RIMLESS / TORNADO FLUSH</span>
                      <ul>
                        <li>
                          - Water saving and power washing are made possible by water repeatedly swirling across the
                          entire toilet bowl.
                        </li>
                        <li>- The RIMLESS design leaves no place for waste accumulation.</li>
                        <li>- Thoroughly cleanses in 360 degrees.</li>
                        <li>- Quiet</li>
                      </ul>
                    </div>
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <img src='/assets/global/cleanovation/images/rimless__img03.jpg' alt='' />
                    <div className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      <span>TRADITIONAL DESIGN and FLUSH</span>
                      <ul>
                        <li>- Uses a large volume of water.</li>
                        <li>- Cleans a smaller space, as water flows only from the individual holes in the rim.</li>
                        <li>
                          - The back of the rim is difficult to clean, causing waste accumulation and bacteria growth.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_04.svg' alt='EWATER+ for WAND' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div className='uq_cleanovation__clean_synergy_sp__dital__inner' id='ewater-wand'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <strong>SUPPRESSES</strong>
                    <br />
                    the accumulation of Waste on
                    <strong>WAND</strong>
                  </p>
                  <h2 className='introduction__title'>
                    <svg viewBox='0 0 58.9134 58.9127' className='svg-ewater'>
                      <use xlinkHref='#svg-ewater'></use>
                    </svg>
                    EWATER+ <span>for WAND</span>
                  </h2>

                  <p className='introduction__txt'>
                    The wand washes itself inside and out with <br />
                    EWATER+ to maintain hygienic conditions.
                  </p>

                  <p className='btn-play'>
                    <a
                      id='mov08'
                      href='6008630997001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>EWATER＋for WAND&nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        There is a close-up shot of WASHLET's wand inside the toilet bowl. Both the inside and
                        outside of the wand are washed clean. A caption is displayed: "Washing inside and out of the
                        wand entirely just before use and it's all automatic." Water then comes out of the wand,
                        after which the wand is shown to be washing automatically, and a two-line caption is displayed:
                        "Automatically suppresses the accumulation of waste on the wand, both inside and outside." and
                        "The wand is protected by the flap, which is attached to the dry area of the seat, to keep it
                        clean."
                      </span>
                    </p>
                  </div>
                </div>
                <div className='introduction__point__lead'>
                  <p>
                    Before and after each use, the wand automatically
                    <br />
                    washes itself with EWATER+.
                    <br />
                    This thorough cleaning occurs inside the wand as well as all around the exterior.
                    <br />
                    Even when the toilet is not being used,
                    <br />
                    the wand periodically cleans itself to ensure constant hygienic conditions.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/ewater_for_wand03@2x.png' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Survey: Study the effectiveness of EWATER+ by comparing the state of cleanliness of toilets that
                      receive no cleaning versus toilets that are self-cleaned with EWATER+. No additional cleaning was
                      allowed. Survey period: One month (Feb. - Mar. 2017). Subjects: Families of four. *Results vary
                      according to usage and environmental conditions. All data collected by TOTO.
                    </p>
                  </div>
                </div>

                <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>Self-cleaning inside the mechanism</p>
                <ol className='uq_cleanovation__clean_synergy__area -pt0 -spFlex'>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForWAND_01.png'
                      alt='Before use.Self-cleans With water'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForWAND_02.png'
                      alt='During use.Self-cleans With water'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForWAND_03.png'
                      alt='After use.Self-cleanses inside and out with EWATER+'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForWAND_04.png'
                      alt='During standby.Self-cleanses inside with EWATER+'
                    />
                  </li>
                </ol>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/ewater_for_wand05@2x.png' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>Always Keeping Conditions Clean</p>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Made of high-quality waste-resistant resin and automatically sprayed with EWATER+ after each use,
                      the wand is extremely resistant to waste and stains. What's more, the wand attaches to the seat,
                      not the bowl, so waste is less likely to even reach it. Though the wand is self-cleaning, you will
                      appreciate how easily you can reach it and wipe it spotless.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_05.svg' alt='EWATER+ for BOWL' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div className='uq_cleanovation__clean_synergy_sp__dital__inner' id='ewater-bowl'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <strong>SUPPRESSES</strong> the accumulation of Waste on <strong>BOWL</strong>
                  </p>
                  <h2 className='introduction__title'>
                    <svg viewBox='0 0 58.9134 58.9127' className='svg-ewater'>
                      <use xlinkHref='#svg-ewater'></use>
                    </svg>
                    EWATER+ <span>for BOWL</span>
                  </h2>

                  <p className='introduction__txt'>EWATER+ cleans waste on the toilet bowl surface.</p>

                  {/* <!-- <p className="btn-play">
            <a href="6008625010001" className="mainv-play no-barba" data-modal-open><span>PLAY MOVIE</span></a>
          </p> --> */}
                  <p className='btn-play'>
                    <a
                      id='mov09'
                      href='6258709552001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>EWATER＋for BOWL&nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        There is a close-up shot of the inside of the toilet bowl, and a small light on WASHLET function
                        section flashes. EWATER+ sprays out from near the light onto the surface of the bowl and a
                        caption is displayed: "EWATER＋ sprays the bowl, reducing the need for harsh cleaning
                        chemicals." EWATER+ keeps the inside of the toilet bowl clean, and the inside of the toilet bowl
                        sparkles.
                      </span>
                    </p>
                  </div>
                </div>
                <div className='introduction__point__lead'>
                  <p>
                    EWATER+ washes the wand and toilet bowl where waste tend to accumulate
                    <br />
                    and produce stains that can become permanent.
                    <br />
                    Using no chemicals or cleaning agent,
                    <br />
                    EWATER+ provides peace of mind every day.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/ewater_for_bowl03@2x.png' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Survey: Study the effectiveness of EWATER+ by comparing the state of cleanliness of toilets that
                      receive no cleaning versus toilets that are self-cleaned with EWATER+. No additional cleaning was
                      allowed. Survey period: One month (Feb. - Mar. 2017). Subjects: Families of four. *Results vary
                      according to usage and environmental conditions. All data collected by TOTO.
                    </p>
                  </div>
                </div>
                <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>How EWATER+ cleans</p>
                <ol className='uq_cleanovation__clean_synergy__area -pt0 -spFlex'>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_01.png'
                      alt='Before use.PREMIST, a fine mist of ordinary water is sprayed inside the toilet'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_02.png'
                      alt='During use.Since waste is less able to adhere to a wet surface, it is more easily washed away'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_03.png'
                      alt='After use.EWATER+ is applied to wash the wand and toilet bowl'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_04.png'
                      alt='During standby.EWATER+ is automatically sprayed 8 hours after the last use'
                    />
                  </li>
                </ol>
              </div>
            </div>

            <button className='borderList js-accoBtn' aria-expanded='false'>
              <img src='/assets/global/cleanovation/images/icon_07.svg' alt='EWATER+ For UNDER SEAT' height='48' />
            </button>
            <div className='uq_cleanovation__clean_synergy_sp__dital' aria-hidden='true'>
              <div className='uq_cleanovation__clean_synergy_sp__dital__inner' id='ewater-under'>
                <div className='uq_cleanovation__clean_synergy__movie introduction__movie '>
                  <p className='introduction__lead'>
                    <strong>SUPPRESSES hard-to-see waste underneath the toilet seat</strong>
                  </p>
                  <h2 className='introduction__title'>
                    <svg viewBox='0 0 58.9134 58.9127' className='svg-ewater'>
                      <use xlinkHref='#svg-ewater'></use>
                    </svg>
                    EWATER+ <span>For UNDER SEAT</span>
                  </h2>

                  <p className='introduction__txt'>
                    EWATER+ is sprayed on the easily fouled front section
                    <br /> of the backside of the toilet seat.
                  </p>

                  {/* <!-- <p className="btn-play">
<a href="6008625010001" className="mainv-play no-barba" data-modal-open><span>PLAY MOVIE</span></a>
</p> --> */}
                  <p className='btn-play'>
                    <a
                      id='mov10'
                      href='6303786113001'
                      className='mainv-play no-barba'
                      data-modal-open
                      aria-label='Play movie'
                    >
                      <span></span>
                    </a>
                  </p>
                  <div className='transcript'>
                    <p className='stit'>
                      <span style={{ fontWeight: '400' }}>EWATER＋for UNDER SEAT&nbsp;</span>
                    </p>
                    <p>
                      <span style={{ fontWeight: '400' }}>
                        There is a close-up shot of the inside of the toilet bowl, and a small light on WASHLET function
                        part flashes. At the same time, EWATER+ sprays out. This EWATER+ ensures that the entire area
                        underneath the toilet seat stays clean by carrying large mist particles downwards into the
                        toilet bowl and small mist particles as far as the underside of the front of the toilet seat,
                        thoroughly spraying the toilet bowl.
                        <br />
                        The scene changes. The underside of a sheet that has been sprayed with EWATER+ is shown
                        side-by-side with the underside of a sheet that has not been sprayed. The condition of the two
                        sheets after two weeks have passed is then shown. The sheet sprayed with EWATER+ has no fouling,
                        while the sheet that was not sprayed has noticeable fouling.
                      </span>
                    </p>
                  </div>
                </div>
                <div className='introduction__point__lead'>
                  <p>
                    To maintain cleanliness, EWATER+ is sprayed on the easily fouled
                    <br />
                    underneath the toilet seat with each use, to the front edge.
                    <br />
                    This helps suppress urine and other waste from becoming yellow stains,
                    <br />
                    for long-lasting cleanliness. A quick manual spray before
                    <br />
                    cleaning allows you to remove waste with a light wipe.
                  </p>
                </div>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <img src='/assets/global/cleanovation/images/ewater_for_under@2x.png' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      Survey: Evaluation of waste at the front of the underside of the toilet seat with and without use
                      of EWATER＋ Usage conditions : A number of uses equivalent to usage for two weeks by a family of
                      four (without cleaning) *Results vary according to usage and environmental conditions. All data
                      collected by TOTO.
                      <br />
                      The dotted lines in the figure show the area over which EWATER+ is sprayed.
                    </p>
                  </div>
                </div>
                <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>How EWATER+ cleans</p>
                <ol className='uq_cleanovation__clean_synergy__area -pt0 -spFlex'>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_01.png'
                      alt='Before use.PREMIST, a fine mist of ordinary water is sprayed inside the toilet'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_02.png'
                      alt='During use.Since waste is less able to adhere to a wet surface, it is more easily washed away'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_03.png'
                      alt='After use.EWATER+ is applied to wash the wand and toilet bowl'
                    />
                  </li>
                  <li>
                    <img
                      src='/assets/global/cleanovation/images/ewaterPlusForBOWL_04.png'
                      alt='During standby.EWATER+ is automatically sprayed 8 hours after the last use'
                    />
                  </li>
                </ol>
                <div className='uq_cleanovation__clean_synergy__area'>
                  <div className='uq_cleanovation__clean_synergy__txtImg'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--ttl'>
                      EWATER+ reaches underneath the toilet seat
                    </p>
                    <img src='/assets/global/cleanovation/images/ewater_for_under_side@2x.png' alt='' />
                  </div>
                  <div className='uq_cleanovation__clean_synergy__txtArea'>
                    <p className='uq_cleanovation__clean_synergy__txtArea--lead'>
                      EWATER+ is sprayed throughout the toilet bowl, with large droplets covering the bowl surface and
                      small droplets carried by air currents beneath the toilet seat, to its front edge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className='borderList is-nonIcon'></p>
          </div>
        </div>
      </section>

      <section id='cs_fd' className='section wiFull'>
        <div className='wiFull__inner innerEl-tight'>
          <div className='ttl'>Increasing Application of EWATER+</div>
          <p className='ld'>24 hours a day, 365 days a year. Your toilet reappears clean anew every time.</p>
          <div className='stack'>
            <div>
              <div className='icn_stack'>
                <figure>
                  <img src='/assets/global/cleanovation/images/cs_icn01.png' alt='' />
                </figure>
                <figure>
                  <img src='/assets/global/cleanovation/images/cs_icn02.png' alt='' />
                </figure>
              </div>
              <figure>
                <img src='/assets/global/cleanovation/images/cs_img01.jpg' alt='touchless faucet' />
              </figure>
            </div>
            <div>
              <div className='icn_stack'>
                <figure>
                  <img src='/assets/global/cleanovation/images/cs_icn01.png' alt='' />
                </figure>
                <figure>
                  <img src='/assets/global/cleanovation/images/cs_icn02.png' alt='' />
                </figure>
              </div>
              <figure>
                <img src='/assets/global/cleanovation/images/cs_img02.jpg' alt='urinal' />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className='section products txtalign-c'>
        <header className='section__header innerEl-tight'>
          <h2 className='section__title'>PRODUCT</h2>
        </header>
        <div className='products__inner innerEl-tight'>
          <div className='panels -fit' aria-label='productsItems'>
            <div className='panels__frame'>
              <div className='panels__item -col2'>
                <Link href='/en/neorestcollections/'>
                  <figure className='panels__img'>
                    <span className='zoomPanel'>
                      <img src='/assets/global/global_common_2019/index/images/img-pro-neorest-col.jpg' alt='' />
                    </span>
                    <figcaption className='panels__caption'>
                      <span className='lineout -none'>NEOREST COLLECTIONS</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
              <div className='panels__item -col2'>
                <Link href='/en/neorest/'>
                  <figure className='panels__img'>
                    <span className='zoomPanel'>
                      <img src='/assets/global/cleanovation/images/neorest_cleanovasion.jpg' alt='' />
                    </span>
                    <figcaption className='panels__caption'>
                      <span className='lineout -none'>NEOREST</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
              <div className='panels__item -col3'>
                <Link href='/en/washletplus/'>
                  <figure className='panels__img'>
                    <span className='zoomPanel'>
                      <img src='/assets/global/global_common_2019/index/images/img-pro-washlet-p.jpg' alt='' />
                    </span>
                    <figcaption className='panels__caption'>
                      <span className='lineout -none'>WASHLET+</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
              <div className='panels__item -col3'>
                <Link href='/en/washlet/'>
                  <figure className='panels__img'>
                    <span className='zoomPanel'>
                      <img src='/assets/global/global_common_2019/index/images/img-pro-washlet.jpg' alt='' />
                    </span>
                    <figcaption className='panels__caption'>
                      <span className='lineout -none'>WASHLET</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
              <div className='panels__item -col3'>
                <Link href='/en/gb_faucet/?anc=touchless-faucet'>
                  {/* <!-- <a href="/en/gb_faucet/#touchless-faucet"> --> */}
                  <figure className='panels__img'>
                    <span className='zoomPanel'>
                      <img src='/assets/global/global_common_2019/index/images/img-pro-touchless-faucet.jpg' alt='' />
                    </span>
                    <figcaption className='panels__caption'>
                      <span className='lineout -none'>TOUCHLESS FAUCET</span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='uq_cleanovation--link' id='link'>
        <div className='uq_cleanovation--link__inner'>
          <ul>
            <li>
              <Link href='/en/cleanovation' className='js-scroll'>
                <picture className='kv--mv__image'>
                  <source media='(max-width: 750px)' srcSet='/assets/global/cleanovation/images/cleanovation--sp.png' />
                  <img
                    srcSet='/assets/global/cleanovation/images/cleanovation@2x.png 2x'
                    src='/assets/global/cleanovation/images/cleanovation.png'
                    alt='TOTO CLEANOVATION'
                  />
                </picture>
              </Link>
            </li>
            <li>
              <Link href='/en/cleanovation/washlet' className='js-scroll is-wachlet'>
                <picture className='kv--mv__image'>
                  <source media='(max-width: 750px)' srcSet='/assets/global/cleanovation/images/washilet--sp.png' />
                  <img
                    srcSet='/assets/global/cleanovation/images/washilet@2x.png 2x'
                    src='/assets/global/cleanovation/images/washilet.png'
                    alt="Let's Wash with TOTO WASHLET"
                  />
                </picture>
              </Link>
            </li>
            <li>
              <Link href='/en/cleanovation/touchless' className='js-scroll'>
                <picture className='kv--mv__image'>
                  <source media='(max-width: 750px)' srcSet='/assets/global/cleanovation/images/touchless--sp.png' />
                  <img
                    srcSet='/assets/global/cleanovation/images/touchless_link@2x.png 2x'
                    src='/assets/global/cleanovation/images/touchless_link.png'
                    alt='The security of TOUCHLESS'
                  />
                </picture>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default En;

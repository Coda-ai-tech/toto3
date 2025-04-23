/* eslint-disable */
'use client'
import Head from "next/head";
import { useState } from "react";
const En = () => {
  const [isOpenVideoPopup, setIsOpenVideoPopup] = useState(false);
  const handleVideoPopupClose = () => setIsOpenVideoPopup(false);
  const handleVideoPopupOpen = () => setIsOpenVideoPopup(true);

  return (
    <div id='purposeTop' className='page purpose'>
      <main className='main'>
        <div id='hero'>
          <div className='hero_container'>
            <section id='fv'>
              <div className='pc'>
                <video
                  id='video_pc'
                  playsInline
                  muted
                  autoPlay
                  loop
                  src='/assets/global/purpose/images/top/kv_pc.mp4'
                ></video>
              </div>
              <div className='sp'>
                <video
                  id='video_sp'
                  playsInline
                  muted
                  autoPlay
                  loop
                  src='/assets/global/purpose/images/top/kv_sp.mp4'
                ></video>
              </div>
            </section>
            <div className='kvcontrol'>
              <ul>
                <li className='play'>
                  <button type='button' title='Play'>
                    <img src='/assets/global/purpose/images/top/btn_play.png' alt='' />
                  </button>
                </li>
                <li className='pause'>
                  <button type='button' title='Pause'>
                    <img src='/assets/global/purpose/images/top/btn_pause.png' alt='' />
                  </button>
                </li>
              </ul>
            </div>

            <h1 className='hero_shoulder'>BRAND PURPOSE</h1>
            <p></p>
            <div className='inner'>
              <p className='hero_copy'>
                <picture>
                  <source srcSet='/assets/global/purpose/images/top/title_sp.svg' media='(max-width:768px)' />
                  <img src='/assets/global/purpose/images/top/title.svg' alt='' />
                </picture>
              </p>
            </div>
            <div className='hero_play' tabIndex={0} role='button'>
              <p>PLAY MOVIE</p>
            </div>
            <p className='hero_scroll'>SCROLL</p>
          </div>
        </div>
        <div id='toto-stories'>
          <div className='inner'>
            <p className='toto-stories-txt'>
              TOTO STORIES - Introducing a series of various initiatives that embody our brand purpose.
            </p>

            <div className='movie__inner stack'>
              <div>
                <a onClick={e => e.preventDefault()} href='6318265784112' className='mainv-play no-barba' data-modal-open=''>
                  <img src='/assets/global/purpose/images/Sustainable_Horizontal_noTitle.jpg' alt='' />
                </a>
                <p>
                  TOTO’s <br className='pc-only' />
                  Sustainable Products
                </p>
              </div>
              <div>
                <a onClick={e => e.preventDefault()} href='6318268745112' className='mainv-play no-barba' data-modal-open=''>
                  <img src='/assets/global/purpose/images/Water_Saving_Horizontal_noTitle.jpg' alt='' />
                </a>
                <p>
                  Achieving Water Saving
                  <br className='pc-only' /> and Cleanliness
                </p>
              </div>
              <div>
                <a onClick={e => e.preventDefault()} href='6346311668112' className='mainv-play no-barba' data-modal-open=''>
                  <img src='/assets/global/purpose/images/after_sales_service_noTitle.jpg' alt='' />
                </a>
                <p>
                  TOTO’s After-Sales 
                  <br className="pc-only" /> Service
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='brandPurpose'>
          <div className='inner'>
            <h2 className=''>
              As We Have Been, <br className='sp' />
              As We Will Be
            </h2>
            <p className=''>
              “Providing a healthy and civilized way of life”—This was the vision of our founder, and it has been
              continuously passed on to each of our employees as the TOTO Group Corporate Philosophy.
              <br />
              This vision has lasted over a century and serves as the center of the TOTO Group’s management and the
              touchstone for our craftsmanship and sales activities. <br />
              We will work to ensure this vision gets passed along to future generations by delivering safe and reliable
              TOTO-brand products and services to customers around the world. In doing so, we will “create an enriched
              and more comfortable lifestyle and culture built on our plumbing products.” This is a key facet of the
              TOTO Group Corporate Philosophy.
            </p>
            <div className='slider'>
              <div className='slider-inner'>
                <div className='slider-group'>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide1.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide2.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide3.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide4.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide5.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide7.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide6.jpg' alt='' />
                  </div>
                </div>
                <div className='slider-group'>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide1.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide2.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide3.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide4.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide5.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide7.jpg' alt='' />
                  </div>
                  <div className='slider-item'>
                    <img src='/assets/global/purpose/images/top/lead_slide6.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className='slider_control play'>
            <li className='play'>
              <button type='button' title='Play'>
                <img src='/assets/global/purpose/images/top/btn_play.png' alt='' />
              </button>
            </li>
            <li className='pause'>
              <button type='button' title='Pause'>
                <img src='/assets/global/purpose/images/top/btn_pause.png' alt='' />
              </button>
            </li>
          </ul>
        </div>
        <div id='message'>
          <div className='photo'>
            <img
              src='/assets/global/purpose/images/top/message_tamura.jpg'
              alt='President, Representative Director Shinya Tamura'
            />
          </div>
          <div className='text'>
            <div className='inner'>
              <h2 className='borderAccent'>MESSAGE FROM THE PRESIDENT</h2>
              <br/>
              <h5>President,
                <br/>
              Representative Director
              </h5>
              <h3>Shinya Tamura</h3>
              <div className='trigger' tabIndex={0} role='button'>
                READ MORE
              </div>
            </div>
          </div>
        </div>
        <div id='strategy'>
          <div className='inner'>
            <h2 className='borderAccent'>STRATEGY</h2>
            <h3 className=''>Shared Value Creation Strategy TOTO WILL2030</h3>
            <p className=''>
              The TOTO Group formulated the Shared Value Creation Strategy TOTO WILL2030 with a focus on achieving 
              a carbon-neutral and sustainable society by 2050, and aims to realize a sustainable society and achieve clean, 
              comfortable, and healthy lifestyles by 2030.
              <br />
              With the important material issues of Cleanliness and Comfort; Wellness, Environment, 
              and Relationships, we are promoting sustainability management, aiming to create an enriched and comfortable 
              future society that has no impact on the global environment and to achieve economic growth. 
              As a result of these efforts, we will contribute to the SDGs through WILL2030.
            </p>
            {/* <div className='water'>
              <picture>
                <source srcSet='/assets/global/purpose/images/top/strategy_water_sp.png' media='(max-width:768px)' />
                <img
                  src='/assets/global/purpose/images/top/strategy_water_pc.png'
                  alt="Water, Earth & a better Tomorrow  At TOTO, we're committed to improving life and the environment for a thriving future. Our production processes and products save water and energy, while reducing impact on the environment. We provide cleanliness and comfort while building relationships that enrich life. Water, Earth & a better Tomorrow All our group companies are dedicated to building a healthier and more sustainable tomorrow."
                />
              </picture>
              <div className='btn-hover-blue right'>
                <a
                  href='https://jp.toto.com/en/company/csr/vision/?utm_source=gbsite&utm_medium=gbsite&utm_campaign=gbsite'
                  target='_blank'
                >
                  TOTO Global Environmental Vision
                  <svg viewBox='0 0 15.98 16.01'>
                    <path d='M15.98 11.77h-2.6V4.5L1.88 16.01.04 14.17l11.5-11.52H4.28V.05l11.6.06V.2h.09Z' />
                  </svg>
                </a>
              </div>
            </div> */}
            <div className='sdgs'>
              <img src='/assets/global/purpose/images/top/sdgs_logo.png' alt='SUSTAINABLE DEVELOPMENT GOALS' />
              <img
                src='/assets/global/purpose/images/top/sdgs.png'
                alt='SDGs No.3 No.5 No.6 No.7 No.8 No.11 No.12 No.13 No.15 No.17'
              />
            </div>
            <h4 className=''>MATERIALITY</h4>
          </div>
          <div className='entrance'>
            <div className='scroller'>
              <div className='scroller-inner'>
                <a href='/en/purpose/cleanliness/'>
                  <h3>
                    Cleanliness <br />
                    and Comfort
                  </h3>
                  <div className='read-more'>READ MORE</div>
                </a>
                <a href='/en/purpose/environment/'>
                  <h3>Environment</h3>
                  <div className='read-more'>READ MORE</div>
                </a>
                <a href='/en/purpose/relationships/'>
                  <h3>Relationships</h3>
                  <div className='read-more'>READ MORE</div>
                </a>
              </div>
            </div>
          </div>
          <div className='scroller-bar'>
            <div className='scroller-bar-inner'></div>
          </div>
        </div>
        <div id='sustainable'>
          <div className='inner'>
            <section className='header'>
              <h2 className='borderAccent'>SUSTAINABLE PRODUCTS</h2>
              <h3 className=''>Sustainable Products That Balance Cleanliness, Comfort, and the Environment</h3>
              <p className=''>
                Over the last 100 years, TOTO has provided products that bring cleanliness and comfort, as well as{' '}
                <br className='pc' />
                eco-friendly products. Under WILL2030, we defined products that realize both of these requirements as
                sustainable products. By popularizing sustainable products around the world, we will contribute to
                realizing an enriched and comfortable society that is environmentally friendly.
              </p>
              <picture>
                <source srcSet='/assets/global/purpose/images/top/sustainable_1_sp.png' media='(max-width:768px)' />
                <img
                  className='graph1'
                  style={{ border: 'none !important' }}
                  src='/assets/global/purpose/images/top/sustainable_1_pc.png'
                  alt=''
                />
              </picture>
            </section>

            <section className='example'>
              <h3>Examples of Standards for Selecting Sustainable Products </h3>
              <article>
                <h4>Toilets(for homes)</h4>
                <div>
                  <figure>
                    <img src='/assets/global/purpose/images/top/sus_sample01.png' alt='' />
                    <p>NEOREAT LS</p>
                  </figure>
                  <div className='exp'>
                    <div>
                      <h5 className='cleanness_ttl'>Cleanliness and Comfort</h5>
                      <dl>
                        <dt>・CEFIONTECT</dt>
                        <dd>
                          Maintains cleanliness and comfort since dirt does not stick to the smooth ceramic surface and
                          is easily cleaned away.
                        </dd>

                        <dt>・TORNADO FLUSH</dt>
                        <dd>
                          Maintains cleanliness and comfort since it uses a small amount of water due to ﬂowing in the
                          same manner as a whirlpool.
                        </dd>

                        <dt>・EWATER+</dt>
                        <dd>
                          Maintains cleanliness and comfort by breaking down micro scopic bacteria and dirt through
                          automatic disinfection of the toilet seat and nozzle.
                        </dd>
                      </dl>
                    </div>
                    <div>
                      <h5 className='environment_ttl'>Environment</h5>
                      <dl>
                        <dt>・Water saving: Less than 4.8L per large flush</dt>
                        <dd>(For NEOREST LS, ﬂoor drainage is 3.8L and wall drainage is 4.8L)</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h4>Bathrooms</h4>
                <div>
                  <figure>
                    <img src='/assets/global/purpose/images/top/sus_sample02.png' alt='' />
                    <p>SYNLA R-type</p>
                  </figure>
                  <div className='exp'>
                    <div>
                      <h5 className='cleanness_ttl'>Cleanliness and Comfort</h5>
                      <dl>
                        <dt>・Raku-Raku Hokkarari ﬂooring</dt>
                        <dd>
                          Maintains cleanliness and comfort by being easy to clean and quick-drying due to special ﬂoor
                          treatment and a regu larly engraved pattern.
                        </dd>

                        <dt>・Floor wiper cleaning with EWATER+</dt>
                        <dd>Maintains cleanliness and comfort of the entire ﬂoor with the touch of a button.</dd>
                      </dl>
                    </div>
                    <div>
                      <h5 className='environment_ttl'>Environment</h5>
                      <dl>
                        <dt>・Energy saving: MAHOBIN heat-retaining bathtubs</dt>
                        <dd>
                          Maintains warmth of water by surrounding the bathtub with heat-insulating materials and an
                          insulating lid.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </article>

              <article>
                <h4>Wash basin faucets</h4>
                <div>
                  <figure>
                    <img src='/assets/global/purpose/images/top/sus_sample03.png' alt='' />
                    <p>Faucets (single lever)</p>
                  </figure>
                  <div className='exp'>
                    <div>
                      <h5 className='cleanness_ttl'>Cleanliness and Comfort</h5>
                      <dl>
                        <dt>・Switching between hot and cold water and ease of operation</dt>
                        <dd>Enables comfortable operation through a single lever.</dd>

                        <dt>・Floor wiper cleaning with EWATER+</dt>
                        <dd>Maintains cleanliness and comfort of the entire ﬂoor with the touch of a button.</dd>
                      </dl>
                    </div>
                    <div>
                      <h5 className='environment_ttl'>Environment</h5>
                      <dl>
                        <dt>・Hot water saving: Eco Single</dt>
                        <dd>
                          Enables the reduction of hot water use compared to previous models since the barrier between
                          hot and cold water can be felt with a click.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            <section className='composition-ratio'>
              <div className='text'>
                <h3>We aim for sustainable products to make up 83% of our product composition.</h3>
                <p>
                Sustainable Products are unique to TOTO, balancing Cleanliness and Comfort; Wellness and the environment.{' '}
                  <br className='pc' />
                  In fiscal 2023, sustainable products made up 75% of our product composition. We aim to achieve 80% by fiscal 2026 and 83% by fiscal 2030.{' '}
                </p>
              </div>
              <table className='targets_table'>
                <thead>
                  <tr>
                    <th className='bgblue'>KPI</th>
                    <th className='bggreen'>
                    FY2023
                      <br className='sp' />
                      <span>(Results)</span>
                    </th>
                    <th className='bggreen2'>
                    FY2026
                      <br className='sp' />
                      <span>(Targets)</span>
                    </th>
                    <th className='bggreen3'>
                      FY2030
                      <br className='sp' />
                      <span>(Targets)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Percantage of sustainable Products</th>
                    <td>
                      <div className='result'>
                        75<span>%</span>
                      </div>
                      {/* <ul>
                        <li>
                          <dl>
                            <dt>Japan</dt>
                            <dd>77%</dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>Overseas</dt>
                            <dd>63%</dd>
                          </dl>
                        </li>
                      </ul> */}
                    </td>
                    <td>
                      <div className='result sec2'>
                        80<span>%</span>
                      </div>
                      {/* <ul>
                        <li>
                          <dl>
                            <dt>Japan</dt>
                            <dd>80%</dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>Overseas</dt>
                            <dd>64%</dd>
                          </dl>
                        </li>
                      </ul> */}
                    </td>
                    <td>
                      <div className='result sec3'>
                        83<span>%</span>
                      </div>
                      {/* <ul>
                        <li>
                          <dl>
                            <dt>Japan</dt>
                            <dd>85%</dd>
                          </dl>
                        </li>
                        <li>
                          <dl>
                            <dt>Overseas</dt>
                            <dd>70%</dd>
                          </dl>
                        </li>
                      </ul> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
        <div id='links'>
          <div className='links_title'>
            <h2 className='borderAccent'>LINKS</h2>
          </div>
          <ul className='banners'>
            <li className='bnr01'>
              <a
                href='https://jp.toto.com/en/company/profile/?utm_source=gbsite&utm_medium=gbsite&utm_campaign=gbsite'
                target='_blank'
              >
                <div className='bnrInner'>
                  <h3>COMPANY DETAILS</h3>
                </div>
              </a>
            </li>
            <li className='bnr02'>
              <a
                href='https://jp.toto.com/en/company/csr/?utm_source=gbsite&utm_medium=gbsite&utm_campaign=gbsite'
                target='_blank'
              >
                <div className='bnrInner'>
                  <h3>Sustainability</h3>
                </div>
              </a>
            </li>
            <li className='bnr03'>
              <a
                href='https://jp.toto.com/en/company/profile/philosophy/vision/pdf/TOTO_WILL2030_en.pdf'
                target='_blank'
              >
                <div className='bnrInner'>
                  <h3 className='two-lined'>
                    New Shared Value Creation Strategy <br className='pc' />
                    TOTO WILL2030
                  </h3>
                </div>
              </a>
            </li>
            <li className='bnr04'>
              <a href='https://jp.toto.com/en/company/profile/library/' target='_blank'>
                <div className='bnrInner'>
                  <h3>INTEGRATED REPORT</h3>
                </div>
              </a>
            </li>
          </ul>
          <div className='questionnaire'>
            <a href='https://krs.bz/toto/m?f=498' className='btn' target='_blank'>
              QUESTIONNAIRE
            </a>
            <p>We would like to hear from you.</p>
          </div>
        </div>
        <div id='modalMessage'>
          <div className='modal_container'>
            <div className='modal_inner'>
              <div className='modal_scroller'>
                <div className='modal_scroller_inner' tabIndex={0} role='button'>
                  <p>
                  TOTO's founder, Kazuchika Okura, sent a letter to the Company's second president, containing the words: “ 
                  Kindness must always come first. Your goal should be to provide good products and satisfy the customer. 
                  Accomplish that, and profit and prosperity will follow.” This message has been passed down from generation 
                  to generation of TOTO presidents as the words of our forebears. As TOTO's 18th president, I will also 
                  position this way of thinking at the core of my management activities as I lead the approximately 35,000
                   TOTO Group employees working around the world as we seek to increase the number of TOTO fans worldwide.
                  </p>
                  <br />
                  <p>
                  I believe that the TOTO Group's greatest strength is its people. I believe that TOTO's pride and source of 
                  corporate value is that all group employees around the world—from research and product development to 
                  production, sales, and indirect departments—share the philosophy of “ All for the customer;” and that they 
                  think of their colleagues and help each other to improve.
                  </p>
                  <p>
                  The environment surrounding TOTO is changing rapidly, and it is clear that this situation will only continue
                   to accelerate in the future. To keep up with these changes and pace of change, I would like us to make 
                   decisions more quickly than ever before, without fear of failure, and place importance on communication
                    in order to achieve this.
                  </p>
                  <p>
                  The TOTO Group's TOTO WILL 2030 strategy for creating shared value, which sets out the Group's vision for 2030, 
                  has now reached its halfway point. Going forward, we will continue to push ahead without fear of change, taking 
                  into account the lessons learned in Stage 1, and envisage a grand design for the TOTO Group beyond 2030.
                  </p>

                  <div className='sign'>
                    <h5>Shinya Tamura</h5>
                    <p>
                      President,
                      <br />
                      Representative Director
                    </p>
                  </div>
                </div>
              </div>
              <div className='scroller-bar'>
                <div className='scroller-bar-inner'></div>
              </div>
            </div>

            <div className='btnClose' tabIndex={0} role='button'>
              <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 19 18'>
                <path
                  fillRule='evenodd'
                  fill='rgb(255, 255, 255)'
                  d='M18.109,15.876 L15.979,17.992 L9.58,11.115 L2.137,17.992 L0.7,15.876 L6.928,8.999 L0.7,2.123 L2.137,0.7 L9.58,6.884 L15.979,0.7 L18.109,2.123 L11.188,8.999 L18.109,15.876 Z'
                />
              </svg>
              CLOSE
            </div>
          </div>
        </div>

        <div id='modalVideo' tabIndex={0} role='button'>
          <div className='modal_container'>
            <div className='video'>
              <iframe
                className='video_iframe'
                title='purpose popup video'
                src='https://players.brightcove.net/4631489730001/BJKE2i5G_default/index.html?videoId=6284405588001'
              />
            </div>
            <div className='btnClose' tabIndex={0} role='button'>
              <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 19 18'>
                <path
                  fillRule='evenodd'
                  fill='rgb(255, 255, 255)'
                  d='M18.109,15.876 L15.979,17.992 L9.58,11.115 L2.137,17.992 L0.7,15.876 L6.928,8.999 L0.7,2.123 L2.137,0.7 L9.58,6.884 L15.979,0.7 L18.109,2.123 L11.188,8.999 L18.109,15.876 Z'
                />
              </svg>
              CLOSE
            </div>
          </div>
        </div>
        {/* <VideoPopup 
                isOpen={isOpenVideoPopup} 
                onClose={handleVideoPopupClose} 
                videoSrc="/assets/global/purpose/video/After-Sales Service.mp4"
            /> */}
      </main>
    </div>
  );
};

export default En;

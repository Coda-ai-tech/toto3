import Link from 'next/link';

const En = () => {
  return (
    <div className='page'>
      <section className='uq_cleanovation' id='security_touchless'>
        <div className='uq_cleanovation__kv'>
          <div className='kv--mv kv_tl'>
            <div className='kv--logo tl'>
              <img
                src='/assets/global/cleanovation/images/touchless_logo.svg'
                alt='The security of TOUCHLESS.A new world. A better way to clean.'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section products txtalign-c movie-section'>
        <header className='section__header innerEl-tight'>
          <h2 className='section__title'>CONCEPT MOVIE</h2>
        </header>
        <div className='movie__inner'>
          <Link id='mov01' href='6241504017001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img src='/assets/global/cleanovation/images/touchless__mov.jpg' alt='' />
          </Link>
        </div>
        {/* <header className='section__header innerEl-tight nth2'>
          <h2 className='section__title'>PRESENTATION MOVIE</h2>
        </header>
        <div className='movie__inner'>
          <a id='mov02' href='6284943209001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img src='/assets/global/cleanovation/images/touchless__mov02.jpg' alt='PLAY PRESENTATION MOVIE' />
          </a>
        </div> */}
      </section>

      {/* <!--
            <div className="movie2" id="security_touchless_movie">
                <div className="movie__inner is-padding_btm">
                    <a href="6241504017001" className="mainv-play no-barba" data-modal-open>
                        <img src="/assets/global/cleanovation/images/touchless__mov.jpg" alt="">
                    </a>
                </div>
            </div>
--> */}

      <section className='section global txtalign-c innerEl-huge'>
        <div className='global__inner'>
          <header className='section__header'>
            <p className='section__summary ld-txt'>
              TOTO’s promise to you is a clean, comfortable lifestyle that provides a safe,
              <br />
              convenient restroom experience with our touchless products.
            </p>
          </header>
          <div className='global__content'>
            {/* <!--                        <div className="global__thumbs"></div>--> */}
            <div className='stack'>
              <div className='rest01'>
                <figure>
                  <img
                    srcSet='/assets/global/cleanovation/images/touchless__toilet-left@2x.jpg 2x'
                    src='/assets/global/cleanovation/images/touchless__toilet-left.jpg'
                    alt=''
                  />
                </figure>
                <ul id='pin_group01' className='thumbnail-list'>
                  <li className='thumbnail-item' data-index='0'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='1'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='2'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='3'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='4'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                </ul>
              </div>
              <div className='rest02'>
                <figure>
                  <img
                    srcSet='/assets/global/cleanovation/images/touchless__toilet-right@2x.jpg 2x'
                    src='/assets/global/cleanovation/images/touchless__toilet-right.jpg'
                    alt=''
                  />
                </figure>
                <ul id='pin_group02' className='thumbnail-list'>
                  <li className='thumbnail-item' data-index='5'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='6' data-index-eq='0'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='7' data-index-eq='1'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                  <li className='thumbnail-item' data-index='8' data-index-eq='2'>
                    <img src='/assets/global/cleanovation/images/slider-map__pin.png' alt='' className='off' />
                    <img src='/assets/global/cleanovation/images/slider-map__current-pin.png' alt='' className='on' />
                  </li>
                </ul>
              </div>
            </div>
            <div id='g-slider' className='global__slider' aria-label='GlobalReferenceSlider'>
              <button className='global__sliderItem' data-index='0'>
                <figure className='global__sliderImg'>
                  <img src='/assets/global/cleanovation/images/slide01.jpg' alt='' />
                  <figcaption className='global__sliderCaption'>TOUCHLESS FAUCET</figcaption>
                </figure>
              </button>
              <button className='global__sliderItem' data-index='1'>
                <figure className='global__sliderImg'>
                  <img src='/assets/global/cleanovation/images/slide06.jpg' alt='' />
                  <figcaption className='global__sliderCaption'>
                    TOUCHLESS
                    <br />
                    SOAP DISPENSER
                  </figcaption>
                </figure>
              </button>
              <button className='global__sliderItem' data-index='2'>
                <figure className='global__sliderImg'>
                  <img src='/assets/global/cleanovation/images/slide02.jpg' alt='' />
                  <figcaption className='global__sliderCaption'>HAND DRYER</figcaption>
                </figure>
              </button>
              <button className='global__sliderItem' data-index='3'>
                <figure className='global__sliderImg'>
                  <img src='/assets/global/cleanovation/images/slide03.jpg' alt='' />
                  <figcaption className='global__sliderCaption'>
                    TOILET
                    <br />
                    <span>AUTO OPEN&nbsp;/&nbsp;CLOSE LID</span>
                  </figcaption>
                </figure>
              </button>
              <button className='global__sliderItem' data-index='4'>
                <figure className='global__sliderImg'>
                  <img src='/assets/global/cleanovation/images/slide05.jpg' alt='' />
                  <figcaption className='global__sliderCaption'>AUTO FLUSH</figcaption>
                </figure>
              </button>
              <button className='global__sliderItem' data-index='5'>
                <figure className='global__sliderImg'>
                  <img src='/assets/global/cleanovation/images/slide04.jpg' alt='' />
                  <figcaption className='global__sliderCaption'>
                    URINAL
                    <br />
                    <span>AUTO FLUSH</span>
                  </figcaption>
                </figure>
              </button>
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
              <Link href='/en/cleanovation/clean-synergy' className='js-scroll'>
                <picture className='kv--mv__image'>
                  <source
                    media='(max-width: 750px)'
                    srcSet='/assets/global/cleanovation/images/clean_synergy--sp.png'
                  />
                  <img
                    srcSet='/assets/global/cleanovation/images/clean_synergy@2x.png 2x'
                    src='/assets/global/cleanovation/images/clean_synergy.png'
                    alt='CLEAN SYNERGY Technology & Design'
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

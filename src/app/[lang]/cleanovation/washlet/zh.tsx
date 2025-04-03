import Link from 'next/link';

const Zh = () => {
  return (
    <div className='page'>
      <section className='uq_cleanovation' id='wachlet'>
        <div className='uq_cleanovation__kv'>
          <div className='kv--mv kv_wh'>
            <div className='kv--logo wh'>
              <img src='/assets/global/cleanovation/images/washlet_logo.svg' alt="Let's Wash with TOTO WASHLET" />
            </div>
          </div>
        </div>
      </section>

      <section className='section products txtalign-c movie-section'>
        {/* <header className='section__header innerEl-tight'>
          <h2 className='section__title'>CONCEPT MOVIE</h2>
        </header>
        <div className='movie__inner'>
          <a id='mov01' href='6241507311001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img src='/assets/global/cleanovation/images/washlet__mov.jpg' alt='' />
          </a>
        </div> */}
        {/* <header className='section__header innerEl-tight nth2'>
          <h2 className='section__title'>PRESENTATION MOVIE</h2>
        </header>
        <div className='movie__inner'>
          <a id='mov02' href='6285371199001' className='mainv-play no-barba no-transcript' data-modal-open>
            <img src='/assets/global/cleanovation/images/washlet__mov02.jpg' alt='PLAY PRESENTATION MOVIE' />
          </a>
        </div> */}
      </section>

      {/* <!--
    <div className="movie2" id="wachlet_movie">
        <div className="movie__inner">
            <a href="6241507311001" className="mainv-play no-barba" data-modal-open>
                <img src="./assets/images/washlet__mov.jpg" alt="" />
            </a>
        </div>
    </div>
--> */}

      <section className='section wiFull'>
        <div className='wiFull__inner innerEl-tight'>
          <img
            src='/assets/global/cleanovation/images/wipeToWash.jpg'
            alt='Wipe to Wash.Washing with WASHLET®️ provides you a cleaner life.'
          />
        </div>
      </section>

      <section id='wsh_hd' className='section wiFull'>
        <div className='wiFull__inner innerEl-tight'>
          <div className='stack rev'>
            <div className='wsh_hd__img'>
              <figure>
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img01_pc.jpg'
                  alt='customer voice'
                  className='pc-only'
                />
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img01_sp.jpg'
                  alt='customer voice'
                  className='sp-only'
                />
              </figure>
            </div>
            <div className='wsh_hd__txt'>
              <p>After using it once, it felt so good that now I can&apos;t live without it.</p>
            </div>
          </div>
          <div className='stack'>
            <div className='wsh_hd__img'>
              <figure>
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img02_pc.jpg'
                  alt='customer voice'
                  className='pc-only'
                />
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img02_sp.jpg'
                  alt='customer voice'
                  className='sp-only'
                />
              </figure>
            </div>
            <div className='wsh_hd__txt'>
              <p>It just feels so good when I can always wash with warm water.</p>
            </div>
          </div>
          <div className='stack rev'>
            <div className='wsh_hd__img'>
              <figure>
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img03_pc.jpg'
                  alt='customer voice'
                  className='pc-only'
                />
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img03_sp.jpg'
                  alt='customer voice'
                  className='sp-only'
                />
              </figure>
            </div>
            <div className='wsh_hd__txt'>
              <p className='m0'>
                Because I don&apos;t need to clean myself with paper, I just need to use paper for drying a bit, this is
                much smoother.
              </p>
            </div>
          </div>
          <div className='stack'>
            <div className='wsh_hd__img'>
              <figure>
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img04_pc.jpg'
                  alt='customer voice'
                  className='pc-only'
                />
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img04_sp.jpg'
                  alt='customer voice'
                  className='sp-only'
                />
              </figure>
            </div>
            <div className='wsh_hd__txt'>
              <p>I feel great because I feel completely clean.</p>
            </div>
          </div>
          <div className='stack rev'>
            <div className='wsh_hd__img'>
              <figure>
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img05_pc.jpg'
                  alt='customer voice'
                  className='pc-only'
                />
                <img
                  src='/assets/global/cleanovation/images/wsh_hd_img05_sp.jpg'
                  alt='customer voice'
                  className='sp-only'
                />
              </figure>
            </div>
            <div className='wsh_hd__txt'>
              <p className='m0'>
                The warm water is a good feeling like no other, not to mention feeling like I&apos;m completely clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='section wiFull m_set01'>
        <div className='wiFull__inner innerEl-tight'>
          <Link href='/en/washlethistory/' className='a_lock'>
            <span className='zoomPanel'>
              <img
                src='/assets/global/cleanovation/images/washlet-history.jpg'
                alt='WASHLET®️ HISTORY.Always Innovating to Spread a Culture of Everyday Comfort and Cleanliness.'
              />
            </span>
          </Link>
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
            </div>
          </div>
        </div>
      </section>

      <div className='uq_cleanovation--link' id='link'>
        <div className='uq_cleanovation--link__inner'>
          <ul>
            <li>
              <Link href='index.htm' className='js-scroll'>
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
              <a href='clean-synergy.htm' className='js-scroll'>
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
              </a>
            </li>
            <li>
              <a href='touchless.htm' className='js-scroll'>
                <picture className='kv--mv__image'>
                  <source media='(max-width: 750px)' srcSet='/assets/global/cleanovation/images/touchless--sp.png' />
                  <img
                    srcSet='/assets/global/cleanovation/images/touchless_link@2x.png 2x'
                    src='/assets/global/cleanovation/images/touchless_link.png'
                    alt='The security of TOUCHLESS'
                  />
                </picture>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Zh;
